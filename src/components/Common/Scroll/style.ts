import { css } from "../../../../stitches.config";

const width = 26
export const Styles = {
  
  'custom-scrollbars__container': css({
    display: 'flex',
  }),

  'custom-scrollbars__content': css({
    // background: 'Pink',
    
    alignItems: 'start',
    overflow: 'auto',
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
    
    '&::-webkit-scrollbar': {
      display: 'none',
    }
  }),
  
  'custom-scrollbars__track-and-thumb': css({
    display: 'block',
    height: '100%',
    position: 'relative',
    width: `${width}px`,
  }),
  
  /* The track is meant to fill the space it's given, so top and bottom are set to 0. */
  'custom-scrollbars__track': css({
    bottom: 0,
    top: 0,
    right: 0,
    background: '$dark3',
    position: 'absolute',
    width: '100%',

    '&:before': {
      content: '',
      position: 'absolute',
      height: '100%',
      width: '30%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '$dark1'
    }
  }),
  
  /* No top or bottom set for the thumb. That will be controlled by JavaScript. */
  'custom-scrollbars__thumb': css({
    position: 'absolute',
    right: 0,
    width: '30%',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '$accent2',
  }),

  'custom-scrollbars__scrollbar': css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    height: '100%',
    top: 0,
  }),

  'custom-scrollbars__button': css({
    position: 'relative',
    zIndex: 1,
    padding: 0,
    height: `${width + 10}px`,
    width: `100%`,
    clipPath: 'none',
    opacity: 1,
  })
}


