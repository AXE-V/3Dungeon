import { FC } from 'react';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { styles } from './style';
import { useField_1 } from './Hooks/useField_1';
import { useDropFocus } from '../../../../hooks/useDropFocus';
export const Field_1: FC<SVGComponent> = ({ style, type, _id, register, inputOptions }) => {
  const { onChange, onClick, onMouseLeave, onMouseOver, valueInput, inpRef } = useField_1(_id);

  return (
    <div style={{ position: 'relative' }} onClick={onClick}>
      <input
        data-input
        placeholder={inputOptions?.placeholder ?? 'placeholder'}
        type={type ?? 'text'}
        className={styles.input()}
        value={valueInput}
        {...register}
        onChange={onChange}
      />

      <svg
        data-field
        ref={inpRef}
        style={{ ...style }}
        viewBox="0 0 402.41 72.53"
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}>
        <polyline
          points="363.32 64.39 302.43 64.39 294.65 72.18"
          fill="none"
          stroke="#c6b63f"
          strokeMiterlimit="10"
          opacity="0.75"
        />
        <path
          d="M805.57-40.16"
          transform="translate(-805.2 93.21)"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <path
          d="M821.34-78.1"
          transform="translate(-805.2 93.21)"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <path
          d="M1061.52-79"
          transform="translate(-805.2 93.21)"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
        />
        <g id="label" opacity="0.5">
          <text
            transform="translate(37.56 12.75)"
            font-size="12"
            fill="#fff"
            font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK"
            style={{ userSelect: 'none' }}>
            {inputOptions?.label ?? 'label'}
          </text>
        </g>
        <path
          d="M1087.4-85.17"
          transform="translate(-805.2 93.21)"
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <line
          x1="382.55"
          y1="0.38"
          x2="370.55"
          y2="0.38"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.75"
        />
        <line
          x1="86.96"
          y1="67.95"
          x2="139.2"
          y2="67.95"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.1"
        />
        <line
          x1="141.05"
          y1="67.95"
          x2="153.67"
          y2="67.95"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.75"
        />
        <line
          x1="155.26"
          y1="67.95"
          x2="158.65"
          y2="67.95"
          fill="none"
          stroke="#c6b63f"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.75"
        />
        <g opacity="0.5">
          <rect
            x="391.77"
            y="14.07"
            width="10.26"
            height="10.26"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <line
            x1="391.77"
            y1="14.07"
            x2="402.03"
            y2="24.33"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
        </g>
        <g opacity={0.25}>
          <polygon
            data-focus-fill
            points="257.04 9.86 199.86 9.86 194.61 15.12 180.79 15.12 192.09 3.82 244.16 3.82 246.96 6.62 262.49 6.6 257.04 9.86"
            fill="#222"
          />
          <polygon
            points="191.41 4.32 181.12 14.62 177.47 14.62 187.84 4.32 191.41 4.32"
            fill="none"
            stroke="#111"
            strokeMiterlimit="10"
            data-focus-stroke
          />
        </g>
        <line
          x1="349.29"
          y1="8.61"
          x2="316.46"
          y2="8.61"
          fill="#4d4d4d"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.5"
        />
        <polyline
          points="234.49 12.39 200.72 12.39 194.08 19.02"
          fill="none"
          stroke="#c6b63f"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.75"
        />
        <polygon
          points="313.63 6.55 318.18 3.83 318.77 3.83 314.26 6.55 313.63 6.55"
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.75"
        />
        <path
          d="M982-78.1"
          transform="translate(-805.2 93.21)"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <g opacity="0.5">
          <line
            data-focus-stroke
            x1="170.83"
            y1="15.12"
            x2="18.14"
            y2="15.12"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            data-focus-stroke
            data-focus-fill
            points="162.5 14.45 172.13 14.45 171.51 15 161.72 15 162.5 14.45"
            fill="#4d4d4d"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
          />
          <polygon
            data-focus-stroke
            data-focus-fill
            points="27.36 16.94 18.14 16.94 18.14 15.12 31.29 15.12 27.36 16.94"
            fill="#4d4d4d"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
        </g>
        <g opacity="0.5">
          <polyline
            points="16.14 15.12 5.08 15.12 0.38 19.82 0.38 53.05"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            points="12.38 16.94 15.79 16.94 15.79 15.12 8.45 15.12 12.38 16.94"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            points="1.33 39.24 0.38 38.17 0.38 52.88 1.33 52.88 1.33 39.24"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
        </g>
        <polyline
          points="376.07 51.55 376.07 44.71 391.93 28.84 402.03 28.84"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.25"
        />
        <g data-require opacity="0.75" className={styles.require()}>
          <polygon
            points="369.75 7.98 362.72 20.91 377.25 20.91 369.75 7.98"
            fill="none"
            stroke="#c6b63f"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <line
            x1="369.99"
            y1="12.14"
            x2="369.99"
            y2="16.61"
            fill="none"
            stroke="#c6b63f"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <line
            x1="369.99"
            y1="18.49"
            x2="369.99"
            y2="19.2"
            fill="none"
            stroke="#c6b63f"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
        </g>
        <line
          x1="19.61"
          y1="18.73"
          x2="17.93"
          y2="18.73"
          fill="none"
          stroke="#c6b63f"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <line
          x1="391.77"
          y1="7.42"
          x2="391.77"
          y2="2.96"
          fill="#4d4d4d"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.25"
        />
        <line
          x1="393.63"
          y1="7.42"
          x2="393.63"
          y2="2.96"
          fill="#4d4d4d"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.25"
        />
        <line
          x1="395.5"
          y1="0.38"
          x2="396.96"
          y2="0.38"
          fill="none"
          stroke="#c6b63f"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <polyline
          points="112.23 64.18 294.7 64.18 300.21 58.68 363.32 58.68"
          fill="none"
          stroke="#111"
          strokeMiterlimit="10"
        />
        <path
          d="M916.72-29"
          transform="translate(-805.2 93.21)"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />
        <polygon
          points="296.97 61.92 207.43 61.92 205.12 64.23 294.7 64.23 296.97 61.92"
          fill="#111"
        />
        <path
          d="M904.81-33.78"
          transform="translate(-805.2 93.21)"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
        />

        <g opacity="0.5">
          <polyline
            data-focus-stroke
            points="0.38 55.88 75.18 55.88 83.49 64.18 109.7 64.18"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polyline
            data-focus-stroke
            points="81.01 61.7 107.22 61.7 109.7 64.18 83.49 64.18 81.01 61.7"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            data-focus-stroke
            data-focus-fill
            points="75.18 55.88 0.38 55.88 0.38 56.95 11.35 67.95 83.49 67.95 83.49 64.18 75.18 55.88"
            fill="#4d4d4d"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            data-focus-stroke
            points="11.31 67.95 6.75 67.95 0.38 61.58 0.38 56.95 11.31 67.95"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <path
            data-focus-stroke
            d="M886.2-31.51"
            transform="translate(-805.2 93.21)"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
        </g>
        <polygon
          points="121.18 61.7 109.7 61.7 112.23 64.18 123.52 64.18 121.18 61.7"
          fill="none"
          stroke="#111"
          strokeMiterlimit="10"
        />
        <polyline
          data-focus-stroke
          points="208.17 57.94 203.98 62.13 183.82 62.13"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          opacity="0.25"
        />
        <g opacity="0.5">
          <polygon
            data-focus-stroke
            data-focus-fill
            points="316.82 6.55 343.9 6.55 346.62 3.83 321.24 3.83 316.82 6.55"
            fill="#4d4d4d"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polyline
            data-focus-stroke
            points="371.81 58.79 371.81 43.44 384.38 30.88 384.38 3.82 321.24 3.82 316.82 6.55"
            fill="none"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            data-focus-stroke
            data-focus-fill
            points="384.38 30.88 388.04 27.21 388.04 3.82 384.38 3.82 384.38 30.88"
            fill="#4d4d4d"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            data-focus-stroke
            data-focus-fill
            points="371.81 43.44 371.81 41.08 384.21 28.68 384.21 30.88 371.81 43.44"
            fill="#4d4d4d"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            data-focus-stroke
            data-focus-fill
            points="373.58 55.88 371.81 53.08 371.81 58.79 373.59 58.79 373.58 55.88"
            fill="#4d4d4d"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <polygon
            data-focus-stroke
            data-focus-fill
            points="384.17 10.56 377.45 3.83 384.17 3.83 384.17 10.56"
            fill="#4d4d4d"
            stroke="#4d4d4d"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
        </g>
        <rect
          x="371.81"
          y="64.39"
          width="1.77"
          height="0.22"
          fill="#c6b63f"
          stroke="#c6b63f"
          strokeMiterlimit="10"
        />
        <rect
          x="395.88"
          y="3.38"
          width="6.16"
          height="3.82"
          fill="none"
          stroke="#4d4d4d"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          opacity="0.5"
        />
        <polygon
          points="259.79 9.86 265.24 6.6 267.38 6.6 262.19 9.86 259.79 9.86"
          fill="#fff"
          opacity="0.75"
        />
      </svg>
    </div>
  );
};
