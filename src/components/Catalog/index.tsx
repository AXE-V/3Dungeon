import { BgGradient, Cell, MainBodyDecor } from "../../assets/decor/nonInteractive";
import Styles from "./style";
import {Card_1} from "../Common/Cards/1";
import { BtnNextBack } from "../Common/BtnNextBack";
import { setSession, userState } from "../../redux/slices/data/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { supabase } from "../../supabase";
import { AppDispath } from "../../redux/store";

// токен сессии по умолчанию 
// sb-guflskihwrcehwjtxlab-auth-token
const Catalog = () => {
  const userR = useSelector(userState)
  const dispatch = useDispatch<AppDispath>()
  
  useEffect(() => { 
    dispatch(setSession())
  }, [])

  useEffect(() => {
    localStorage.setItem('supabase session', JSON.stringify(userR.session))
  }, [userR.session])

  const cards = () => {
    const arrCards = []
    for (let i = 0; i < 12; i++) {
      arrCards.push(<Card_1 style={{height: '12vw'}} />)
    }
    return arrCards
  }
 
  return ( 
    <>
      <Styles.CardContainer>
        {cards()}
      </Styles.CardContainer>
      <section>
        <BtnNextBack  style={{left: '.6vw'}}/>
        <BtnNextBack  style={{right: '.6vw', rotate: '180deg'}}/>
        <div className={Styles.cellContainer()}>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
        </div>
        <BgGradient/>
        <MainBodyDecor/>
      </section>
    </>
   );
}
 
export default Catalog;