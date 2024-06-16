import { css, styled } from '../../../stitches.config';
import { cssPathes } from '../../style';

export const Styles = {
  CardContainer: styled('section', {
    position: 'relative',
    display: 'grid',
    justifyContent: 'center',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1vw',
    margin: '6vw 5vw 0 5vw',
  }),

  cellContainer: css({
    position: 'absolute',
    left: '8vw',
    top: '9vw',
    zIndex: -1,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    width: '30vw',
    height: '30vw',
    columnGap: '1vw',
    rowGap: '1vw',
    opacity: '.4',
  }),

  button: styled('button', {
    fontFamily: '$blak',
    padding: '.5vw .7vw',
    background: '$dark4',
    border: '2px solid $dark6',
    color: '$accent1',
    opacity: 0.75,
    fontSize: '2vw',
    transition: '.15s ease-out',
    aspectRatio: '16/9',
    width: '100%',
    clipPath: 'none',
    borderRadius: '-10px',
    '&:hover': {
      background: '$dark5',
    },
  }),
};
