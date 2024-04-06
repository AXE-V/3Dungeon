import { FC } from "react";
import { SVGComponent } from "../../../../interfaces/SVGComponent";
import { Styles } from "./style";
import { Scrollbar } from "../../../Common/Scroll";
import { Card_2 } from "../../../Common/Cards/2";
import BtnPay from "./components/BtnPay";

export const CartPanel: FC<SVGComponent> = ({style}) => {
  return ( 
    <div style={{position: 'absolute', right: 0, top: 66, ...style}}>
     <Styles.Container>
      <div className={Styles.header()}>
        <span style={{position: 'relative', opacity: .75}}>Shopping cart</span>
        <Styles.Counter>12</Styles.Counter>
      </div>
      <Scrollbar
        buttons={false}
        windowStyle={{
          width: '100%', 
          display: 'grid',
          gridTemplateColumns: '1fr .05fr',
          height: '71.7vh'
        }}>
        <div style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '1vw'}}>
          {[...new Array(15)].map((_, i) => (
            <>
              <Card_2 key={i} style={{width: '85%'}}/>
            </>
          ))}
        </div>
      </Scrollbar>
      <output>Total 237 USD</output>
      <BtnPay style={{width: '20vw', padding: '1vw 0'}}/>
     </Styles.Container>
    </div>
   );
}
 
