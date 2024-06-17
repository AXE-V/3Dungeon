import { FC, SyntheticEvent } from 'react';
import { SVGComponent } from '../../../interfaces/SVGComponent';
import { styleController } from '../../../utils/styleController';

export const BtnNotification: FC<SVGComponent> = ({ style }) => {
  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({ target: e, command: 'remove' });
  }

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({ target: e, command: 'add', style: { fill: '#111' } });
  }

  return (
    <svg style={style} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} viewBox="0 0 42 42.5">
      <polygon
        points="38.89 0 2.99 0 2.99 40.06 42 40.06 42 3.19 38.89 0"
        fill="#1c1c1c"
        data-focus-fill
      />
      <polygon
        points="13.28 25.2 9.43 21.24 9.43 11.53 32.92 11.53 32.92 16.74 35.56 19.45 35.56 28.54 31.34 28.54 28.33 25.44 13.28 25.2"
        fill="#4d4d4d"
      />
      <polyline
        points="2.99 16.31 2.99 16.31 0 13.23 0 0.44 2.99 0.44"
        fill="#c6b63f"
        data-indicator
      />
      <line
        x1="2.99"
        y1="42"
        x2="27.23"
        y2="42"
        fill="none"
        stroke="#4d4d4d"
        strokeMiterlimit="10"
        opacity="0.25"
      />
      <line
        x1="28.45"
        y1="41.99"
        x2="33.61"
        y2="41.99"
        fill="none"
        stroke="#4d4d4d"
        strokeMiterlimit="10"
        opacity="0.5"
      />
      <line
        x1="34.68"
        y1="41.99"
        x2="36.64"
        y2="41.99"
        fill="none"
        stroke="#4d4d4d"
        strokeMiterlimit="10"
        opacity="0.75"
      />
      <line x1="42" y1="42" x2="37.66" y2="42" fill="none" stroke="#c6b63f" strokeMiterlimit="10" />
    </svg>
  );
};
