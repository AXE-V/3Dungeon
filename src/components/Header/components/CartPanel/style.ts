import { css, styled } from "../../../../../stitches.config";
import { cssPathes } from "../../../../style";

export const Styles = { 

  Container: styled('section', {
    width: '23vw',
    position: 'relative',
    background: '$dark2',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '1vw'
  }),

  Counter: styled('output', {
    position: 'absolute',
    right: '2vw',
    padding: '.1vw .8vw',
    clipPath: cssPathes.bevelPolygon('.3vw'),
    background: '$accent1',
    color: '$dark1',
    opacity: .75
  }),

  header: css({
    fontSize: '1.2vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '1vw',
    padding: '1.5vw 0 .5vw 0'
  }),

  // scroll: css({
  //   // height: '77vh',
  // })
}