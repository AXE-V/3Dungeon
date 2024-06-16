import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { Tables } from '../../../../interfaces/DatabaseGeneratedTypes';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { getUserDataByID } from '../../../../redux/slices/data/user';
import { PostModel, loadPostFiles } from '../../../../redux/slices/data/post';
import { ModelViewer } from '../../../PostModel/components/ModelViewer';
import { cssPathes } from '../../../../style';
import { styleController } from '../../../../utils/styleController';
import { deleteCartItem } from '../../../../redux/slices/data/cart';

export const Card_2: FC<SVGComponent & PostModel> = ({ style, order, post }) => {
  const [userData, setUserData] = useState<Tables<'users'> | null>(null);
  const dispatch = useCustomDispatch();
  useEffect(() => {
    try {
      const getData = async () => {
        const uid = await dispatch(getUserDataByID(post.user_id)).unwrap();
        setUserData(uid);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onMouseOverCross = (e: SyntheticEvent<EventTarget>) => {
    styleController({
      target: e,
      command: 'add',
      tags: [{ value: 'fill', style: { fill: '#c6b63f' } }],
    });
  };

  const onMouseLeaveCross = (e: SyntheticEvent<EventTarget>) => {
    styleController({
      target: e,
      command: 'add',
      tags: [{ value: 'fill', style: { fill: '#1c1c1c' } }],
    });
  };

  const onClickCross = () => {
    dispatch(deleteCartItem(post));
  };

  return (
    <div style={{ width: '100%', height: '100%', padding: '0 1vw', position: 'relative' }}>
      <ModelViewer
        orbitControlsProps={{ autoRotate: true }}
        post={post}
        style={{
          position: 'absolute',
          zIndex: -1,
          width: '12vw',
          height: '6vw',
          left: '50%',
          top: '50%',
          transform: 'translate(-66%, -64%)',
          clipPath: cssPathes.bevelPolygon(['0vw', '1vw', '0vw', '0vw']),
        }}
      />
      <svg
        id="Слой_1"
        data-name="Слой 1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 366.7 156.24"
        style={style}>
        <defs>
          <clipPath id="clip-path-v2" transform="translate(-865.65 -43.27)">
            <polygon
              points="901.68 48.12 1108.56 48.12 1123.86 63.68 1124.05 123.89 1117.8 131.67 1117.57 160.91 992.85 160.91 986.74 156.75 901.69 156.75 901.68 48.12"
              fill="none"
            />
          </clipPath>
          <clipPath id="clip-path-2-v2" transform="translate(-865.65 -43.27)">
            <polygon
              points="872.68 54.15 872.98 167.42 895.26 167.42 895.26 54.15 872.68 54.15"
              fill="none"
            />
          </clipPath>
          <clipPath id="clip-path-3-v2" transform="translate(-865.65 -43.27)">
            <rect x="903.22" y="160.23" width="108.22" height="15.94" fill="none" />
          </clipPath>
        </defs>
        <g id="card_item">
          <path
            d="M940.14,38.1"
            transform="translate(-865.65 -43.27)"
            fill="none"
            stroke="#4d4d4d"
            stroke-miterlimit="10"
          />
          <g opacity="0.5">
            <g>
              <rect
                x="347.26"
                y="134.19"
                width="12.98"
                height="12.98"
                fill="none"
                stroke="#c6b63f"
                stroke-miterlimit="10"
                stroke-width="0.75"
              />
              <line
                x1="347.26"
                y1="134.19"
                x2="360.25"
                y2="147.17"
                fill="none"
                stroke="#c6b63f"
                stroke-miterlimit="10"
                stroke-width="0.75"
              />
            </g>
          </g>

          <g
            onMouseOver={onMouseOverCross}
            onMouseLeave={onMouseLeaveCross}
            onClick={onClickCross}
            style={{ position: 'relative' }}>
            <rect width={81} height={70} x={274} y={30} fill="transparent" opacity={0.2}></rect>
            <polygon
              points="273.25 90.88 281.71 99.34 355.31 99.34 355.31 29.42 273.25 29.42 273.25 90.88"
              fill="none"
              stroke="#4d4d4d"
              stroke-miterlimit="10"
              stroke-width="0.75"
              opacity="0.25"
            />
            <g id="sym_x" data-name="sym x">
              <polygon
                points="299.37 49.5 299.37 46.9 291.65 39.18 289.04 39.18 294.63 44.77 294.63 46.05 303.8 55.23 303.8 53.93 299.37 49.5"
                fill="#161616"
                data-fill
              />
              <polygon
                points="341.05 82.94 341.03 84.74 343.46 87.19 345.51 87.17 341.05 82.94"
                fill="#161616"
                data-fill
              />
              <polygon
                points="333.37 83.61 330.74 83.61 333.19 86.03 333.95 86.03 336.07 88.15 336.07 88.93 336.71 89.56 339.37 89.58 333.37 83.61"
                fill="#161616"
                data-fill
              />
              <polygon
                points="322.41 74.6 324.37 76.5 324.37 74.56 317.24 67.5 316.89 67.5 322.41 73.02 322.41 74.6"
                fill="#161616"
                data-fill
              />
              <path
                d="M1211.13,130.4h-2l-2.39-2.39v-1.77l-13-13V116l-.9-.89v-2.81l-3.88-3.82h-1.76l-5.3-5.31v-.69h-.68l-5.34-5.37V94.79l-1.5-1.45-12.1-12.1-1.17-1.17h-2.92l-.58.58h-3l-.57-.58-.58-.58h-3l-.58.58,2.42,2.42,7.47,7.48V88.22l-5.68-5.66h3.18l7.66,7.65v2.61l4.43,4.44v2.13l5.52,5.53H1177l1,1v1.15l.57-.57,3,3.29v1h1.29l7.1,7.1v3.51l2.5,2.51H1194l2,2v.58l.41.42h2.6l5.94,5.93h4.48l.57.58h3l.58-.58Zm-40.64-37.76-9.27-9.27v-2l11.24,11.27Zm11.25,15.49a1.67,1.67,0,1,1,1.67-1.67A1.67,1.67,0,0,1,1181.74,108.13Zm10,13.83-.81-.86v-2.61l.86.86Zm12.13,4-9.27-9.27v-2L1205.79,126Zm4.69,6.6.58-.58h3l.58.58Z"
                transform="translate(-865.65 -43.27)"
                fill="#1c1c1c"
                data-fill
              />
            </g>
            <g id="sym_x-2" data-name="sym x">
              <polygon
                points="328.37 53.93 328.37 55.23 337.54 46.05 337.54 44.77 343.13 39.18 340.52 39.18 332.8 46.9 332.8 49.5 328.37 53.93"
                fill="#161616"
                data-fill
              />
              <polygon
                points="286.66 87.17 288.71 87.19 291.14 84.74 291.12 82.94 286.66 87.17"
                fill="#161616"
                data-fill
              />
              <polygon
                points="292.8 89.58 295.46 89.56 296.1 88.93 296.1 88.15 298.22 86.03 298.99 86.03 301.45 83.59 298.82 83.59 292.8 89.58"
                fill="#161616"
                data-fill
              />
              <polygon
                points="309.77 73.02 315.29 67.5 314.94 67.5 307.81 74.56 307.81 76.5 309.77 74.6 309.77 73.02"
                fill="#161616"
                data-fill
              />
              <path
                d="M1213,79.49h-3l-.58.58-.57.58h-3l-.58-.58h-2.92l-1.17,1.17-12.1,12.1-1.5,1.45v2.33l-5.34,5.37h-.67v.69l-5.31,5.31h-1.76l-3.88,3.82v2.81l-.9.89v-2.77l-13,13V128l-2.39,2.39h-2l-2.46,2.44.58.58h3l.57-.58h4.48l5.94-5.93h2.6l.41-.42v-.58l2-2H1171l2.5-2.51v-3.51l7.1-7.1h1.29v-1l3-3.29.57.57v-1.15l1-1h2.13l5.52-5.53V97.26l4.43-4.44V90.21l7.66-7.65h3.18l-5.68,5.66V90l7.47-7.48,2.42-2.42Zm-62.21,53.07.58-.58h3l.58.58Zm18.12-15.87-9.27,9.27-2,0,11.24-11.29Zm3.67,4.41-.81.86,0-2.61.86-.86Zm9.15-13a1.67,1.67,0,1,1,1.67-1.67A1.67,1.67,0,0,1,1181.74,108.13Zm20.51-24.76L1193,92.64h-2l11.24-11.27Z"
                transform="translate(-865.65 -43.27)"
                fill="#1c1c1c"
                data-fill
              />
            </g>
          </g>
          <g id="remove">
            <text
              transform="translate(289.49 24.84)"
              font-size="12"
              fill="#c6b63f"
              font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">
              Remove
            </text>
          </g>
          <g opacity="0.25">
            <polyline
              points="366.2 0.01 366.2 152.34 0.5 152.34 0.5 0.01"
              fill="none"
              stroke="#4d4d4d"
              stroke-miterlimit="10"
            />
            <polygon
              points="0.5 142.67 143.43 142.67 158.02 152.34 0.5 152.34 0.5 142.67"
              fill="#4d4d4d"
              stroke="#4d4d4d"
              stroke-miterlimit="10"
            />
            <polygon
              points="263.03 10.18 366.2 10.18 366.2 0.5 253.58 0.5 263.03 10.18"
              fill="#4d4d4d"
              stroke="#4d4d4d"
              stroke-miterlimit="10"
            />
          </g>
          <polyline
            points="348.99 103.34 359.31 103.34 359.31 93.02"
            fill="none"
            stroke="#4d4d4d"
            stroke-miterlimit="10"
            opacity="0.75"
          />
          <polyline
            points="359.31 35.75 359.31 25.42 348.99 25.42"
            fill="none"
            stroke="#4d4d4d"
            stroke-miterlimit="10"
            opacity="0.75"
          />
          <polygon
            points="273.25 90.88 273.25 99.34 281.71 99.34 273.25 90.88"
            fill="none"
            stroke="#c6b63f"
            stroke-miterlimit="10"
            stroke-width="0.75"
            opacity="0.75"
          />
          <line
            x1="273.25"
            y1="26.42"
            x2="273.25"
            y2="18.84"
            fill="none"
            stroke="#4d4d4d"
            stroke-miterlimit="10"
            stroke-width="0.75"
            opacity="0.5"
          />
          <line
            x1="276.25"
            y1="26.42"
            x2="276.25"
            y2="18.84"
            fill="none"
            stroke="#4d4d4d"
            stroke-miterlimit="10"
            stroke-width="0.75"
            opacity="0.5"
          />
          <line
            x1="273.25"
            y1="109.37"
            x2="273.25"
            y2="104.35"
            fill="none"
            stroke="#4d4d4d"
            stroke-miterlimit="10"
            opacity="0.5"
          />
          <line
            x1="285.61"
            y1="109.37"
            x2="285.61"
            y2="104.35"
            fill="none"
            stroke="#4d4d4d"
            stroke-miterlimit="10"
            opacity="0.25"
          />
          <line
            x1="280.02"
            y1="109.37"
            x2="280.02"
            y2="104.35"
            fill="none"
            stroke="#4d4d4d"
            stroke-miterlimit="10"
            stroke-width="0.75"
            opacity="0.75"
          />
          <g id="item_num">
            <path
              id="bg"
              d="M1154.61,187V170.26l3.44-3.43h44.15l3.44,3.43V187l-3.44,3.43h-44.15Z"
              transform="translate(-865.65 -43.27)"
              fill="#4d4d4d"
              opacity="0.5"
            />
            <g id="num">
              <text
                transform="translate(307.87 140.68)"
                font-size="20"
                fill="#0f0f0f"
                font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">
                {order}
              </text>
            </g>
          </g>
          <rect x="274.72" y="104.35" width="3" height="5.02" fill="#4d4d4d" opacity="0.25" />
          <rect x="286.44" y="104.35" width="1.54" height="5.02" fill="#4d4d4d" opacity="0.1" />
          <rect x="295.24" y="104.35" width="1.54" height="5.02" fill="#4d4d4d" opacity="0.1" />
          <rect x="300.44" y="104.35" width="2.04" height="5.02" fill="#4d4d4d" opacity="0.1" />
          <rect x="303.59" y="104.35" width="2.04" height="5.02" fill="#4d4d4d" opacity="0.5" />
          <rect x="306" y="104.35" width="1.02" height="5.02" fill="#4d4d4d" opacity="0.25" />
          <rect x="292.8" y="104.35" width="1.02" height="5.02" fill="#4d4d4d" opacity="0.1" />
          <rect x="288.47" y="104.35" width="1.37" height="5.02" fill="#4d4d4d" opacity="0.5" />
          <rect x="297.25" y="104.35" width="1" height="5.02" fill="#fff" opacity="0.5" />
          <rect x="298.61" y="104.35" width="1" height="5.02" fill="#4d4d4d" opacity="0.5" />
          <rect x="281.44" y="104.35" width="3" height="5.02" fill="#4d4d4d" opacity="0.1" />
          <rect x="278.42" y="104.35" width="0.75" height="5.02" fill="#fff" opacity="0.5" />
          <g id="card">
            <g>
              <g id="model_name_group">
                <polygon
                  points="35.8 116.85 35.5 0.93 3.97 0.93 3.97 7.77 7.03 10.88 7.33 124.15 4.27 127.42 4.27 134.26 28.8 134.26 28.8 128.23 35.8 116.85"
                  fill="#181818"
                />
                <rect x="31.64" y="48.35" width="1.32" height="6.7" fill="#c6b63f" opacity="0.5" />
                <rect x="31.64" y="39.7" width="1.32" height="6.7" fill="#242424" />
                <rect x="31.64" y="31.04" width="1.32" height="6.7" fill="#fff" opacity="0.5" />
                <rect
                  x="885.95"
                  y="42.67"
                  width="1.32"
                  height="6.7"
                  transform="translate(66.97 -883.86) rotate(90)"
                  fill="#242424"
                />
                <rect
                  x="894.6"
                  y="42.67"
                  width="1.32"
                  height="6.7"
                  transform="translate(75.62 -892.51) rotate(90)"
                  fill="#fff"
                  opacity="0.5"
                />
                <circle cx="6.76" cy="132.06" r="0.89" fill="#4d4d4d" opacity="0.75" />
                <circle cx="6.76" cy="3.41" r="0.89" fill="#4d4d4d" opacity="0.75" />
                <g id="mask_model_name">
                  <g clip-path="url(#clip-path-2-v2)">
                    <g id="model_name" opacity="0.5">
                      <text
                        transform="translate(16.56 11.92) rotate(90)"
                        font-size="14.58"
                        fill="#fff"
                        font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">
                        {post.title}
                      </text>
                    </g>
                  </g>
                </g>
              </g>
              <path
                d="M1134.67,147.61l-7.2-7.67v-.14L1127.23,63l-17.6-18.77H900.37l.3,115.92-7,11.38v6H997.74l2.56-2h5l25.66,17.11H1122l5.63-5.78,0-6.34,7.06-7.53Zm-18.31-16.31-.22,28.84L992.91,160l-5.82-4H903.22l0-107.14h204l15.09,15.34.18,59.39Z"
                transform="translate(-865.65 -43.27)"
                fill="#111"
              />
            </g>
            <polyline
              points="125.1 111.42 128.89 114.12 200.46 114.12"
              fill="none"
              stroke="#4d4d4d"
              stroke-miterlimit="10"
              stroke-width="0.75"
              opacity="0.75"
            />
            <g opacity="0.5">
              <line
                x1="254.3"
                y1="120.1"
                x2="258.39"
                y2="124.2"
                fill="none"
                stroke="#4d4d4d"
                stroke-miterlimit="10"
                stroke-width="0.75"
              />
              <rect
                x="254.3"
                y="120.1"
                width="4.1"
                height="4.1"
                fill="none"
                stroke="#4d4d4d"
                stroke-miterlimit="10"
                stroke-width="0.75"
              />
            </g>
            <polygon
              points="139.86 131.96 134.39 131.96 132.22 133.58 54.95 133.58 59.03 136.93 147.21 136.93 139.86 131.96"
              fill="#1c1c1c"
            />
            <g opacity="0.75">
              <text
                transform="translate(210.55 114.12)"
                font-size="7.95"
                fill="#242424"
                font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">
                {/* rating */}
              </text>
            </g>
            <polyline
              points="247.94 114.12 247.94 86.75 254.3 79.25 254.3 73.87"
              fill="none"
              stroke="#c6b63f"
              stroke-miterlimit="10"
              stroke-width="0.75"
              opacity="0.75"
            />
            <g id="mask_user_name">
              <g clip-path="url(#clip-path-3-v2)">
                <g id="user_name" opacity="0.5">
                  <text
                    transform="translate(41.95 128.78)"
                    font-size="13.25"
                    fill="#fff"
                    font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">
                    {userData?.login}
                  </text>
                </g>
              </g>
            </g>
            <g opacity="0.1">
              <polygon
                points="125.1 116.04 121.23 113.57 48.28 113.57 48.28 116.04 125.1 116.04 125.1 116.04"
                fill="#4d4d4d"
              />
            </g>
            <polyline
              points="195.23 7.53 239.91 7.53 254.34 21.96 254.34 33.58"
              fill="none"
              stroke="#4d4d4d"
              stroke-miterlimit="10"
              stroke-width="0.75"
              opacity="0.5"
            />
            <rect
              x="910.61"
              y="156.84"
              height="2.47"
              transform="translate(955.57 272.88) rotate(180)"
              fill="none"
              stroke="#4d4d4d"
              stroke-miterlimit="10"
              opacity="0.25"
            />
            <rect x="40.94" y="113.57" width="1.07" height="2.47" fill="#c6b63f" />
            <rect x="39.07" y="113.57" width="1.07" height="2.47" fill="#c6b63f" />
            <rect x="45.72" y="113.57" width="1.93" height="2.47" fill="#4d4d4d" opacity="0.1" />
            <path
              d="M905.32,57.14"
              transform="translate(-865.65 -43.27)"
              fill="none"
              stroke="#c6b63f"
              stroke-miterlimit="10"
              stroke-width="0.75"
              opacity="0.5"
            />
            <line
              x1="39.67"
              y1="14.94"
              x2="39.67"
              y2="111.26"
              fill="none"
              stroke="#4d4d4d"
              stroke-miterlimit="10"
              stroke-width="0.75"
              opacity="0.5"
            />
            <line
              x1="39.67"
              y1="6.86"
              x2="39.67"
              y2="11.92"
              fill="none"
              stroke="#c6b63f"
              stroke-miterlimit="10"
              stroke-width="0.75"
              opacity="0.75"
            />
            <polyline
              points="256.87 84.1 253.25 88.66 253.25 115.85"
              fill="none"
              stroke="#4d4d4d"
              stroke-miterlimit="10"
              opacity="0.1"
            />
            <polygon
              points="261.75 100.17 258.09 104.11 265.41 104.11 261.75 100.17"
              fill="#4d4d4d"
              opacity="0.75"
            />
            <rect x="258.09" y="104.88" width="7.32" height="1.05" fill="#4d4d4d" opacity="0.5" />
            <line
              x1="191.96"
              y1="7.53"
              x2="171.06"
              y2="7.53"
              fill="none"
              stroke="#4d4d4d"
              stroke-miterlimit="10"
              stroke-width="0.75"
              opacity="0.5"
            />
            <circle cx="30.66" cy="132.06" r="0.89" fill="#4d4d4d" opacity="0.25" />
            <circle cx="33.64" cy="132.06" r="0.89" fill="#4d4d4d" opacity="0.1" />
            <polygon points="193.74 3.52 191.31 0.25 196.17 0.25 193.74 3.52" fill="#c6b63f" />
            <polygon
              points="251.36 142.97 249.32 144.81 167.16 144.65 152.34 134.92 152.16 127.63 196.17 127.63 211.43 137.25 241.68 137.07 251.36 137.07 251.36 142.97"
              fill="#161616"
            />
            {/* <g id="rating_num" opacity="0.75">
              <text
                transform="translate(212.54 134.26)"
                font-size="9.27"
                fill="#c6b63f"
                font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">
                {post.rating} / 5
              </text>
            </g> */}
            <circle cx="86.39" cy="3.41" r="0.89" fill="#4d4d4d" opacity="0.25" />
            <circle cx="89.37" cy="3.41" r="0.89" fill="#4d4d4d" opacity="0.1" />
          </g>
        </g>
      </svg>
    </div>
  );
};
