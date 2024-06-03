import { FC } from 'react';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { styles } from './style';
import { useSignBtn } from './hooks/useSignBtn';
import { IInput } from '../../../../interfaces/IInput';

export const Sign: FC<SVGComponent & IInput & { path: string }> = ({
  style,
  inputOptions,
  _id,
  path,
}) => {
  const { onClick, onMouseLeave, onMouseOver, signRef } = useSignBtn(_id, path);

  return (
    <div ref={signRef} style={{ position: 'relative', cursor: 'pointer' }}>
      <span className={styles.sign()}>{inputOptions?.label}</span>

      <svg
        id="auth_frame"
        style={{ ...style }}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        viewBox="0 0 159.08 43.02">
        <path
          d="M926-33.47"
          transform="translate(-851.14 76.12)"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.75"
        />
        <path
          d="M851.52-53.43"
          transform="translate(-851.14 76.12)"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <path
          d="M986.85-73.37"
          transform="translate(-851.14 76.12)"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <path
          d="M1008.05-47.2"
          transform="translate(-851.14 76.12)"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.75"
        />
        <path
          d="M1000.08-33.47"
          transform="translate(-851.14 76.12)"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <g id="placeholder" opacity="0.75"></g>
        <g opacity="0.5">
          <polyline
            points="132.65 2.75 0.38 2.8 0.38 20.16"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon points="10.47 2.96 12.9 5.39 71 5.39 73.96 2.43 10.47 2.96" fill="#4d4d4d" />
        </g>
        <g opacity="0.1">
          <line
            x1="81.68"
            y1="42.65"
            x2="140.98"
            y2="42.65"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            points="106.62 42.65 107.8 41.47 118.92 41.47 120.06 42.62 106.62 42.65"
            fill="#4d4d4d"
          />
          <polygon
            points="123.45 42.65 124.62 41.47 135.74 41.47 136.89 42.62 123.45 42.65"
            fill="#4d4d4d"
          />
        </g>
        <g opacity="0.25">
          <polyline
            points="148.94 42.65 156.9 42.65 156.9 31.43"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            points="155.15 31.43 156.9 31.43 156.9 36.19 155.15 33.78 155.15 31.43"
            fill="#4d4d4d"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
        </g>
        <g opacity="0.5">
          <polyline
            points="156.9 29.32 156.9 2.74 135.71 2.75"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            points="156.73 11.34 156.73 2.87 148.26 2.87 156.73 11.34"
            fill="#4d4d4d"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
          />
          <polygon
            points="155.15 29.07 156.9 29.07 156.9 24.31 155.15 26.72 155.15 29.07"
            fill="#4d4d4d"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            points="157.01 5.92 159.09 8.12 159.09 17.18 157.01 19.37 157.01 5.92"
            fill="#4d4d4d"
          />
        </g>
        <polyline
          points="146.53 3.91 155.06 12.43 155.06 24.31"
          fill="none"
          stroke="#c6b63f"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <line
          x1="70.38"
          y1="42.65"
          x2="42.22"
          y2="42.65"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.25"
        />
        <line
          x1="142.7"
          y1="42.65"
          x2="146.76"
          y2="42.65"
          fill="none"
          stroke="#c6b63f"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <g opacity="0.5">
          <polyline
            points="40.08 42.65 8.94 42.65 0.38 34.09 0.38 28.95"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            points="0.39 31.37 12.04 42.65 8.94 42.65 0.38 34.09 0.39 31.37"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
        </g>
        <polygon
          points="71 5.39 82.18 5.39 84.83 2.74 73.62 2.74 71 5.39"
          fill="#4d4d4d"
          opacity="0.1"
        />
        <line
          x1="0.38"
          y1="21.66"
          x2="0.38"
          y2="27.07"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.75"
        />
        <polygon
          points="0.14 37.33 0.14 42.95 5.77 42.95 0.14 37.33"
          fill="#4d4d4d"
          opacity="0.1"
        />
        <polyline
          points="2.07 5.7 10.57 5.7 12.84 7.96 22.01 7.96"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.25"
        />
        <g id="indicator">
          <rect data-focus-fill fill="none" x="0.01" width="132.64" height="1.2" />
          <rect data-focus-fill fill="none" x="135.71" width="21.52" height="1.2" />
        </g>
      </svg>
    </div>
  );
};
