import { css } from "../../../stitches.config"

const styles = {
  header: css({
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100vw',
  }),
  logo: css({
    display: 'flex',
    alignItems: 'center',
    columnGap: '1vw',
    margin: '.5vw 1vw 0 1vw',
  }),
  buttons: css({
    display: 'flex',
    alignItems: 'center',
    columnGap: '.8vw',
    margin: '.4vw 1vw 0 .5vw',
  })
}

export default styles