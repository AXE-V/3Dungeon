import { BgGradient, Cell, MainBodyDecor } from '../../assets/decor/nonInteractive';
import Styles from './style.js';
import { Card_1 } from '../Common/Cards/1';
import { BtnNextBack } from '../Common/BtnNextBack';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../redux/store.js';
import { supabase } from '../../supabase.js';

const Catalog = () => {
  const cards = () => {
    const arrCards = [];
    for (let i = 0; i < 12; i++) {
      arrCards.push(<Card_1 key={i} style={{ height: '12vw' }} />);
    }
    return arrCards;
  };

  return (
    <>
      <Styles.CardContainer>{cards()}</Styles.CardContainer>
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
    </>
  );
};

export default Catalog;
