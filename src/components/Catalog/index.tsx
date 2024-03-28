import { SyntheticEvent, useEffect } from "react";
import { BgGradient, Cell, MainBodyDecor } from "../../assets/decor/nonInteractive";
import Styles from "./style";
import { useSelector } from "react-redux";
import { authState } from "../../redux/slices/data/auth";
import Card from "./components/Card";
import { BtnNextBack } from "./components/BtnNextBack";
import { styleBtnNextBack } from "./components/BtnNextBack/style";

const Catalog = () => {
  const authR = useSelector(authState)

  useEffect(() => {
    console.log(authR.data);
  }, [])

  const cards = () => {
    const arrCards = []
    for (let i = 0; i < 12; i++) {
      arrCards.push(<Card style={{height: '12vw'}} />)
    }
    return arrCards
  }
 
  return ( 
    <>
      <Styles.CardContainer>
        {cards()}
      </Styles.CardContainer>
      <section>
        <BtnNextBack className={styleBtnNextBack()} style={{left: '.6vw'}}/>
        <BtnNextBack className={styleBtnNextBack()} style={{right: '.6vw', rotate: '180deg'}}/>
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