import { FC, SyntheticEvent } from "react";
import { SVGComponent } from "../../../../interfaces/SVGComponent";
import { useLocation } from "react-router-dom";
import { styles } from "./style";
import { styleController } from "../../../../utils/styleController";

export const SignConfirm: FC<SVGComponent> = (params) => {
  const location = useLocation()

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) { 
    styleController({target: e, command: 'add', style: { fill: '#fff', stroke: '#fff'}})
  }

  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({target: e, command: 'remove'})
  }

  function onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({target: e, command: 'add', style: { background: '#fff', stroke: '#fff'}});
  }

  return (
    <label style={{position: 'relative'}} >
    <button className={styles.button()} type="submit"/>
    <text className={styles.label()}>{location.pathname === '/auth/register' ? 'sign up' : 'sign in'}</text>
    <svg id="auth_frame" {...params} viewBox="0 0 404.85 73.73" onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <path d="M1081.78-23.25" transform="translate(-723.47 86.17)" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        strokeWidth="0.75" />
      <path d="M729.33-53.89" transform="translate(-723.47 86.17)" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        strokeWidth="0.75" />
      <path d="M894.56-77.88" transform="translate(-723.47 86.17)" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        strokeWidth="0.75" />
      <g opacity="0.1">
        <polyline data-focus-stroke points="5.86 32.28 5.86 47.72 21.06 62.92 350.21 62.92" fill="none" stroke="#4d4d4d"
          strokeMiterlimit="10" strokeWidth="0.75" />
        <polygon data-focus-fill points="5.86 42.75 22.62 59.51 147.15 59.51 150.56 62.92 21.37 62.82 6.07 47.52 5.86 42.75"
          fill="#4d4d4d" />
        <polygon points="198.62 62.51 203.66 67.56 294.9 67.56 299.34 63.12 198.62 62.51" fill="#4d4d4d" />
      </g>
      <g opacity="0.25">
        <line data-focus-stroke x1="326.32" y1="8.29" x2="171.09" y2="8.29" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          strokeWidth="0.75" />
        <path data-focus-stroke d="M1034.24-77.88" transform="translate(-723.47 86.17)" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          strokeWidth="0.75" />
        <polygon data-focus-fill points="198.62 8.19 200.69 10.27 310.85 10.27 312.68 8.44 198.62 8.19" fill="#4d4d4d" />
        <polygon data-focus-fill points="203.68 8.19 201.69 6.21 178.15 6.21 176.37 7.98 203.68 8.19" fill="#4d4d4d" />
      </g>
      <g id="label" opacity="0.75">
        <text transform="translate(364.44 6)" font-size="12" fill="#c6b63f"
          font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">pass</text>
      </g>
      <g opacity="0.75">
        <polyline data-focus-stroke
          points="370.43 62.92 404.44 62.92 404.3 57.33 398.37 51.4 398.51 19.45 404.48 13.49 404.48 8.29 346.32 8.29"
          fill="none" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.75" />
        <polygon data-focus-stroke data-focus-fill points="404.48 13.49 404.48 17.81 398.53 23.76 398.53 19.45 404.48 13.49" fill="#4d4d4d" stroke="#4d4d4d"
          strokeMiterlimit="10" strokeWidth="0.75" />
      </g>
      <g opacity="0.5">
        <polyline data-focus-stroke points="166.36 8.29 5.86 8.29 5.86 25.44" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          strokeWidth="0.75" />
        <polygon data-focus-fill points="45.28 8.29 50.38 3.19 155.07 3.19 159.85 7.97 45.28 8.29" fill="#4d4d4d" />
        <polygon data-focus-fill points="5.86 10.4 52.15 10.4 54.22 8.33 5.86 8.33 5.86 10.4" fill="#4d4d4d" />
        <polygon data-focus-fill points="18.21 8.29 5.86 8.29 5.86 20.64 18.21 8.29" fill="#4d4d4d" />
      </g>
      <g opacity="0.1">
        <polyline data-focus-stroke points="396.84 58.52 349.02 10.7 317.03 10.7" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          strokeWidth="0.75" />
        <polyline data-focus-stroke points="396.84 10.7 349.02 58.52 317.03 58.52" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          strokeWidth="0.75" />
      </g>
      <polyline data-focus-stroke points="8.57 39.5 25.54 56.47 31.38 56.47" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        strokeWidth="0.75" opacity="0.5" />
      <polyline data-focus-stroke points="171.09 65.03 197.56 65.03 205.99 73.46" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        strokeWidth="0.75" />
      <rect x="5.86" y="1.11" width="1.52" height="4.14" fill="#c6b63f" />
      <rect x="8.45" y="1.11" width="1.52" height="4.14" fill="#c6b63f" />
      <rect x="283.85" y="58.52" width="30" height="2.18" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        strokeWidth="0.75" opacity="0.75" />
      <rect x="716.73" y="-70.6" width="16.66" height="2.18" transform="translate(71.1 741.72) rotate(-90)" fill="none"
        stroke="#4d4d4d" strokeMiterlimit="10" opacity="0.25" />
      <g opacity="0.25">
        <rect x="333.02" y="13.37" width="10.5" height="10.5" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          strokeWidth="0.75" />
        <line x1="333.02" y1="13.37" x2="343.52" y2="23.87" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          strokeWidth="0.75" />
      </g>
      <line data-focus-stroke x1="34.68" y1="56.47" x2="52.09" y2="56.47" fill="none" stroke="#fff" strokeMiterlimit="10"
        strokeWidth="0.75" opacity="0.75" />
      <polyline data-focus-stroke points="171.09 11.27 197.03 11.27 199.04 13.28 237.79 13.28" fill="none" stroke="#4d4d4d"
        strokeMiterlimit="10" opacity="0.1" />
      <line x1="354.62" y1="62.92" x2="359.74" y2="62.92" fill="none" stroke="#fff" strokeMiterlimit="10"
        strokeWidth="0.75" opacity="0.75" />
  </svg>
    </label>
   );
}