import { css } from "../../../stitches.config";

export const styles = {
  container: css({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyContent: 'center',
    justifyItems: 'center',
    margin: '7vw 0 0 0',
    columnGap: '2vw',
    transform: 'scale(.95)'
  }),
  
  column: css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1vw'
  }),
}