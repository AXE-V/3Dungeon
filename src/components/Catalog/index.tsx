// import { BgGradient, Cell, MainBodyDecor } from '../../assets/decor/nonInteractive';
// import Styles from './style.js';
// import { Card_1 } from '../Common/Cards/1';
// import { BtnNextBack } from '../Common/BtnNextBack';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispath } from '../../redux/store.js';
// import { supabase } from '../../supabase.js';
// import { useLocation } from 'react-router-dom';
// import { useAuth } from '../../providers/authProvider.js';
// import {
//   PostModel,
//   getLikedPosts,
//   getUserPosts,
//   postSelectorZipName,
// } from '../../redux/slices/data/post.js';
// import { useCustomDispatch } from '../../hooks/useCustomDispatch.js';
// import { NotFound } from '../NotFound.js';
// import { usePathValidate } from '../../hooks/usePathValidate.js';
// import { CardRender } from './CardRender.js';
// import { path } from '../../utils/path.js';
// import axios from '../../redux/axios.ts';

// const Catalog = () => {
//   const { user } = useAuth();
//   const dispatch = useCustomDispatch();
//   const validatePathes = usePathValidate();
//   const [fetchedData, setFetchedData] = useState<PostModel[]>();
//   const [isFetched, setIsFetched] = useState(false);

//   const rootPathFn = async () => {};
//   const modelsPathFn = async () => {
//     try {
//       if (isFetched) return;
//       const userPosts = await dispatch(getUserPosts(user?.id!)).unwrap();
//       setTimeout(() => {
//         setFetchedData(userPosts);
//       }, 1000);

//       setIsFetched(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const likesPathFn = async () => {
//     try {
//       if (isFetched) return;
//       const data = await dispatch(getLikedPosts(user?.id!)).unwrap();
//       console.log(data);
//       setIsFetched(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const catalogPathes = [
//     { path: `/`, fn: rootPathFn },
//     { path: `/user/${user?.user_metadata.login}/3d-models`, fn: modelsPathFn },
//     { path: `/user/${user?.user_metadata.login}/likes`, fn: likesPathFn },
//   ];

//   return (
//     <>
//       {!validatePathes(catalogPathes) ? (
//         <NotFound />
//       ) : (
//         <div>
//           <Styles.CardContainer>
//             {fetchedData && <CardRender data={fetchedData} />}
//           </Styles.CardContainer>
//           <section>
//             <BtnNextBack style={{ left: '.6vw' }} />
//             <BtnNextBack style={{ right: '.6vw', rotate: '180deg' }} />
//             <div className={Styles.cellContainer()}>
//               <Cell />
//               <Cell />
//               <Cell />
//               <Cell />
//             </div>
//             <BgGradient />
//             <MainBodyDecor />
//           </section>
//         </div>
//       )}
//     </>
//   );
// };

// export default Catalog;

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
  PostModel,
  getAllPosts,
  getLikedPosts,
  getPostCollections,
  getUserPosts,
  postSelectorZipName,
} from '../../redux/slices/data/post.js';
import { useCustomDispatch } from '../../hooks/useCustomDispatch.js';
import { NotFound } from '../NotFound.js';
import { usePathValidate } from '../../hooks/usePathValidate.js';
import { CardRender } from './CardRender.js';

const Catalog = () => {
  const { user } = useAuth();
  const dispatch = useCustomDispatch();
  const validatePathes = usePathValidate();
  const { pathname } = useLocation();
  const [fetchedData, setFetchedData] = useState<PostModel[]>();
  const [currentPath, setCurrentPath] = useState('');

  const pathes = {
    root: `/`,
    collections: `/user/${user?.user_metadata.login}/collections`,
    models: `/user/${user?.user_metadata.login}/3d-models`,
    likes: `/user/${user?.user_metadata.login}/likes`,
  };

  useEffect(() => {
    switch (pathname) {
      case pathes.root:
        const rootPathFn = async () => {
          const data = await dispatch(getAllPosts()).unwrap();
          setCurrentPath('main page');
          console.log(data);
          setTimeout(() => {
            setFetchedData(data);
          }, 1500);
        };
        rootPathFn();
        break;
      case pathes.collections:
        const collectionsPathFn = async () => {
          const data = await dispatch(getPostCollections(user?.id!)).unwrap();
          setCurrentPath('collections');
          console.log(data);
          setTimeout(() => {
            setFetchedData(data);
          }, 1500);
        };
        collectionsPathFn();
        break;
      case pathes.models:
        const modelsPathFn = async () => {
          try {
            const data = await dispatch(getUserPosts(user?.id!)).unwrap();
            setCurrentPath('models');
            console.log(data);
            setTimeout(() => {
              setFetchedData(data);
            }, 1500);
          } catch (error) {
            console.log(error);
          }
        };
        modelsPathFn();
        break;
      case pathes.likes:
        const likesPathFn = async () => {
          try {
            const data = await dispatch(getLikedPosts(user?.id!)).unwrap();
            setCurrentPath('likes');
            console.log(data);
            setTimeout(() => {
              setFetchedData(data);
            }, 1500);
          } catch (error) {
            console.log(error);
          }
        };
        likesPathFn();
        break;
    }
  }, []);

  return (
    <>
      {!validatePathes(Object.values(pathes)) ? (
        <NotFound />
      ) : (
        <div>
          <h1 style={{ position: 'absolute', left: '5.2vw', top: '6.5vw', opacity: 0.75 }}>
            {currentPath}
          </h1>
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
