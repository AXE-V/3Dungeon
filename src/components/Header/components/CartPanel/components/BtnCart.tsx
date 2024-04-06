import { FC, SyntheticEvent } from "react";
import { SVGComponent } from "../../../../../interfaces/SVGComponent";
import { styleController } from "../../../../../utils/styleController";

export const BtnCart: FC<SVGComponent> = ({style, stateValue, setStateValue}) => {

  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {    
    !stateValue ? styleController({target: e, command: 'remove'}) : void 0
  }

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {  
    !stateValue ? styleController({target: e, command: 'add', style: {fill: '#111'}}) : void 0
  }

  function onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
    setStateValue?.(!stateValue)
    stateValue ? styleController({target: (e.currentTarget as HTMLElement).childNodes[7].childNodes, 
    command: 'add', 
    tags: [
      {value: 'fill', style: {fill: '#4a4a4a'}},
      {value: 'stroke', style: {stroke: '#4a4a4a'}},
    ]}) : 
    styleController({target: (e.currentTarget as HTMLElement).childNodes[7].childNodes, 
    command: 'add', 
    tags: [
      {value: 'fill', style: {fill: '#c6b63f'}},
      {value: 'stroke', style: {stroke: '#c6b63f'}},
    ]})
  }

  return ( 
    <>
      <svg 
        style={style}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        viewBox="0 0 42 42.5">
        <polygon points="38.89 0 2.99 0 2.99 40.08 42 40.08 42 3.19 38.89 0" fill="#1c1c1c" data-focus-fill />
        <polyline data-name="indicator" points="2.99 15.87 2.99 15.87 0 12.8 0 0 2.99 0" fill="#4d4d4d" opacity="0.25" />
        <line x1="2.93" y1="42" x2="27.17" y2="42" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" opacity="0.25" />
        <path d="M1609.52,60" transform="translate(-1585.07 -18.03)" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          opacity="0.1" />
        <path d="M1588,60" transform="translate(-1585.07 -18.03)" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          opacity="0.1" />
        <line x1="28.39" y1="41.99" x2="33.55" y2="41.99" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          opacity="0.5" />
        <line x1="34.63" y1="41.99" x2="36.58" y2="41.99" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          opacity="0.75" />
        <g>
          <ellipse cx="14.81" cy="29.85" rx="1.95" ry="2" fill="#4d4d4d" data-fill/>
          <ellipse cx="32.01" cy="29.85" rx="1.95" ry="2" fill="#4d4d4d" data-fill/>
          <polyline points="17.98 25.75 15.22 28.59 31.57 28.59" fill="none" stroke="#4d4d4d" data-stroke strokeMiterlimit="10" />
          <polygon
            points="32.04 25.75 16.75 25.75 12.34 21.39 12.34 12.2 32.11 12.2 34.32 12.2 32.11 12.2 30.34 14.01 30.34 22.68 32.04 24.42 32.04 25.75"
            fill="none" stroke="#4d4d4d" data-stroke strokeMiterlimit="10" />
        </g>
        <line x1="41.94" y1="42" x2="37.61" y2="42" fill="none" stroke="#c6b63f" strokeMiterlimit="10" />
     </svg>
    </>
   );
}