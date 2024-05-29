import { css, styled } from "../../../../../stitches.config";
import { cssAnimations, cssPathes } from "../../../../style";


export const Styles = {

 Inp: styled('input', {
    minHeight: '100%',
    position: 'absolute',
    opacity: .5,
    fontFamily: '$blak',
    fontSize: '1vw', 
    marginLeft: '.5vw',
    zIndex: 1,
  }),

  SymbolContainer: styled('div', {
    padding: '0 0 0 .5vw',
    position: 'relative',
    display: 'flex',
    zIndex: 1,
    pointerEvents: 'none',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0
    },
  }),

  InpBorderContentLabel: styled('label', {   
    display: 'flex',
    width: `70%`,
    position: 'relative',
    padding: '0vw 6.4vw 0vw .4vw',
    background: '$dark4',
    '&, &:after': {   
      clipPath: cssPathes.inpBorder
    },
    '&:after': {
      content: '',
      position: 'absolute',
      top: '.06vw',
      bottom: '.05vw',
      right: '.07vw',
      left: '-0.05vw',
      background: '$dark3'
    }
  }),

  InpHeaderLabel: styled('label', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '$dark4',
    width: `40%`,
    opacity: .75,
    padding: '.6vw .4vw',
    userSelect: 'none',
    textAlign: 'center',
    clipPath: cssPathes.inpLabel,
    whiteSpace: 'nowrap',
  }),

  InpContainer: styled('div', {
    width: '100%', 
    position: 'relative', 
    left: '50%', 
    transform: 'translate(-50%, 0)'
  }),

  InpCount: styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.8vw',
    height: '1.45vw',
    width: '4vw',
    background: '$dark4',
    clipPath: cssPathes.inpCounter,
    color: '#4d4d4d',
    userSelect: 'none',
  }),

  InpItems: styled('div', {
    display: 'flex', 
    columnGap: '.2vw', 
    position: 'absolute', 
    right: '0%', 
    top: '50%', 
    transform: 'translate(-10%, -50%)', 
    zIndex: 1,
    pointerEvents: 'none'
  }),
  
}