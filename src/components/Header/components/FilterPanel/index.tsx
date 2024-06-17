//@ts-nocheck
import { BtnReset } from './components/BtnReset';
import styles from '../../components/FilterPanel/style';
import { FC } from 'react';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { filterAllSelectData } from '../../../Common/Select/data';
import { Select } from '../../../Common/Select';
import { useSelector } from 'react-redux';
import { filterPostBy, postFilterSelector } from '../../../../redux/slices/data/filter';

const FilterPanel: FC<SVGComponent> = ({ style }) => {
  const size = '2vw';
  const postR = useSelector(postFilterSelector);

  return (
    <div className={styles.container()} style={{ ...style, transition: '.2s ease-out' }}>
      <div className={styles.group()}>
        {filterAllSelectData.map((data) => (
          <Select
            data={data}
            key={Object.keys(data)[0]}
            filterBy={Object.keys(data)[0]}
            style={{ height: size, fontSize: '0.8vw' }}
            sliceValue={postR[Object.values(data)[0]]}
            action={filterPostBy}
            isFilter
          />
        ))}
      </div>

      <div className={styles.group()}>
        <BtnReset style={{ height: size, cursor: 'pointer', userSelect: 'none' }} />
      </div>
    </div>
  );
};

export default FilterPanel;
