import { BgGradient, Cell, MainBodyDecor } from '../../assets/decor/nonInteractive';
import { Styles as S } from './style.js';
import { BtnNextBack } from '../Common/BtnNextBack';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CardRender } from './CardRender.js';
import { useCatalogPathes } from './hooks/useCatalogPathes.js';
import { postFilterSelector } from '../../redux/slices/data/filter.js';
import { Message } from '../Common/Message/index.js';
import { postSelectorDownloads } from '../../redux/slices/data/post/index.js';

const Catalog = () => {
  const postFilterSlice = useSelector(postFilterSelector);
  const { collectionName, labelPath, swithPath } = useCatalogPathes();
  const postDownloads = useSelector(postSelectorDownloads);

  useEffect(() => {
    swithPath();
  }, []);

  return (
    <>
      <div>
        {postDownloads && (
          <Message style={{ position: 'absolute', left: '85vw', top: '6vw' }}>
            Downloading the model
          </Message>
        )}
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
