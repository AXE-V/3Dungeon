import { FC, SyntheticEvent } from "react";
import { SVGComponent } from "../../../../../interfaces/SVGComponent";
import { styleController } from "../../../../../utils/styleController";
export const BtnFilter: FC<SVGComponent> = ({style, stateValue, setStateValue}) => {

  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {    
    !stateValue ? styleController({target: e, command: 'remove'}) : void 0
  }

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {  
    !stateValue ? styleController({target: e, command: 'add', style: {fill: '#111'}}) : void 0
  }

  function onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
    setStateValue?.(!stateValue)
    stateValue ? styleController({target: e, command: 'add'}) : 
    styleController({target: e, command: 'add', style: {stroke: '#c6b63f', fill: '#111'}})
  }

  return ( 
     <svg
    style={{...style}} 
    onClick={onClick}
    onMouseOver={onMouseOver}
    onMouseLeave={onMouseLeave}
    viewBox="0 0 42 42.5">
      <polygon points="0 4.43 0 40.08 38.92 40.08 38.92 24.36 42 21.12 42 0 5.25 0 0 4.43" fill="#1c1c1c" data-focus-fill/>
      <polyline points="22.15 31.03 20.18 29.15 27.86 21.82 25.78 19.84 13.33 31.72 11.23 29.72 30.53 11.31 28.48 9.36 16.45 20.84 13.86 18.36 19.15 13.32 17.07 11.34" fill="none" stroke="#4a4a4a" data-focus-stroke strokeMiterlimit="10"/>
      <line y1="42" x2="32.78" y2="42" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" opacity="0.25"/>
      <line x1="38.85" y1="42" x2="34.19" y2="42" fill="none" stroke="#c6b63f" strokeMiterlimit="10"/>
    </svg>
   );
}