import { FC } from "react";
import { SVGComponent } from "../../../../interfaces/SVGComponent";
import { Styles } from "../style";
import { Cross } from "../../../User/components/Cross";
import { Link } from "react-router-dom";

export const ExtiBtn: FC<SVGComponent> = (params) => {
  return ( 
  <Link to={'/'} 
    style={{
      position: 'absolute', 
      right: '2.5vw', 
      top: '1.6vw'}}
      >
   <div style={{position: 'relative'}}>
 
    <Styles.Text>Exit</Styles.Text>
    <Cross 
      style={{
        position: 'absolute', 
        right: '0', 
        top: '.4vw', 
        zIndex: 1, 
        width: '2.4vw', 
        marginRight: '1vw'}}
        />


    <svg id="Слой_1" {...params} style={{width: '11.1vw'}} data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.48 53.7">
  <g id="btn_exit">
    <path d="M976.62,401.45H757.14v41l12.68,12.68h206.8v-3.77l-8.86-8.86-9.71-9.71,2.08-2.08,7.63,7.63V416.22l8.86-8.86Zm-83.44,2.88,10.37,10.37v4.94l-15.23-15.23Zm10.28,29.6L884,452H777.86l-11.19-11.19V408.58l4-4,114.91-.27,18.1,18.1C903.58,426.94,903.54,429.39,903.46,433.93Z" transform="translate(-757.14 -401.45)" fill="#c6b63f" opacity="0.75"/>
    <polyline points="12.81 36.97 23.83 47.99 43.51 47.99" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5"/>
    <polyline points="139.86 17.2 143.92 21.26 143.92 29.91 132.87 40.96" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75" opacity="0.75"/>
    <g opacity="0.5">
      <g>
        <line x1="45.56" y1="47.99" x2="47.06" y2="47.99" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75"/>
        <line x1="49.73" y1="47.99" x2="64.38" y2="47.99" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75" stroke-dasharray="2.66 2.66"/>
        <line x1="65.71" y1="47.99" x2="67.21" y2="47.99" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75"/>
      </g>
    </g>
    <g opacity="0.75">
      <g>
        <line x1="26.86" y1="6.19" x2="28.36" y2="6.19" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75"/>
        <line x1="31.02" y1="6.19" x2="45.68" y2="6.19" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75" stroke-dasharray="2.66 2.66"/>
        <line x1="47.01" y1="6.19" x2="48.51" y2="6.19" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75"/>
      </g>
    </g>
    <g opacity="0.75">
      <g>
        <line x1="130.18" y1="7.63" x2="131.24" y2="8.69" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75"/>
        <line x1="133.27" y1="10.72" x2="136.32" y2="13.77" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75" stroke-dasharray="2.87 2.87"/>
        <line x1="137.33" y1="14.78" x2="138.39" y2="15.84" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75"/>
      </g>
    </g>
    <polyline points="125.92 42.87 140.41 28.38 140.41 23.01 125.33 7.93" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5"/>
    <polyline points="24.95 6.19 14.6 6.19 12.63 8.16 12.63 13.44" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75" opacity="0.75"/>
    <line x1="2.08" y1="1.19" x2="2.08" y2="8.54" fill="none" stroke="#161616" stroke-miterlimit="10"/>
    <line x1="4.91" y1="1.19" x2="4.91" y2="8.54" fill="none" stroke="#161616" stroke-miterlimit="10"/>
    <polyline points="16.77 9.82 55.6 9.82 59.65 5.76" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5"/>
    <polyline points="25.48 44.62 77.01 44.62 80.46 48.07" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="0.75" opacity="0.75"/>
  </g>
</svg>
   </div>
    </Link>
   );
}