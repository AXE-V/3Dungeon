import { BtnReset } from './components/BtnReset';
import styles from '../../components/FilterPanel/style';
import { FC, ReactNode } from 'react';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { useLocation } from 'react-router-dom';
import { StyleElements as SE } from '../../../Common/styleElements';
import { filterAllSelectData } from '../../../Common/Select/data';
import { Select } from '../../../Common/Select';

const FilterPanel: FC<SVGComponent> = ({ style }) => {
  const size = '2vw';
  return (
    <div className={styles.container()} style={{ ...style, transition: '.2s ease-out' }}>
      <div className={styles.group()}>
        {filterAllSelectData.map((data, i) => (
          <Select data={data} key={i} lskey="filter" />
        ))}
        {/* <SE.Button>delete selected</SE.Button> */}
      </div>

      <div className={styles.group()}>
        <BtnReset style={{ height: size }} />
      </div>
    </div>
  );
};

export default FilterPanel;
