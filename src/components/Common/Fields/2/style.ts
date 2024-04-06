import { css, styled } from "../../../../../stitches.config";
import { cssAnimations, cssPathes } from "../../../../style";

export const Styles = {

 Inp: styled('input', {
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    opacity: .5,
    fontFamily: '$blak',
    fontSize: '1vw', 
    marginLeft: '1vw',
    zIndex: 1,
  }),

  SymbolContainer: styled('div', {
    padding: '0 0 0 .5vw',
    position: 'relative',
    display: 'flex',
    width: '100%',
    zIndex: 1,
    pointerEvents: 'none',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0
    },
  }),

  InpBorder: styled('div', {   
    display: 'flex',
    padding: '0vw 6.4vw 0vw .4vw',
    width: '70%',
    position: 'relative',
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

  InpText: styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '$dark4',
    width: '30%',
    opacity: .75,
    padding: '.6vw .4vw',
    userSelect: 'none',
    textAlign: 'center',
    clipPath: cssPathes.inpLabel,
    whiteSpace: 'nowrap',
  }),

  InpLabel: styled('label', {
    width: '90%', 
    position: 'relative', 
    left: '49%', 
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

  caret: css({
    position: 'absolute',
    zIndex: 1,
    height: '60%',
    width: '1px',
    background: '$accent1',
    opacity: .5,
    top: '50%',
    transform: 'translate(0, -50%)',
    animation: `${cssAnimations.stilus} .8s linear infinite`,
  }),

  Overlapper: styled('span', {
    position: 'absolute',
    right: 0,
    background: '$dark3',
    width: '37.5%',
    height: '100%',
    clipPath: 'polygon(calc(0% + 1.25vw) 0%, 100% 0%, 100% 100%, 0 100%)',
    transform: 'scale(.7)',
    pointerEvents: 'none',
    zIndex: 1
  }),
}