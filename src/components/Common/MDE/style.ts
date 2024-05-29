import { globalCss } from "../../../../stitches.config";
import { cssPathes } from "../../../style";

export const staticStyleMDE = globalCss({

  '.separator': {
    position: 'relative',
    borderRight: '1px solid $accent1 !important',
    borderLeft: '1px solid $accent1 !important',
    zIndex: 1,
    opacity: .75
  },

  '.CodeMirror-cursor': {
    borderLeft: '1.5px solid $accent2 !important',
  },

  '.CodeMirror-selected': {
    background: '$dark6 !important',
  },

  'button.guide, button.fullscreen, button.side-by-side, button.preview, button.image, button.link, button.ordered-list, button.unordered-list, button.quote, button.heading, button.italic, button.bold ': {
    marginRight: '.2vw !important',
    border: 'none !important',
    background: '$dark3 !important',
    color: '$accent1',
    opacity: .75,
    transition: '.15s ease-out',
    clipPath: cssPathes.inpCounter,
    '&:hover': {
      background: '$dark5 !important',
    }
  },

  '.editor-toolbar': {
    background: '$dark4',
    border: 'none !important',
    padding: '.4vw .5vw !important',
    position: 'relative',
    '&:before': {
      content: '',
      position: 'absolute',
      clipPath: cssPathes.bevelPolygon(['0.4vw', '0.4vw', '0vw', '0vw']),
      top: '.12vw',
      left: '.12vw',
      right: '.12vw',
      bottom: '-.1vw',
      background: '$dark3'
    }
  },

  '.CodeMirror.cm-s-easymde.CodeMirror-wrap': {
    background: '$dark4',
    border: 'none',
    color: '$accent1',
    opacity: .75,
    position: 'relative',
    '&:before': {
      content: '',
      position: 'absolute',
      clipPath: cssPathes.bevelPolygon('0vw'),
      top: '-.1vw',
      left: '.12vw',
      right: '.12vw',
      bottom: '-.1vw',
      background: '$dark3'
    }
  },

  '.EasyMDEContainer': {
    clipPath: cssPathes.bevelPolygon('.5vw'),
  },

  '.editor-statusbar': {
    background: '$dark4',
  }
})