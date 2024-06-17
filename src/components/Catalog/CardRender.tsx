import { Card_1 } from '../Common/Cards/1';
import { DeleteCollection, PostModel, deletePostCollection } from '../../redux/slices/data/post';
import { Link, useLocation } from 'react-router-dom';
import { useCatalogPathes } from './hooks/pathes';
import { useAuth } from '../../providers/authProvider';
import { useDispatch, useSelector } from 'react-redux';
import { postFilterSelector } from '../../redux/slices/data/filter';
import { Styles as S } from './style.js';
import { SyntheticEvent, useEffect, useState } from 'react';
import { getUserDataByID } from '../../redux/slices/data/user.js';
import { useCustomDispatch } from '../../hooks/useCustomDispatch.js';
import { Tables } from '../../interfaces/DatabaseGeneratedTypes.js';

export const CardRender = ({ data }: { data: PostModel[] }) => {
  const { pathname } = useLocation();
  const { pathes } = useCatalogPathes();
  const { user } = useAuth();
  const [userData, setUserData] = useState<Tables<'users'>>();
  const postFilterSlice = useSelector(postFilterSelector);
  const collectionNames = [...new Set(postFilterSlice.filteredCatalogData.map((obj) => obj.id))];
  const dispath = useCustomDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await dispath(getUserDataByID(user?.id!)).unwrap();
      setUserData(data);
    };
    getData();
  }, []);

  const onDelete = (props: DeleteCollection & { event: SyntheticEvent<EventTarget> }) => {
    props.event.preventDefault();
    dispath(deletePostCollection(props));
  };
  return (
    <>
      {pathname === pathes.collections
        ? collectionNames.map((name) => (
            <Link
              key={name}
              style={{ width: '100%' }}
              to={`/user/${userData?.login}/collections/${name}`}>
              <S.button
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  rowGap: '.5vw',
                }}>
                <p>{name}</p>
                <S.delete onClick={(e) => onDelete({ event: e, uid: user?.id!, id: name! })}>
                  [delete]
                </S.delete>
              </S.button>
            </Link>
          ))
        : data?.map((obj) => (
            <Card_1
              key={obj.post.id}
              post={obj.post}
              model={obj.model}
              style={{ height: '12vw' }}
            />
          ))}
    </>
  );
};
