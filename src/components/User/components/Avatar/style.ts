import { styled } from "../../../../../stitches.config";

export const Styles = {

  Login: styled('text', {
    fill: '#fff', 
    opacity: .75, 
    writingMode: 'vertical-rl', 
    textOrientation: 'mixed', 
    fontSize: '42px', 
    userSelect: 'none',
  }),

  Span: styled('span', {
    position: 'absolute', 
    bottom: '8%', 
    left: '25%', 
    fontSize: '1.5vw', 
    opacity: .75, 
    userSelect: 'none', 
    pointerEvents: 'none',
  }),

}