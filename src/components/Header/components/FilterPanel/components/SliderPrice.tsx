import { FC } from "react";
import { SVGComponent } from "../../../../../interfaces/SVGComponent";

export const SliderPrice: FC<SVGComponent> = (props) => {
  return ( 
    <svg {...props} viewBox="0 0 97.91 26.78">
    <g id="slider">
      <rect data-range="range" x="3.06" y="8.82" width="90" height="7.47" fill="#0a0a0a" />
      <rect data-holder="holder" x="3.06" y="8.82" width="9.65" height="7.47" fill="#bfa613" />
      <text data-min_price="min_price" transform="translate(0 6)" opacity="0.75" font-size="12" fill="#fff"
        font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">0</text>
      <text data-max_price="max_price" transform="translate(72.71 6)" opacity="0.75" font-size="12" fill="#fff"
        font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">500</text>
      <text transform="translate(37.94 23.59)" opacity="0.5" font-size="10" fill="#fff"
        font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">usd</text>
      <line x1="56.88" y1="26.28" x2="39.29" y2="26.28" fill="none" stroke="#bfa613" strokeMiterlimit="10"
        opacity="0.5" />
      <g>
        <line x1="3.06" y1="21.88" x2="3.06" y2="20.53" fill="none" stroke="#bfa613" strokeMiterlimit="10" />
        <g opacity="0.5">
          <polyline points="4.06 20.9 20.12 20.9 25.5 26.28 35.41 26.28" fill="none" stroke="#4d4d4d"
            strokeMiterlimit="10" />
          <polygon points="31.4 25.28 35.41 25.28 35.41 26.65 29.29 26.65 31.4 25.28" fill="#4d4d4d" />
          <polygon points="9.28 21.88 4.06 21.88 4.06 20.53 11.44 20.53 9.28 21.88" fill="#4d4d4d" />
        </g>
        <line x1="36.46" y1="25.28" x2="36.46" y2="26.65" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          opacity="0.25" />
        <line x1="37.87" y1="25.28" x2="37.87" y2="26.65" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          opacity="0.1" />
        <polygon points="35.41 21.04 34.19 22.27 32.97 23.5 32.97 21.04 32.97 18.59 34.19 19.82 35.41 21.04"
          fill="#4d4d4d" opacity="0.25" />
        <line x1="32" y1="18.53" x2="32" y2="23.5" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" opacity="0.1" />
      </g>
      <g>
        <g opacity="0.5">
          <polyline points="60.4 26.28 82.35 26.28 82.35 26.28" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" />
          <polygon points="64.41 25.28 60.4 25.28 60.4 26.65 66.52 26.65 64.41 25.28" fill="#4d4d4d" />
          <path d="M981.53,556.64" transform="translate(-897.15 -536.11)" fill="#4d4d4d" />
        </g>
        <line x1="59.36" y1="25.28" x2="59.36" y2="26.65" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          opacity="0.25" />
        <line x1="57.94" y1="25.28" x2="57.94" y2="26.65" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          opacity="0.1" />
        <polygon points="60.4 21.04 61.63 22.27 62.84 23.5 62.84 21.04 62.84 18.59 61.63 19.82 60.4 21.04" fill="#4d4d4d"
          opacity="0.25" />
        <line x1="63.82" y1="18.53" x2="63.82" y2="23.5" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          opacity="0.1" />
      </g>
      <path d="M920.15,562.39" transform="translate(-897.15 -536.11)" fill="none" stroke="#4d4d4d"
        strokeMiterlimit="10" />
      <line x1="27.32" y1="7.06" x2="32.35" y2="7.06" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" opacity="0.1" />
      <line x1="63.76" y1="7.06" x2="68.8" y2="7.06" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" opacity="0.1" />
      <polyline points="33.5 7.06 39.29 7.06 42.44 3.91 48.06 3.91" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        opacity="0.25" />
      <polyline points="62.62 7.06 56.82 7.06 53.68 3.91 48.06 3.91" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        opacity="0.25" />
      <text transform="translate(66.52 23.23)" opacity="0.5" font-size="10" fill="#bfa613"
        font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">02</text>
      <g opacity="0.25">
        <g>
          <rect x="85.19" y="18.88" width="7.4" height="7.4" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" />
          <line x1="85.19" y1="18.88" x2="92.59" y2="26.28" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" />
        </g>
      </g>
    </g>
  </svg>
   );
}