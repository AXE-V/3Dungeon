import { BgGradient, Cell, MainBodyDecor } from '../../assets/decor/nonInteractive';
import { Styles as S } from './style.js';
import { BtnNextBack } from '../Common/BtnNextBack';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../providers/authProvider.js';
import {
  getAllPosts,
  getLikedPosts,
  getPostCollections,
  getUserPosts,
} from '../../redux/slices/data/post/index.js';
import { CardRender } from './CardRender.js';
import { useCatalogPathes } from './hooks/pathes.js';
import { postFilterSelector } from '../../redux/slices/data/filter.js';
import { pathVariantFn } from './hooks/pathVariantFn.js';

const Catalog = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const postFilterSlice = useSelector(postFilterSelector);
  const { pathes, collectionName } = useCatalogPathes();
  const { pathFunction, labelPath } = pathVariantFn();

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
