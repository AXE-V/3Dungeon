import { styled } from '../../../../stitches.config';
import { cssAnimations } from '../../../style';

export const Styles = {
  BevelSvg: styled('svg', {
    position: 'absolute',
    left: '22.5vw',
    top: 0,
    width: '13vw',
    pointerEvents: 'none',
    '& polygon': {
      strokeLinecap: 'round',
      strokeDasharray: '931, 931',
      strokeWidth: 2,
      fill: 'none',
      stroke: '$accent3',
      animation: `${cssAnimations.bevelPolygon} .8s ease-out alternate`,
    },
    '& text': {
      animation: `${cssAnimations.appearance} 1s ease-out alternate`,
    },
  }),
};
