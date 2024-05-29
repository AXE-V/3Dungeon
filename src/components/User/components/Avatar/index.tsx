import { FC, SyntheticEvent, useRef } from 'react';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { styleController } from '../../../../utils/styleController';
import { Styles } from './style';

export const AvatarGroup: FC<SVGComponent> = ({ style }) => {
  const inpRef = useRef<HTMLInputElement>(null);
  // const {register} = useForm()

  // события рамки
  function onMouseLeaveFrame<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({ target: (e.currentTarget as HTMLElement).childNodes[14], command: 'remove' });
  }

  function onMouseOverFrame<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({
      target: (e.currentTarget as HTMLElement).childNodes[14],
      command: 'add',
      style: { opacity: 1 },
    });
  }

  // события кнопки
  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({ target: e, command: 'remove' });
  }

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({ target: e, command: 'add', style: { fill: '#1e1e1e' } });
  }

  function onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({ target: e, command: 'add', style: { fill: '#c6b63f' } });
    inpRef.current?.click();
  }

  return (
    <div style={{ position: 'relative' }}>
      <Styles.Span>load image</Styles.Span>
      <input type="file" ref={inpRef} style={{ display: 'none' }} />

      <svg
        id="Слой_1"
        data-name="Слой 1"
        xmlns="http://www.w3.org/2000/svg"
        onMouseLeave={onMouseLeaveFrame}
        onMouseOver={onMouseOverFrame}
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        style={style}
        viewBox="0 0 471.66 495.56">
        <defs>
          <clipPath id="clip-path" transform="translate(-724.36 -287.56)">
            <polygon
              points="1086.9 299.99 1074.97 288.06 769.52 288.06 769.8 389.01 737.95 434.36 738.31 687.99 1010.13 687.99 1046.63 659.4 1138.31 659.4 1138.31 300 1086.9 299.99"
              fill="none"
            />
          </clipPath>
        </defs>
        <path
          d="M1195.3,288.06h-46.11L1137.26,300H1086.9L1075,288.06H769.52L769.8,389,738,434.36V782.62h417.66l.12-47.93,39.79-39.22Z"
          transform="translate(-724.36 -287.56)"
          fill="#111"
        />
        <path
          d="M880.33,793.39"
          transform="translate(-724.36 -287.56)"
          fill="#4d4d4d"
          stroke="#4d4d4d"
          stroke-miterlimit="10"
          stroke-width="0.75"
        />
        <Styles.Login x={440} y={25}>
          desintigrator
        </Styles.Login>
        <g>
          <circle cx="215.28" cy="152.53" r="77.16" fill="#4d4d4d" />
          <polygon
            points="269.03 259.6 161.52 259.6 146.5 244.58 138.11 248.06 138.11 302.09 161.52 325.5 269.03 325.5 292.44 302.09 292.44 248.06 284.05 244.58 269.03 259.6"
            fill="#4d4d4d"
          />
        </g>

        <svg onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={onClick}>
          <path
            d="M1054.3,671.34,1016.8,702H762l-12.34,12.33v53.16h378.16L1138,757.31V671.58Zm-289,75.11H764l-8.86-8.85V715.23l8.25-8.25h1.93Zm14.47,11.37-2.83,2.84h-7.34V729.44l8.25-8.24h1.92ZM809,717.16H777.82l-8.25-8.25V707H806.2l2.83,2.84Zm216-16.66,31.64-26.1h4.44l-31.64,26.1Zm10,0,31.64-26.1h4.44l-31.64,26.1Zm14.44,0h-4.44l31.64-26.1h4.44Zm82.79,55.27-5.85,5.85H1122V742.91l5.74-5.74V699.05l-5.74-5.74v-17h10.29Z"
            transform="translate(-724.36 -287.56)"
            fill="#181818"
            data-focus-fill
          />
          <polygon points="32 414.05 24.98 421.06 25.08 414.05 32 414.05" fill="#c6b63f" />
        </svg>
        <g>
          <g id="remove_x" opacity="0.75">
            <g>
              <g id="sym_x" data-name="sym x">
                <polygon
                  points="6.96 89.22 6.96 88.02 3.41 84.47 2.21 84.47 4.78 87.04 4.78 87.63 9 91.86 9 91.26 6.96 89.22"
                  fill="#fff"
                />
                <polygon
                  points="26.14 104.6 26.13 105.43 27.25 106.56 28.19 106.55 26.14 104.6"
                  fill="#fff"
                />
                <polygon
                  points="22.61 104.91 21.39 104.91 22.52 106.03 22.88 106.03 23.85 107 23.85 107.36 24.14 107.65 25.37 107.65 22.61 104.91"
                  fill="#fff"
                />
                <polygon
                  points="17.56 100.77 18.46 101.64 18.46 100.75 15.19 97.5 15.02 97.5 17.56 100.04 17.56 100.77"
                  fill="#fff"
                />
                <path
                  d="M752.54,394.09h-.92l-1.1-1.1v-.81l-6-6v1.27l-.42-.41v-1.29L742.34,384h-.81l-2.44-2.44v-.32h-.31l-2.46-2.47v-1.07l-.69-.67-5.57-5.57-.54-.53h-1.34l-.27.26h-1.38l-.26-.26-.26-.27h-1.38l-.27.27,1.11,1.11,3.44,3.44v-.81l-2.61-2.6h1.46l3.52,3.52v1.2l2,2v1l2.54,2.55h1l.46.46v.53l.26-.27,1.39,1.52v.46h.59l3.27,3.26V390L744,391.1h.7l.92.92v.27l.19.19H747l2.73,2.73h2.06l.26.27h1.38l.27-.27Zm-18.7-17.37-4.26-4.27v-.92l5.17,5.19Zm5.17,7.12a.77.77,0,1,1,.77-.77A.76.76,0,0,1,739,383.84Zm4.58,6.37-.37-.4v-1.2l.4.4Zm5.58,1.84-4.26-4.27v-.92l5.17,5.2Zm2.16,3,.27-.26H753l.27.26Z"
                  transform="translate(-724.36 -287.56)"
                  fill="#fff"
                />
              </g>
              <g id="sym_x-2" data-name="sym x">
                <polygon
                  points="20.31 91.26 20.31 91.86 24.53 87.63 24.53 87.04 27.1 84.47 25.9 84.47 22.35 88.02 22.35 89.22 20.31 91.26"
                  fill="#fff"
                />
                <polygon
                  points="1.12 106.55 2.06 106.56 3.18 105.43 3.17 104.6 1.12 106.55"
                  fill="#fff"
                />
                <polygon
                  points="3.94 107.65 5.17 107.65 5.46 107.36 5.46 107 6.43 106.03 6.79 106.03 7.92 104.9 6.71 104.9 3.94 107.65"
                  fill="#fff"
                />
                <polygon
                  points="11.75 100.04 14.29 97.5 14.13 97.5 10.85 100.75 10.85 101.64 11.75 100.77 11.75 100.04"
                  fill="#fff"
                />
                <path
                  d="M753.4,370.67H752l-.26.27-.27.26h-1.38l-.26-.26H748.5l-.54.53L742.4,377l-.69.67v1.07l-2.46,2.47h-.31v.32L736.5,384h-.81l-1.79,1.76v1.29l-.41.41V386.2l-6,6V393l-1.1,1.1h-.92l-1.13,1.12.27.27H726l.26-.27h2.06l2.73-2.73h1.2l.19-.19V392l.92-.92h.7l1.15-1.15v-1.62l3.27-3.26h.59v-.46l1.39-1.52.26.27v-.53l.46-.46h1l2.54-2.55v-1l2-2v-1.2l3.53-3.52h1.46l-2.61,2.6v.81l3.44-3.44,1.11-1.11Zm-28.62,24.41.27-.26h1.38l.27.26Zm8.34-7.3-4.27,4.27H728l5.17-5.2Zm1.69,2-.38.4,0-1.2.4-.4Zm4.2-6a.77.77,0,1,1,.77-.77A.76.76,0,0,1,739,383.84Zm9.44-11.39-4.26,4.27h-.91l5.17-5.19Z"
                  transform="translate(-724.36 -287.56)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
          <g id="remove_x-2" data-name="remove_x" opacity="0.75">
            <g>
              <g id="sym_x-3" data-name="sym x">
                <polygon
                  points="6.96 50.53 6.96 49.34 3.41 45.78 2.21 45.78 4.78 48.35 4.78 48.94 9 53.17 9 52.57 6.96 50.53"
                  fill="#fff"
                />
                <polygon
                  points="26.14 65.91 26.13 66.74 27.25 67.87 28.19 67.86 26.14 65.91"
                  fill="#fff"
                />
                <polygon
                  points="22.61 66.22 21.39 66.22 22.52 67.34 22.88 67.34 23.85 68.31 23.85 68.67 24.14 68.96 25.37 68.97 22.61 66.22"
                  fill="#fff"
                />
                <polygon
                  points="17.56 62.08 18.46 62.95 18.46 62.06 15.19 58.81 15.02 58.81 17.56 61.35 17.56 62.08"
                  fill="#fff"
                />
                <path
                  d="M752.54,355.4h-.92l-1.1-1.1v-.81l-6-6v1.27l-.42-.41v-1.29l-1.78-1.76h-.81l-2.44-2.44v-.32h-.31l-2.46-2.47V339l-.69-.67-5.57-5.56-.54-.54h-1.34l-.27.26h-1.38l-.26-.26L726,332h-1.38l-.27.27,1.11,1.11,3.44,3.44V336l-2.61-2.61h1.46l3.52,3.52v1.2l2,2.05v1l2.54,2.54h1l.46.46v.53l.26-.26,1.39,1.51v.46h.59l3.27,3.27v1.61l1.15,1.16h.7l.92.92v.26l.19.2H747l2.73,2.72h2.06l.26.27h1.38l.27-.27ZM733.84,338l-4.26-4.26v-.92l5.17,5.18Zm5.17,7.12a.77.77,0,1,1,.77-.76A.76.76,0,0,1,739,345.15Zm4.58,6.37-.37-.4v-1.2l.4.4Zm5.58,1.84-4.26-4.27v-.92l5.17,5.2Zm2.16,3,.27-.27H753l.27.27Z"
                  transform="translate(-724.36 -287.56)"
                  fill="#fff"
                />
              </g>
              <g id="sym_x-4" data-name="sym x">
                <polygon
                  points="20.31 52.57 20.31 53.17 24.53 48.94 24.53 48.35 27.1 45.78 25.9 45.78 22.35 49.34 22.35 50.53 20.31 52.57"
                  fill="#fff"
                />
                <polygon
                  points="1.12 67.86 2.06 67.87 3.18 66.74 3.17 65.91 1.12 67.86"
                  fill="#fff"
                />
                <polygon
                  points="3.94 68.97 5.17 68.96 5.46 68.67 5.46 68.31 6.43 67.34 6.79 67.34 7.92 66.22 6.71 66.22 3.94 68.97"
                  fill="#fff"
                />
                <polygon
                  points="11.75 61.35 14.29 58.81 14.13 58.81 10.85 62.06 10.85 62.95 11.75 62.08 11.75 61.35"
                  fill="#fff"
                />
                <path
                  d="M753.4,332H752l-.26.27-.27.26h-1.38l-.26-.26H748.5l-.54.54-5.56,5.56-.69.67v1.07l-2.46,2.47h-.31v.32l-2.44,2.44h-.81l-1.79,1.76v1.29l-.41.41v-1.27l-6,6v.81l-1.1,1.1h-.92l-1.13,1.12.27.27H726l.26-.27h2.06l2.73-2.72h1.2l.19-.2v-.26l.92-.92h.7l1.15-1.16v-1.61l3.27-3.27h.59v-.46l1.39-1.51.26.26v-.53l.46-.46h1l2.54-2.54v-1l2-2.05v-1.2l3.53-3.52h1.46L749.12,336v.8l3.44-3.44,1.11-1.11ZM724.78,356.4l.27-.27h1.38l.27.27Zm8.34-7.31-4.27,4.27H728l5.17-5.2Zm1.69,2-.38.4,0-1.2.4-.4Zm4.2-6a.77.77,0,1,1,.77-.76A.76.76,0,0,1,739,345.15Zm9.44-11.38L744.19,338h-.91l5.17-5.18Z"
                  transform="translate(-724.36 -287.56)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
          <g id="remove_x-3" data-name="remove_x" opacity="0.75">
            <g>
              <g id="sym_x-5" data-name="sym x">
                <polygon
                  points="6.96 11.84 6.96 10.65 3.41 7.09 2.21 7.09 4.78 9.67 4.78 10.26 9 14.48 9 13.88 6.96 11.84"
                  fill="#fff"
                />
                <polygon
                  points="26.14 27.23 26.13 28.05 27.25 29.18 28.19 29.17 26.14 27.23"
                  fill="#fff"
                />
                <polygon
                  points="22.61 27.53 21.39 27.53 22.52 28.65 22.88 28.65 23.85 29.62 23.85 29.98 24.14 30.27 25.37 30.28 22.61 27.53"
                  fill="#fff"
                />
                <polygon
                  points="17.56 23.39 18.46 24.26 18.46 23.37 15.19 20.12 15.02 20.12 17.56 22.66 17.56 23.39"
                  fill="#fff"
                />
                <path
                  d="M752.54,316.71h-.92l-1.1-1.1v-.81l-6-6v1.27l-.42-.41v-1.29l-1.78-1.76h-.81l-2.44-2.44v-.32h-.31l-2.46-2.47v-1.07l-.69-.67-5.57-5.56-.54-.54h-1.34l-.27.27h-1.38l-.26-.27-.26-.27h-1.38l-.27.27,1.11,1.11,3.44,3.44v-.8l-2.61-2.61h1.46l3.52,3.52v1.21l2,2v1l2.54,2.54h1l.46.46V306l.26-.26,1.39,1.51v.46h.59l3.27,3.27v1.61l1.15,1.16h.7l.92.92v.27l.19.19H747l2.73,2.73h2.06l.26.26h1.38l.27-.26Zm-18.7-17.37-4.26-4.26v-.92l5.17,5.18Zm5.17,7.13a.77.77,0,1,1,.77-.77A.77.77,0,0,1,739,306.47Zm4.58,6.36-.37-.39v-1.21l.4.4Zm5.58,1.84-4.26-4.26v-.92l5.17,5.19Zm2.16,3,.27-.27H753l.27.27Z"
                  transform="translate(-724.36 -287.56)"
                  fill="#fff"
                />
              </g>
              <g id="sym_x-6" data-name="sym x">
                <polygon
                  points="20.31 13.88 20.31 14.48 24.53 10.26 24.53 9.67 27.1 7.09 25.9 7.09 22.35 10.65 22.35 11.84 20.31 13.88"
                  fill="#fff"
                />
                <polygon
                  points="1.12 29.17 2.06 29.18 3.18 28.05 3.17 27.23 1.12 29.17"
                  fill="#fff"
                />
                <polygon
                  points="3.94 30.28 5.17 30.27 5.46 29.98 5.46 29.62 6.43 28.65 6.79 28.65 7.92 27.53 6.71 27.53 3.94 30.28"
                  fill="#fff"
                />
                <polygon
                  points="11.75 22.66 14.29 20.12 14.13 20.12 10.85 23.37 10.85 24.26 11.75 23.39 11.75 22.66"
                  fill="#fff"
                />
                <path
                  d="M753.4,293.29H752l-.26.27-.27.27h-1.38l-.26-.27H748.5l-.54.54-5.56,5.56-.69.67v1.07l-2.46,2.47h-.31v.32l-2.44,2.44h-.81l-1.79,1.76v1.29l-.41.41v-1.27l-6,6v.81l-1.1,1.1h-.92l-1.13,1.13.27.26H726l.26-.26h2.06l2.73-2.73h1.2l.19-.19v-.27l.92-.92h.7l1.15-1.16V311l3.27-3.27h.59v-.46l1.39-1.51.26.26v-.53l.46-.46h1l2.54-2.54v-1l2-2v-1.21l3.53-3.52h1.46l-2.61,2.61v.8l3.44-3.44,1.11-1.11Zm-28.62,24.42.27-.27h1.38l.27.27Zm8.34-7.3-4.27,4.26H728l5.17-5.19Zm1.69,2-.38.39,0-1.2.4-.4Zm4.2-6a.77.77,0,1,1,.77-.77A.77.77,0,0,1,739,306.47Zm9.44-11.39-4.26,4.26h-.91l5.17-5.18Z"
                  transform="translate(-724.36 -287.56)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </g>
        <polyline
          points="454.34 28.93 454.34 16.08 441.48 16.08"
          fill="none"
          stroke="#c6b63f"
          stroke-miterlimit="10"
          stroke-width="0.75"
        />
        <line
          x1="27.49"
          y1="487.61"
          x2="74.17"
          y2="487.61"
          fill="none"
          stroke="#4d4d4d"
          stroke-miterlimit="10"
          stroke-width="0.75"
          opacity="0.5"
        />
        <line
          x1="291.61"
          y1="487.61"
          x2="338.29"
          y2="487.61"
          fill="none"
          stroke="#4d4d4d"
          stroke-miterlimit="10"
          stroke-width="0.75"
          opacity="0.5"
        />
        <g opacity="0.75">
          <g>
            <path
              d="M1102.36,287.9v8h-9.6v-8h1.6v6.4h6.4v-6.4Z"
              transform="translate(-724.36 -287.56)"
              fill="#c6b63f"
            />
            <path
              d="M1113.56,290.3l-.93,1.6.93,1.6v2.4H1104v-8h9.6Zm-8,.8h5.69l.71-1.22v-.38h-6.4Zm0,1.6v1.6h6.4v-.37l-.71-1.23Z"
              transform="translate(-724.36 -287.56)"
              fill="#c6b63f"
            />
            <path
              d="M1115.16,291.1h4.8v1.6h-4.8Z"
              transform="translate(-724.36 -287.56)"
              fill="#c6b63f"
            />
            <path
              d="M1121.56,293.5l1.38-2.4h8.22v4.8h-9.6Zm3-4-.8.8h-.8v-2.4h1.6Zm5,3.2h-5.68l-.72,1.23v.37h6.4Z"
              transform="translate(-724.36 -287.56)"
              fill="#c6b63f"
            />
          </g>
        </g>
        <polyline
          points="400.55 377.55 326.76 377.55 298.23 399.89"
          fill="none"
          stroke="#c6b63f"
          stroke-miterlimit="10"
          stroke-width="0.75"
        />
        <polyline
          points="349.39 369.2 400.55 369.2 410.3 359.45 410.3 348.43"
          fill="none"
          stroke="#c6b63f"
          stroke-miterlimit="10"
          stroke-width="0.75"
        />
        <path
          d="M1028.69,667.28"
          transform="translate(-724.36 -287.56)"
          fill="none"
          stroke="#c6b63f"
          stroke-miterlimit="10"
          stroke-width="0.75"
        />
        <path
          d="M1195.3,288.06h-46.11L1137.26,300H1086.9L1075,288.06H769.52L769.8,389,738,434.36V782.62h417.66l.12-47.93,39.79-39.22Z"
          transform="translate(-725.56 -287.69)"
          fill="none"
          stroke="#4a4a4a"
          data-focus-stroke
          stroke-miterlimit="10"
          opacity={0}
        />
      </svg>
    </div>
  );
};
