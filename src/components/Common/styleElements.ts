import { css, styled } from "../../../stitches.config";
import { cssPathes } from "../../style";

export const StyleElements = {

  Button: styled('button', {
    position: 'relative',
    clipPath: cssPathes.bevelPolygon('.3vw'),
    background: '$accent2',
    fontSize: '1vw',
    opacity: .75,
    width: '100%',
    fontFamily: '$blak',
    
    '&:before': {
      clipPath: cssPathes.bevelPolygon('.3vw'),
      content: '',
      position: 'absolute',
      inset: '1px',
      background: '$dark3',
      zIndex: -1,
      transition: '.1s ease-out',
    },
    '&:hover': {
      color: '$dark1',
      'background': '$accent2',
    },
    '&:hover:before': {
      background: '$accent2'
    }
  }),

  CardContainer: styled('section', {
    position: 'relative',
    display: 'grid',
    justifyContent: 'center',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1vw',
    margin: '6vw 5vw 0 5vw'
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
  })
  
}