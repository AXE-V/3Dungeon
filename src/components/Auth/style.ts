import { styled } from "../../../stitches.config"

export const Styles = {
  Container: styled('div', {
    position: 'relative',
    display: 'grid',
    justifyContent: 'center',
    justifyItems: 'center',
    margin: '6vw'
  }),

  Group: styled('div', {
    position: 'absolute',
    top: '.7vw',
    left: '8vw',
    display: 'flex',
    columnGap: '1vw',
    zIndex: 1,
  }),
}