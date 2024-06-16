// import { BgGradient, Cell, MainBodyDecor } from '../../assets/decor/nonInteractive';
// import { Styles as S } from './style.js';
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
//   getAllPosts,
//   getLikedPosts,
//   getPostCollections,
//   // getPostCollections,
//   getUserPosts,
//   postSelectorZipName,
// } from '../../redux/slices/data/post/index.js';
// import { useCustomDispatch } from '../../hooks/useCustomDispatch.js';
// import { NotFound } from '../NotFound.js';
// import { usePathValidate } from '../../hooks/usePathValidate.js';
// import { CardRender } from './CardRender.js';
// import { useCatalogPathes } from './hooks/pathes.js';
// import {
//   postFilterSelector,
//   setCatalogData,
//   setCatalogPath,
// } from '../../redux/slices/data/filter.js';
// import { pathVariantFn } from './hooks/pathVariantFn.js';

// const Catalog = () => {
//   const { user } = useAuth();
//   const validatePathes = usePathValidate();
//   const { pathname } = useLocation();
//   const postFilterSlice = useSelector(postFilterSelector);
//   const pathes = useCatalogPathes();
//   const { pathFunction, labelPath, dispatch } = pathVariantFn();

//   useEffect(() => {
//     switch (pathname) {
//       case pathes.root:
//         pathFunction({ cb: () => getAllPosts(), path: pathes.root, pathLabel: 'main page' });
//         break;
//       case pathes.collections:
//         pathFunction({
//           cb: () => getPostCollections(user?.id!),
//           path: pathes.collections,
//           pathLabel: 'collections',
//         });
//         break;
//       case pathes.models:
//         pathFunction({
//           cb: () => getUserPosts(user?.id!),
//           path: pathes.models,
//           pathLabel: 'models',
//         });
//         break;
//       case pathes.likes:
//         pathFunction({
//           cb: () => getLikedPosts(user?.id!),
//           path: pathes.likes,
//           pathLabel: 'likes',
//         });
//         break;
//     }
//     console.log(postFilterSlice);
//   }, []);

//   return (
//     <>
//       {!validatePathes(Object.values(pathes)) ? (
//         <NotFound />
//       ) : (
//         <div>
//           <h1 style={{ position: 'absolute', left: '5.2vw', top: '6.5vw', opacity: 0.75 }}>
//             {labelPath}
//           </h1>
//           <S.CardContainer>
//             {/* {fetchedData && <CardRender data={fetchedData} />} */}
//             {postFilterSlice.filteredCatalogData && (
//               <CardRender data={postFilterSlice.filteredCatalogData} />
//             )}
//           </S.CardContainer>
//           <section>
//             <BtnNextBack style={{ left: '.6vw' }} />
//             <BtnNextBack style={{ right: '.6vw', rotate: '180deg' }} />
//             <div className={S.cellContainer()}>
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
import { Styles as S } from './style.js';
import { Card_1 } from '../Common/Cards/1';
import { BtnNextBack } from '../Common/BtnNextBack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath } from '../../redux/store.js';
import { supabase } from '../../supabase.js';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../providers/authProvider.js';
import {
  PostModel,
  getAllPosts,
  getLikedPosts,
  getPostCollections,
  // getPostCollections,
  getUserPosts,
  postSelectorZipName,
} from '../../redux/slices/data/post/index.js';
import { useCustomDispatch } from '../../hooks/useCustomDispatch.js';
import { NotFound } from '../NotFound.js';
import { usePathValidate } from '../../hooks/usePathValidate.js';
import { CardRender } from './CardRender.js';
import { useCatalogPathes } from './hooks/pathes.js';
import {
  postFilterSelector,
  setCatalogData,
  setCatalogPath,
} from '../../redux/slices/data/filter.js';
import { pathVariantFn } from './hooks/pathVariantFn.js';
import { path } from '../../utils/path.js';

const Catalog = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const postFilterSlice = useSelector(postFilterSelector);
  const { pathes, collectionName } = useCatalogPathes();
  const { pathFunction, labelPath, dispatch } = pathVariantFn();

  useEffect(() => {
    switch (pathname) {
      case pathes.root:
        pathFunction({ cb: () => getAllPosts(), path: pathes.root, pathLabel: 'main page' });
        break;
      case pathes.collections:
        pathFunction({
          cb: () => getPostCollections(user?.id!),
          path: pathes.collections,
          pathLabel: 'collections',
        });
        break;
      case pathes.models:
        pathFunction({
          cb: () => getUserPosts(user?.id!),
          path: pathes.models,
          pathLabel: 'models',
        });
        break;
      case pathes.likes:
        pathFunction({
          cb: () => getLikedPosts(user?.id!),
          path: pathes.likes,
          pathLabel: 'likes',
        });
        break;
    }
    console.log(postFilterSlice);
  }, []);

  return (
    <>
      <div>
        <h1 style={{ position: 'absolute', left: '5.2vw', top: '6.5vw', opacity: 0.75 }}>
          {labelPath} {collectionName}
        </h1>
        <S.CardContainer>
          {postFilterSlice.filteredCatalogData && (
            <CardRender data={postFilterSlice.filteredCatalogData} />
          )}
        </S.CardContainer>
        <section>
          <BtnNextBack style={{ left: '.6vw' }} />
          <BtnNextBack style={{ right: '.6vw', rotate: '180deg' }} />
          <div className={S.cellContainer()}>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
          </div>
          <BgGradient />
          <MainBodyDecor />
        </section>
      </div>
    </>
  );
};

export default Catalog;
