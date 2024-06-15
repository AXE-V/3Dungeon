import { css } from '../../../../../stitches.config';

const styles = {
  container: css({
    position: 'absolute',
    top: 0,
    zIndex: -2,
    display: 'flex',
    alignItems: 'end',
    background: '#111111',
    height: '8vw',
    width: '100vw',
  }),

  group: css({
    display: 'flex',
    alignItems: 'center',
    columnGap: '1vw',
    width: '100vw',
    margin: '0 1vw .25vw 1vw',

    '&:nth-child(2)': {
      flexShrink: '4',
      justifyContent: 'end',
    },
  }),
};

export default styles;
