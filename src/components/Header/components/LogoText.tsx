import { FC } from "react";
import { SVGComponent } from "../../../interfaces/SVGComponent";

export const LogoText: FC<SVGComponent> = (props) => {
  return ( 
    <svg {...props} viewBox="0 0 192.11 35.05">
      <g id="logo_text">
        <text x="18.71" y="36.35" /> <text transform="translate(14.49 26.66) scale(0.99 1)" opacity="0.5" font-size="30.4"
          fill="#fff" font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">3Dungeon</text>
        <polyline points="179.33 3.41 0.5 3.41 0.5 18.79 6.49 24.87 6.49 35" fill="none" stroke="#1c1c1c"
          strokeMiterlimit="10" />
        <polygon points="154.94 1.41 178.98 1.41 178.98 3.41 148.89 3.41 154.94 1.41" fill="#1c1c1c" stroke="#1c1c1c"
          strokeMiterlimit="10" />
        <polygon points="35.08 34.55 11.05 34.55 11.05 32.55 41.14 32.55 35.08 34.55" fill="#1c1c1c" stroke="#1c1c1c"
          strokeMiterlimit="10" />
        <rect x="181.01" y="1.41" width="0.54" height="2.01" fill="#bfa613" stroke="#bfa613" strokeMiterlimit="10" />
        <rect x="8.62" y="32.55" width="0.54" height="2.01" fill="#bfa613" stroke="#bfa613" strokeMiterlimit="10" />
        <path d="M-7.67-3.8" transform="translate(18.71 36.35)" fill="#1c1c1c" stroke="#1c1c1c" strokeMiterlimit="10" />
        <polyline points="11.05 32.55 184.44 32.55 184.44 25.92" fill="none" stroke="#1c1c1c" strokeMiterlimit="10" />
        <rect x="187" y="25.92" width="1.88" height="7.22" fill="#4d4d4d" opacity="0.5" />
        <rect x="-15.99" y="-38.96" width="1.91" height="7.12" transform="translate(-31.72 15.99) rotate(90)" fill="#4d4d4d"
          opacity="0.75" />
        <rect x="190.23" y="25.92" width="1.88" height="7.22" fill="#4d4d4d" opacity="0.5" />
      </g>
    </svg>
   );
}