import { css, styled } from "../../../../stitches.config";
import { cssPathes } from "../../../style";

export const Styles = {

  ModelViewer: styled('section', {
    position: 'relative',
    background: '$dark2',
    width: '1250px',
    height: '660px',
    clipPath: cssPathes.modelViewer,
  }),

  mainGrid: css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    rowGap: '1vw',
    columnGap: '1vw',
  }),

  ModelHeader: styled('h2', {
    width: '100%',
    background: '$accent3'
  }),

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

  Column1: styled('div', {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1vw'
  })
}