import { styled } from "../../../../stitches.config";
import { cssPathes } from "../../../style";

export const Styles = {
  Text: styled('div', {
    position: 'absolute',
    fontSize: '1.3vw', 
    color: '$accent2',
    opacity: .75,
    left: '2.4vw',
    top: '.7vw'
  }),

  HeaderText: styled('div', {
    position: 'absolute',
    fontSize: '1vw', 
    color: '$accent1',
    opacity: .75,
    left: '2.5vw',
    top: '1.4vw',
    background: '$dark3',
    padding: '1vw 1.2vw',
    clipPath: cssPathes.inpBorder
  }),

  H1: styled('h1', {
   display: 'flex', 
   justifyContent: 'center', 
   position: 'absolute', 
   top: '27vw', 
   left: '50%', 
   transform: 'translate(-50%, 0)', 
   opacity: .75
  }),

  Info1: styled('div', {
    position: 'absolute', 
    top: '44vw', 
    left: '50%', 
    transform: 'translate(-50%, 0)'
  }),

  Info2: styled('div', {
    display: 'flex', 
    columnGap: '1vw', 
    alignItems: 'center', 
    justifyContent: 'center'
  }),
  

}