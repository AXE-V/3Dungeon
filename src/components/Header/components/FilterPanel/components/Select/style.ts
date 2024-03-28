import { styled } from "../../../../../../../stitches.config";

export const Styles = {

  SelectOutput: styled('div', {
    position: 'relative', 
    top: '1.5vw', 
    textAlign: 'center', 
    fontSize: '.9vw', 
    transform: 'translate(-.3vw, 0)',
    userSelect: 'none',
    pointerEvents: 'none',
    opacity: .75
  }),

  SelectContainer: styled('div', {
    position: 'absolute', 
    top: '3vw', 
    display: 'flex', 
    flexDirection: 'column',
    background: '#111', 
    border: '1px solid #4d4d4d',
    maxHeight: '10.3vw',
    overflow: 'auto'
  }),


}