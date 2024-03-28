import { css } from "../../../../../stitches.config";

export const styles = {
  'label': css({
    position: 'absolute', 
    left: '50%',
    top: '60%',
    transform: 'translate(-50%, -50%)',
    fontSize: "1.1vw",
    fill: "#fff",
    fontFamily: '$blak',
    opacity: .75,
    pointerEvents: 'none',
  }),
  'button': css({
    position: 'absolute',
    display: 'none'
  })
}