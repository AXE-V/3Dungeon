import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { SVGComponent } from '../../../interfaces/SVGComponent';
import { styleController } from '../../../utils/styleController';
import { useNavigate } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';

export const BtnUpload: FC<SVGComponent> = ({ style, session }) => {
  const navigate = useNavigate();
  const lskey = 'edit_post';
  function onClick() {
    console.log('ls removed');
    localStorage.removeItem(`select-category-${lskey}`);
    localStorage.removeItem(`select-license-${lskey}`);
    localStorage.removeItem(`field-${lskey}`);
    localStorage.removeItem(`tags-${lskey}`);
    localStorage.removeItem(`smde_model-description`);
    localStorage.removeItem(`scene-path`);
    session ? navigate('/upload') : navigate('/auth/login');
  }

  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({ target: e, command: 'remove' });
  }

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({ target: e, command: 'add', style: { fill: '#111' } });
  }

  return (
    <svg
      style={{ ...style }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      viewBox="0 0 150 42">
      <polygon
        points="69.99 3.06 66.81 0 27.58 0 24.4 3.06 7.72 3.06 0 10.45 0 42 35.97 42 39.61 38.94 124.18 38.94 128.11 42 146.74 42 146.74 17.3 150 12.88 150 3.06 69.99 3.06"
        fill="#1c1c1c"
        data-focus-fill
      />
      <text
        transform="translate(42.37 27.74) scale(1.04 1)"
        font-size="19.24"
        fill="#c6b63f"
        font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK"
        style={{ userSelect: 'none' }}>
        Upload
      </text>
      <g>
        <polyline
          points="9.77 29.16 9.77 33.5 29.18 33.5 29.18 29.16"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
        />
        <g>
          <polygon
            points="24.4 14.67 19.48 9.92 14.55 14.67 14.55 17.04 18.26 13.47 18.26 28.42 20.7 28.42 20.7 13.47 24.4 17.04 24.4 14.67"
            fill="#4d4d4d"
          />
          <path d="M1021.83,425.36h0Z" transform="translate(-1001.13 -411.89)" fill="#4d4d4d" />
        </g>
      </g>
      <line
        x1="71.54"
        y1="1.53"
        x2="97.3"
        y2="1.53"
        fill="none"
        stroke="#4d4d4d"
        strokeMiterlimit="10"
        opacity="0.25"
      />
      <line
        x1="99.06"
        y1="1.53"
        x2="106.1"
        y2="1.53"
        fill="none"
        stroke="#4d4d4d"
        strokeMiterlimit="10"
        opacity="0.5"
      />
      <line
        x1="107.95"
        y1="1.53"
        x2="114.99"
        y2="1.53"
        fill="none"
        stroke="#4d4d4d"
        strokeMiterlimit="10"
        opacity="0.25"
      />
      <line
        x1="117.14"
        y1="1.53"
        x2="124.18"
        y2="1.53"
        fill="none"
        stroke="#4d4d4d"
        strokeMiterlimit="10"
        opacity="0.1"
      />
      <path d="M1024.49,415" transform="translate(-1001.13 -411.89)" fill="#bfa613" />
      <line
        x1="146.81"
        y1="1.53"
        x2="150"
        y2="1.53"
        fill="none"
        stroke="#c6b63f"
        strokeMiterlimit="10"
      />
    </svg>
  );
};
