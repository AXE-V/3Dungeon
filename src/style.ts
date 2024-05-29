import { keyframes } from "@stitches/react"
import { globalCss } from "../stitches.config"

export const cssAnimations = {
  stilus: keyframes({
    '0%': {opacity: '0'},
    '30%': {opacity: '0.5'},
    '70%': {opacity: '0.5'},
    '100%': {opacity: '0'},
  }),
  textSlides: keyframes({
    '0%': {
      left: '110%'
    },
    '100%': {
      left: '-110%'
    },
  }),
  shiftBottom: keyframes({
    '0%': {
      top: '-1vw'
    },
    '100%': {
      top: '0vw'
    },
  }),
  requireAnim: keyframes({
    '0%': {opacity: '1'},
    '50%': {opacity: '0'},
    '100%': {opacity: '1'},
  }),
  bevelPolygon: keyframes({
    '0%': {
      strokeDashoffset: 931,
    },
    '100%': {  
      fill: 'rgba(0,0,0,0)',
      strokeDashoffset: 0
    },
  }),
  appearance: keyframes({
    '0%': {opacity: 0},
    '50%': {opacity: 0},
    '100%': {opacity: 1},
  })
}

export const cssPathes = {
  inpBorder: 'polygon(0% 0%, 100% 0%, 100% calc(100% - .7vw), calc(100% - .7vw) 100%, 0% 100%)',
  inpLabel: 'polygon(0% calc(100% - .3vw), 0% calc(0% + .3vw), calc(0% + .3vw) 0%, 100% 0%, 100% 100%, calc(0% + .3vw) 100%)',
  inpCounter: 'polygon(0% calc(0% + .4vw), calc(0% + .4vw) 0%, 100% 0%, 100% calc(100% - .55vw), calc(100% - .55vw) 100%, 0% 100%)',
  modelWindow: 'polygon(0 calc(0% + 6vw), calc(0% + 6vw) 0, calc(100% - 20vw) 0, calc(100% - 10vw) calc(0% + 3.5vw), 100% calc(0% + 3.5vw), 100% 100%, 0 100%)',
  modelViewer: 'polygon(0 calc(0% + 5.5vw), calc(0% + 5.5vw) 0, 100% 0, 100% 100%, 0 100%)',
  bevelPolygon: (bevel: string | string[]) => {
    if (Array.isArray(bevel) && bevel.length === 4) {
      return `polygon(calc(0% + ${bevel[0]}) 0, calc(100% - ${bevel[1]}) 0, 100% calc(0% + ${bevel[1]}), 100% calc(100% - ${bevel[2]}), 
      calc(100% - ${bevel[2]}) 100%, calc(0% + ${bevel[3]}) 100%, 0% calc(100% - ${bevel[3]}), 0% calc(0% + ${bevel[0]}))`
    } else {
      return `polygon(calc(0% + ${bevel}) 0, calc(100% - ${bevel}) 0, 100% calc(0% + ${bevel}), 100% calc(100% - ${bevel}), 
      calc(100% - ${bevel}) 100%, calc(0% + ${bevel}) 100%, 0% calc(100% - ${bevel}), 0% calc(0% + ${bevel}))`
    }
  },
}

const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'blak',
    src: 'local("blak"), url("./fonts/ftb.ttf")',
  },

  '*': {
    boxSizing: 'border-box',
    margin: 0, 
    padding: 0,
  },

  body: {
    fontFamily: 'ISL_FADETOBLAK, ISL_FADE TO BLAK, blak',
    fontSize: '1vw',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#0a0a0a',
    overflow: 'hidden',
  },

  input: {
    position: 'absolute',
    opacity: '.5',
    fontFamily: '$blak',
    fontSize: '1vw',
    appearance: 'none',
    background: 'none',
    outline: 'none',
    border: 'none',
    color: '$accent1',
    zIndex: -2
  },

  button: {
    padding: '.5vw .7vw',
    background: '$dark3',
    color: '$accent1',
    opacity: .75,
    fontSize: '1vw',
    border: 'none',
    transition: '.15s ease-out',
    clipPath: cssPathes.inpCounter,
    '&:hover': {
      background: '$dark5'
    }
  },
  
  'a': {
    textDecoration: 'none',
    color: '$accent1',
  },

  'h1, p, span': {
    userSelect: 'none',
    pointerEvents: 'none'
  },

  'ul, ol': {
    listStyle: 'none',
  },

  '*::-webkit-scrollbar': {
    display: 'none',
  }
})

export default globalStyles