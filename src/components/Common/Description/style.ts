import { css } from "../../../../stitches.config";
import { cssPathes } from "../../../style";

export const Styles = {
  mde: css({
    position: 'relative',
    clipPath: cssPathes.bevelPolygon('.6vw'),
    background: '#181818',
    padding: '.5vw',
    '&::before': {
      content: '',
      position: 'absolute',
      clipPath: cssPathes.bevelPolygon('.6vw'),
      inset: '2px',
      background: '#111'
    }
  })
} 