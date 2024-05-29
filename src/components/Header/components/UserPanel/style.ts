import { styled } from '../../../../../stitches.config';
import { cssPathes } from '../../../../style';

export const Styles = {
  Menu: styled('div', {
    display: 'flex',
    flexDirection: 'column',
    clipPath: cssPathes.bevelPolygon('.3vw'),
    '& ul:last-child': {
      borderBottom: 'none',
    },
  }),

  MenuSection: styled('ul', {
    display: 'flex',
    flexDirection: 'column',
  }),

  MenuItem: styled('li', {
    padding: '.5vw .5vw .5vw 1vw',
    minWidth: '11vw',
    position: 'relative',
    background: '#111',
  }),
};
