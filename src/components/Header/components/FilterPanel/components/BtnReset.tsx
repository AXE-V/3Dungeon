import { FC } from "react";
import { SVGComponent } from "../../../../../interfaces/SVGComponent";

export const BtnReset: FC<SVGComponent> = (props) => {
  return ( 
    <svg {...props} viewBox="0 0 101.5 37.5">
    <g>
      <text transform="translate(59.28 35.53) scale(1.01 1)" opacity="0.5" font-size="9.91" fill="#bfa613"
        font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">09</text>
      <path data-name="bg"
        d="M899,556.1h18.51l4.56,5.63h27.6l5-4.92h20l4.93,4.92h1.15l2.64-2.82,11.25.17V548l4.36-7.93c.11,0,0-6.33,0-6.33H990.2L986,531.06h-.4l-41.72-.17-3.09,3.72h-37L899,540.34Z"
        transform="translate(-898.96 -528.57)" fill="#161616" />
      <polygon points="43.82 3.62 17.21 3.62 14.79 6.01 41.8 6.01 43.82 3.62" fill="#4d4d4d" opacity="0.25" />
      <text transform="translate(14.79 22.48) scale(1.01 1)" opacity="0.75" font-size="19.82" fill="#fff"
        font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">RESET</text>
      <g opacity="0.25">
        <g>
          <polyline points="71.14 0.5 87 0.5 91.25 3.18 99.96 3.18" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" />
          <polygon points="96.02 1.99 99.96 1.99 99.96 3.18 93.87 3.18 96.02 1.99" fill="#4d4d4d" />
        </g>
      </g>
      <line x1="101" y1="1.99" x2="101" y2="3.55" fill="none" stroke="#bfa613" strokeMiterlimit="10" />
      <line x1="2.76" y1="29.71" y2="29.71" fill="none" stroke="#bfa613" strokeMiterlimit="10" />
      <g opacity="0.5">
        <polyline points="48.74 35.1 21.79 35.1 17.38 29.71 4.86 29.71" fill="none" stroke="#4d4d4d"
          strokeMiterlimit="10" />
        <polygon points="50.52 34.63 48.74 34.61 48.74 35.6 51.5 35.6 50.52 34.63" fill="#4d4d4d" />
      </g>
      <g>
        <polygon points="77.74 33.11 76.52 34.33 75.3 35.54 75.3 33.11 75.3 30.68 76.52 31.9 77.74 33.11" fill="#4d4d4d"
          opacity="0.25" />
        <line x1="74.33" y1="30.62" x2="74.33" y2="35.54" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          opacity="0.1" />
      </g>
      <g>
        <polygon points="53.94 33.05 55.15 31.84 56.37 30.62 56.37 33.05 56.37 35.48 55.15 34.27 53.94 33.05"
          fill="#4d4d4d" opacity="0.25" />
        <line x1="57.34" y1="35.54" x2="57.34" y2="30.62" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          opacity="0.1" />
      </g>
    </g>
  </svg>
   );
}