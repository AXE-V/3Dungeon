import styles from './style';
import { BtnFilter } from './components/FilterPanel/components/BtnFilter';
import { BtnNotification } from './components/BtnNotification';
import { BtnUpload } from './components/BtnUpload';
import { BtnUser } from './components/UserPanel/BtnUser';
import { HeaderBg } from './components/HeaderBg';
import { Logo } from '../Common/Logo';
import { LogoText } from './components/LogoText';
import { Search } from './components/Search';
import FilterPanel from './components/FilterPanel/index';
import { useState } from 'react';
import { cssAnimations } from '../../style';
import { Link } from 'react-router-dom';
import { BtnCart } from './components/CartPanel/components/BtnCart';
import { CartPanel } from './components/CartPanel';
import { useAuth } from '../../providers/authProvider';

const Header = () => {
  const [filterPanelIsOpen, setFilterPanelIsOpen] = useState(false);
  const [cartPanelIsOpen, setCartPanelIsOpen] = useState(false);
  const height = '2.2vw';
  const { session } = useAuth();

  return (
    <>
      <header className={styles.header()}>
        <HeaderBg />
        <Link to={'/'} className={styles.logo()}>
          <Logo width="2.9vw" />
          <LogoText height="1.7vw" />
        </Link>
        <Search />
        <div className={styles.buttons()}>
          <BtnFilter
            style={{ height: height }}
            stateValue={filterPanelIsOpen}
            setStateValue={setFilterPanelIsOpen}
          />
          <BtnCart
            style={{ height: height }}
            stateValue={cartPanelIsOpen}
            setStateValue={setCartPanelIsOpen}
          />
          <BtnNotification style={{ height: height }} />
          <BtnUpload style={{ height: height }} session={session} />
          <BtnUser style={{ height: height }} session={session} />
        </div>
        <FilterPanel
          style={{
            opacity: filterPanelIsOpen ? 1 : 0,
            display: filterPanelIsOpen ? void 0 : 'none',
            animation: filterPanelIsOpen
              ? `${cssAnimations.shiftBottom} .2s ease-out forwards`
              : void 0,
          }}
        />
      </header>
      {cartPanelIsOpen && <CartPanel />}
    </>
  );
};

export default Header;
