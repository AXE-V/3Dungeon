import { css, styled } from "../../../stitches.config";
import { cssPathes } from "../../style";

export const Styles = {

  mainGrid: css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    rowGap: '1vw',
    columnGap: '1vw',
  }),

  ModelHeader: styled('h2', {
    width: '100%',
    background: '$accent3'
  }),

  Column1: styled('div', {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1vw'
  }),

  window: css({
    position: 'relative',
    width: '95vw',
    height: '47vw',
    left: '50%',
    transform: 'translate(-50%, 3vw)',
    top: 0,
    padding: '1vw 0 1vw 1vw',
    background: '$dark3',
    clipPath: cssPathes.modelWindow,
  }),
}

