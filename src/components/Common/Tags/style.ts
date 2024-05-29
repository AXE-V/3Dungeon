import { css, styled } from "../../../../stitches.config";
import { cssPathes } from "../../../style";

export const Styles = {
  Tag: styled('div', {
    padding: '.3vw 1.2vw',
    width: 'fit-content',
    background: '$dark4',
    textAlign: 'center',
    clipPath: cssPathes.bevelPolygon(['0vw', '0vw', '0vw', '.6vw'])
  }),

  TagContainer: styled('article', {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    gap: '.5vw'
  }),

  TagButtons: css({
    display: 'flex',
    columnGap: '1vw',
  })
}