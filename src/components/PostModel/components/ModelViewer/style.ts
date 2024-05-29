import { styled } from "@stitches/react";
import { cssPathes } from "../../../../style";

export const Styles = {
  ModelViewer: styled('section', {
    position: 'relative',
    background: '$dark2',
    width: '100%',
    height: '34vw',
    clipPath: cssPathes.modelViewer,
  }),
}