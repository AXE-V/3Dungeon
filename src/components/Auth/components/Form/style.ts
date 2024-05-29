import { keyframes, styled } from '@stitches/react';
import { cssAnimations, cssPathes } from '../../../../style';
import { css } from '../../../../../stitches.config';

export const Styles = {
  Check: styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '-20vh',
    transform: 'translate(-50%, 0%)',
    width: '100vw',
    height: '100vh',
    fontSize: '2vw',
    zIndex: 10,
    '&:before': {
      content: '',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: '$dark1',
      opacity: 0.9,
      zIndex: -1,
    },
  }),

  Form: styled('form', {
    position: 'absolute',
    top: '8vw',
    left: '17vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: '1vw',
    zIndex: 1,
  }),

  Span: styled('span', {
    position: 'absolute',
    right: 0,
    color: '$dark6',
    opacity: 0.75,
    textDecoration: 'none',
    padding: '.5vw',
    background: '$dark2',
    clipPath: cssPathes.inpCounter,
    pointerEvents: 'all',
    '&:hover': {
      background: '$dark3',
    },
  }),

  AuthError: styled('span', {
    color: '$accent3',
  }),
};
