import { FC } from "react";
import { SVGComponent } from "../../../interfaces/SVGComponent";
import { Link } from "react-router-dom";

export const BtnUser: FC<SVGComponent> = ({style, onMouseLeave, onMouseOver}) => {
  return ( 
    <Link to='/user/:id'>
      <svg 
        style={{...style}}
        onMouseLeave={onMouseLeave} 
        onMouseOver={onMouseOver}
        viewBox="0 0 42.5 40">
      <polygon points="37.28 40 0.52 40 0 14.64 3.18 10.11 3.15 0.01 39.93 0.01 39.93 37.34 37.28 40" fill="#1c1c1c"
        data-focus-fill />
      <g>
        <ellipse cx="19.96" cy="14.4" rx="8.91" ry="9.04" fill="#4d4d4d" />
        <polygon
          points="26.17 26.94 13.76 26.94 12.02 25.18 11.06 25.59 11.06 31.91 13.76 34.66 26.17 34.66 28.87 31.91 28.87 25.59 27.9 25.18 26.17 26.94"
          fill="#4d4d4d" />
      </g>
      <line x1="42" x2="42" y2="3.17" fill="none" stroke="#c6b63f" strokeMiterlimit="10" />
      <line x1="42" y1="37.43" x2="42" y2="4.13" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" opacity="0.5" />
  </svg>
    </Link>
   );
}