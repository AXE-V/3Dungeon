import { styled } from "../../../stitches.config";
import { cssPathes } from "../../style";

export const StyledElements = {

  Button: styled('button', {
    position: 'relative',
    clipPath: cssPathes.bevelPolygon('.3vw'),
    background: '$accent2',
    fontSize: '1.5vw',
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

}