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
import {
  PostBlob,
  PostModel,
  getUserPosts,
  loadPostFiles,
  postSelectorZipName,
} from '../../redux/slices/data/post.js';
import { useCustomDispatch } from '../../hooks/useCustomDispatch.js';
import { NotFound } from '../NotFound.js';
import { usePathValidate } from '../../hooks/usePathValidate.js';
import { CardRender } from './CardRender.js';
import { path } from '../../utils/path.js';
import axios from '../../redux/axios.ts';

const Catalog = () => {
  const { user } = useAuth();
  const dispatch = useCustomDispatch();
  const validatePathes = usePathValidate();
  const [fetchedData, setFetchedData] = useState<PostModel[]>();
  const [isFetched, setIsFetched] = useState(false);

  const rootPathFn = async () => {};
  const modelsPathFn = async () => {
    try {
      if (isFetched) return;
      const userPosts = await dispatch(getUserPosts(user?.id!)).unwrap();
      setTimeout(() => {
        setFetchedData(userPosts);
      }, 1000);

      setIsFetched(true);
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

  return (
    <>
      {!validatePathes(catalogPathes) ? (
        <NotFound />
      ) : (
        <div>
          <Styles.CardContainer>
            {fetchedData && <CardRender data={fetchedData} />}
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
