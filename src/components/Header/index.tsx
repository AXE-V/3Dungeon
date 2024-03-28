
import styles from './style';
import {BtnFilter} from './components/FilterPanel/BtnFilter';

import {BtnNotification} from './components/BtnNotification';
import {BtnUpload} from './components/BtnUpload';
import {BtnUser} from './components/BtnUser';
import {HeaderBg} from './components/HeaderBg';
import {Logo} from './components/Logo';
import {LogoText} from './components/LogoText';
import {Search} from './components/Search'; 
import FilterPanel from './components/FilterPanel/index';
import { SyntheticEvent, useState } from 'react';
import { cssAnimations } from '../../style';
import { Link } from 'react-router-dom';
import { styleController } from '../../assets/decor/interactive';
import { BtnCart } from './components/CartPanel/BtnCart';


const Header = () => {
  const [filterPanelIsOpen, setFilterPanelIsOpen] = useState(false)
  const height = "2.2vw"

  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {    
    !filterPanelIsOpen ? styleController(e, {command: 'remove'}) : void 0
  }

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {  
    !filterPanelIsOpen ? styleController(e, {command: 'add'}) : void 0
  }
  
  return ( 
    <>
      <header className={styles.header()}>
        <HeaderBg/>      
        <Link to={'/'} className={styles.logo()}>
          <Logo width="2.9vw"/>
          <LogoText height="1.7vw"/>
        </Link>
        <Search />
        <div className={styles.buttons()}>
          <BtnFilter 
            style={{height: height}}
            stateValue={filterPanelIsOpen}
            setStateValue={setFilterPanelIsOpen}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
            />
          <BtnCart 
            style={{ height: height }}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver} />
          <BtnNotification 
            style={{height: height}}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            />
          <BtnUpload 
            style={{height: height}}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            />
          <BtnUser 
            style={{height: height}}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            />
        </div>
        <FilterPanel 
          style={{
            opacity: filterPanelIsOpen ? 1 : 0, 
            display: filterPanelIsOpen ? void 0 : 'none', 
            animation: filterPanelIsOpen ? 
            `${cssAnimations.shiftBottom} .2s ease-out forwards` : void 0}}
            />
      </header>
      
    </>
   );
}
 
export default Header;