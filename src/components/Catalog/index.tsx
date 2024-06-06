import { BgGradient, Cell, MainBodyDecor } from '../../assets/decor/nonInteractive';
import Styles from './style.js';
import { Card_1 } from '../Common/Cards/1';
import { BtnNextBack } from '../Common/BtnNextBack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath } from '../../redux/store.js';
import { supabase } from '../../supabase.js';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../providers/authProvider.js';
import { getUserPosts, postSelectorZipName } from '../../redux/slices/data/post.js';
import { useCustomDispatch } from '../../hooks/useCustomDispatch.js';
import { Tables } from '../../interfaces/DatabaseGeneratedTypes.js';
import { getUserDataByID } from '../../redux/slices/data/user.js';
import { NotFound } from '../NotFound.js';
import { usePathValidate } from '../../hooks/usePathValidate.js';
import { imgs } from './sample.js';

type FetchedData = {
  postsData: Tables<'models'>[] | null;
  modelsData: any[] | null;
};
const Catalog = () => {
  const { user } = useAuth();
  const dispatch = useCustomDispatch();
  const validatePathes = usePathValidate();
  const [fetchedData, setFetchedData] = useState<FetchedData>({
    postsData: null,
    modelsData: null,
  });

  const rootPathFn = async () => {};
  const modelsPathFn = async () => {
    try {
      if (user?.id) {
        const userPosts = await dispatch(getUserPosts({ userId: user.id })).unwrap();
        console.log(userPosts);
        setFetchedData(userPosts);
        return userPosts;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const likesPathFn = async () => {};

  const catalogPathes = [
    { path: `/`, fn: rootPathFn },
    { path: `/user/${user?.user_metadata.login}/3d-models`, fn: modelsPathFn },
    { path: `/user/${user?.user_metadata.login}/likes`, fn: likesPathFn },
  ];

  // const catalogPathes = [
  //   `/`,
  //   `/user/${user?.user_metadata.login}/3d-models`,
  //   `/user/${user?.user_metadata.login}/likes`,
  // ];

  // const validatePathes = (pathes: string[]) => pathes.some((path) => path === pathname);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.storage
        .from('models')
        .list(`${user?.id}/barbie_dodge_pickup_custom_longcar_by_alex.ka`);
      console.log(data);
      console.log(error);

      return { data, error };
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(fetchedData);
  }, [fetchedData]);

  return (
    <>
      {!validatePathes(catalogPathes) ? (
        <NotFound />
      ) : (
        <div>
          <Styles.CardContainer>
            {/* {fetchedData.postsData &&
              fetchedData.postsData.map((item) => (
                <Card_1 key={item.id} data={{ ...item! }} style={{ height: '12vw' }} />
              ))} */}

            {imgs.map((img, i) => (
              <Card_1 key={i} img={img} style={{ height: '12vw' }} />
            ))}
          </Styles.CardContainer>
          <section>
            <BtnNextBack style={{ left: '.6vw' }} />
            <BtnNextBack style={{ right: '.6vw', rotate: '180deg' }} />
            <div className={Styles.cellContainer()}>
              <Cell />
              <Cell />
              <Cell />
              <Cell />
            </div>
            <BgGradient />
            <MainBodyDecor />
          </section>
        </div>
      )}
    </>
  );
};

export default Catalog;
