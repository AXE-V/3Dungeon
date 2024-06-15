import { styled } from '../../../../stitches.config';

export const Styles = {
  SelectOutput: styled('div', {
    position: 'absolute',
    // top: '1.5vw',
    left: '47%',
    top: '46%',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    // fontSize: '.9vw',
    // transform: 'translate(-.3vw, 0)',
    transform: 'translate(-50%, -50%)',
    userSelect: 'none',
    pointerEvents: 'none',
    opacity: 0.75,
  }),

  SelectContainer: styled('div', {
    width: '100%',
    position: 'absolute',
    top: 'calc(100% + .5vw)',
    display: 'flex',
    flexDirection: 'column',
    background: '#111',
    border: '1px solid #4d4d4d',
    maxHeight: '10.3vw',
    overflow: 'auto',
    zIndex: 1,
  }),
};
