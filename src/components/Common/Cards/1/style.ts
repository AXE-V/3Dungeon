import { styled } from '../../../../../stitches.config';

export const styles = {
  container: styled('div', {
    overflow: 'hidden',
    position: 'relative',
  }),
  img: styled('img', {
    position: 'absolute',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    zIndex: -1,
  }),
};
