import { css, styled } from "../../../stitches.config"

const Styles = {
  CardContainer: styled('section', {
    position: 'relative',
    display: 'grid',
    justifyContent: 'center',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1vw',
    margin: '6vw 5vw 0 5vw'
  }),
  
  cellContainer: css({
    position: 'absolute',
    left: '8vw',
    top: '9vw',
    zIndex: -1,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    width: '30vw',
    height: '30vw',
    columnGap: '1vw',
    rowGap: '1vw',
    opacity: '.4',
  })
}

export default Styles