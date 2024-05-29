import { FC } from 'react';
import { SVGComponent } from '../../../interfaces/SVGComponent';
import { Styles as S } from './style';

export const Message: FC<SVGComponent> = ({ children, style, color }) => {
  return (
    <S.BevelSvg
      style={{ position: 'absolute', left: '63vw', top: '-12vw', zIndex: 1, ...style }}
      viewBox="0 0 400 80">
      <polygon
        style={{ stroke: `${color ?? '#c6b63f'}` }}
        points="10 2, 390 2, 398 10, 398 70, 390 78, 10 78, 2 70, 2 10"
      />
      <text x={200} y={46} fontSize={'1.37vw'} textAnchor="middle" fill={`${color ?? '#c6b63f'}`}>
        {children}
      </text>
    </S.BevelSvg>
  );
};
