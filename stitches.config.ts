import {createStitches} from '@stitches/react'

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      dark1: '#0a0a0a',
      dark2: '#0f0f0f',
      dark3: '#111111',
      dark4: '#181818',
      dark5: '#1e1e1e',
      dark6: '#4a4a4a',
      accent1: '#ffffff',
      accent2: '#c6b63f', 
      accent3: '#c61a1a', 
    },
    borderStyles: {
      'inpBorderPath': 'polygon(0% 0%, 100% 0%, 100% calc(100% - .7vw), calc(100% - .7vw) 100%, 0% 100%)',
    } ,
    transitions: {
      tr1: '.2s ease-out',
    },
    fonts: {
      blak: 'ISL_FADETOBLAK, ISL_FADE TO BLAK, blak'
   },
  },
})