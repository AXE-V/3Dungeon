import { FC, useEffect, useState } from 'react';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { getAllZipByUserID } from '../../../../redux/slices/data/post';
import { supabase } from '../../../../supabase';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { Tables, TablesInsert } from '../../../../interfaces/DatabaseGeneratedTypes';
import { useAuth } from '../../../../providers/authProvider';
import { getUserDataByID } from '../../../../redux/slices/data/user';

export const Card_1: FC<SVGComponent & { data: Tables<'models'> }> = ({ style, data }) => {
  const [userData, setUserData] = useState<Tables<'users'> | null>(null);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    const thunksExec = async () => {
      const zipUrl = await dispatch(
        getAllZipByUserID({ uid: data.user_id, zip_name: data.zip_name! }),
      ).unwrap();
      console.log(zipUrl.publicUrl);

      const userInfo = await dispatch(getUserDataByID(data.user_id)).unwrap();
      setUserData(userInfo);
    };

    thunksExec();
  }, []);

  return (
    <svg
      id="Слой_1"
      data-name="Слой 1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...style }}
      width={'100%'}
      height={'100%'}
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 225.03">
      <defs>
        <clipPath id="clip-path" transform="translate(-843.29 -406.24)">
          <polygon
            points="893.96 414.36 1200.94 413.48 1224.58 437.51 1224.86 527.13 1215.57 538.7 1215.23 581.48 1029.63 582.21 1020.53 576.03 893.98 576.03 893.96 414.36"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="card">
        <g id="mask">
          <g clip-path="url(#clip-path)">
            <image
              id="img"
              width="564"
              height="317"
              transform="translate(42.88 1.03) scale(0.61)"
              // xlink:href="../../../../../pinterest/716854df6d834ba8953fd2fca611dc41.jpg"
            />
          </g>
        </g>
        <g>
          <polygon
            points="389.04 145.29 389.18 189.86 389.28 206.73 400 195.29 400 156.99 389.04 145.29"
            fill="#111"
          />
          <path
            d="M1232.33,551.53,1232,435.6l-26.55-28.33H889.69l.45,174.92-10.56,17.17v9.09H1051l35.72,22.82H1227l5.58-5.95-.1-29.22-.25-44.69Zm-16.76-12.83-.34,42.78L894,582.36l0-168,307-.88,23.64,24,.28,89.62Z"
            transform="translate(-843.29 -406.24)"
            fill="#111"
          />
          <polygon points="388.93 145.17 389.18 189.86 389.04 145.29 388.93 145.17" fill="#111" />
          <polygon
            points="46.85 175.95 46.39 1.03 0 1.03 0 11.35 4.62 16.05 5.07 186.96 0.46 191.89 0.46 202.21 36.29 202.21 36.29 193.12 46.85 175.95"
            fill="#181818"
          />
          <polygon
            points="357.65 7.24 50.68 7.24 50.7 176.12 371.94 175.24 372.28 132.46 381.57 120.89 381.29 31.27 357.65 7.24"
            fill="none"
            stroke="#111"
            stroke-miterlimit="10"
          />
          <polygon
            points="186.34 175.97 177.24 169.78 50.68 169.78 50.7 176.12 186.34 175.97"
            fill="#111"
          />
        </g>
        <polyline
          points="182.75 167.75 188.47 171.83 296.46 171.83"
          fill="none"
          stroke="#4d4d4d"
          stroke-miterlimit="10"
          stroke-width="0.75"
          opacity="0.75"
        />
        <g id="model_name" opacity="0.5">
          <text
            transform="translate(18.99 17.61) rotate(90)"
            font-size="22"
            fill="#fff"
            font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">
            {data.title}
          </text>
        </g>
        <g opacity="0.5">
          <line
            x1="377.68"
            y1="180.85"
            x2="383.87"
            y2="187.03"
            fill="none"
            stroke="#4d4d4d"
            stroke-miterlimit="10"
            stroke-width="0.75"
          />
          <rect
            x="377.68"
            y="180.85"
            width="6.18"
            height="6.18"
            fill="none"
            stroke="#4d4d4d"
            stroke-miterlimit="10"
            stroke-width="0.75"
          />
        </g>
        <g opacity="0.75">
          <text
            transform="translate(311.68 171.83)"
            font-size="12"
            fill="#242424"
            font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">
            rating
          </text>
        </g>
        <polyline
          points="368.1 171.83 368.1 130.53 377.68 119.2 377.68 111.09"
          fill="none"
          stroke="#c6b63f"
          stroke-miterlimit="10"
          stroke-width="0.75"
          opacity="0.75"
        />
        <g id="user_name" opacity="0.5">
          <text
            transform="translate(76.92 193.94)"
            font-size="20"
            fill="#fff"
            font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">
            {userData?.login}
          </text>
        </g>
        <g opacity="0.1">
          <polygon
            points="182.75 174.72 176.91 170.99 66.86 170.99 66.86 174.72 182.75 174.72 182.75 174.72"
            fill="#4d4d4d"
          />
        </g>
        <polyline
          points="288.57 10.98 355.98 10.98 377.75 32.76 377.75 50.29"
          fill="none"
          stroke="#4d4d4d"
          stroke-miterlimit="10"
          stroke-width="0.75"
          opacity="0.5"
        />
        <rect
          x="905.14"
          y="577.23"
          height="3.73"
          transform="translate(966.98 751.96) rotate(180)"
          fill="none"
          stroke="#4d4d4d"
          stroke-miterlimit="10"
          opacity="0.25"
        />
        <rect x="55.78" y="170.99" width="1.61" height="3.73" fill="#c6b63f" />
        <rect x="52.95" y="170.99" width="1.61" height="3.73" fill="#c6b63f" />
        <rect x="62.99" y="170.99" width="2.91" height="3.73" fill="#4d4d4d" opacity="0.1" />
        <rect x="41.75" y="72.59" width="1.99" height="10.1" fill="#c6b63f" opacity="0.5" />
        <rect x="41.75" y="59.53" width="1.99" height="10.1" fill="#242424" />
        <rect x="41.75" y="46.47" width="1.99" height="10.1" fill="#fff" opacity="0.5" />
        <rect
          x="867.92"
          y="404.96"
          width="1.99"
          height="10.1"
          transform="translate(435.64 -865.14) rotate(90)"
          fill="#242424"
        />
        <path
          d="M897.15,426.8"
          transform="translate(-843.29 -406.24)"
          fill="none"
          stroke="#c6b63f"
          stroke-miterlimit="10"
          stroke-width="0.75"
          opacity="0.5"
        />
        <line
          x1="53.86"
          y1="22.18"
          x2="53.86"
          y2="167.52"
          fill="none"
          stroke="#4d4d4d"
          stroke-miterlimit="10"
          stroke-width="0.75"
          opacity="0.5"
        />
        <line
          x1="53.86"
          y1="9.97"
          x2="53.86"
          y2="17.61"
          fill="none"
          stroke="#c6b63f"
          stroke-miterlimit="10"
          stroke-width="0.75"
          opacity="0.75"
        />
        <rect
          x="880.98"
          y="404.96"
          width="1.99"
          height="10.1"
          transform="translate(448.7 -878.2) rotate(90)"
          fill="#fff"
          opacity="0.5"
        />
        <polyline
          points="381.57 126.53 376.1 133.41 376.1 174.44"
          fill="none"
          stroke="#4d4d4d"
          stroke-miterlimit="10"
          opacity="0.1"
        />
        <polygon
          points="388.93 150.78 383.4 156.72 394.44 156.72 388.93 150.78"
          fill="#4d4d4d"
          opacity="0.75"
        />
        <rect x="383.4" y="157.88" width="11.04" height="1.59" fill="#4d4d4d" opacity="0.5" />
        <line
          x1="283.62"
          y1="10.98"
          x2="252.1"
          y2="10.98"
          fill="none"
          stroke="#4d4d4d"
          stroke-miterlimit="10"
          stroke-width="0.75"
          opacity="0.5"
        />
        <circle cx="4.21" cy="198.9" r="1.35" fill="#4d4d4d" opacity="0.75" />
        <circle cx="40.27" cy="198.9" r="1.35" fill="#4d4d4d" opacity="0.25" />
        <circle cx="44.77" cy="198.9" r="1.35" fill="#4d4d4d" opacity="0.1" />
        <circle cx="4.21" cy="4.76" r="1.35" fill="#4d4d4d" opacity="0.75" />
        <polygon points="286.32 4.94 282.65 0 289.98 0 286.32 4.94" fill="#c6b63f" />
        <g>
          <polygon
            points="213.98 206.25 83.08 206.25 76.92 202.22 207.66 202.22 213.98 206.25"
            fill="#1c1c1c"
          />
          <polygon
            points="213.98 206.25 204.52 200.18 196.93 200.18 193.58 202.15 213.98 206.25"
            fill="#1c1c1c"
          />
        </g>
        <polygon
          points="373.25 215.35 370.17 218.14 246.21 217.89 223.85 203.21 223.58 192.22 289.98 192.22 313.01 206.73 358.65 206.45 373.25 206.45 373.25 215.35"
          fill="#161616"
        />
        <g id="bar">
          <rect id="bg" x="223.67" y="180.85" width="148.04" height="6.18" fill="#0a0a0a" />
          <rect
            id="percent"
            x="306.68"
            y="180.85"
            width="65.03"
            height="6.18"
            fill="#c6b63f"
            opacity="0.75"
          />
        </g>
        <g id="percent_num" opacity="0.75">
          <text
            transform="translate(314.68 202.22)"
            font-size="14"
            fill="#c6b63f"
            font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">
            {data.rating}/100
          </text>
        </g>
        <circle cx="124.36" cy="4.76" r="1.35" fill="#4d4d4d" opacity="0.25" />
        <circle cx="128.86" cy="4.76" r="1.35" fill="#4d4d4d" opacity="0.1" />
      </g>
    </svg>
  );
};
