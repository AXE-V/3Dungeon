import bgGradient from '../3dungeon/items/bgGradient.svg'
import mainBodyDecor from '../3dungeon/items/mainBodyDecor.svg'
import cell from '../3dungeon/items/cell.svg'
import { styled } from '../../../stitches.config'

export const BgGradient = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: -2,
  background: `url("${bgGradient}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '101vw',
  height: '101vh',
})

export const MainBodyDecor = styled('div', {
  position: 'absolute',
  top: '8vw',
  transform: 'scale(.99)',
  zIndex: -1,
  background: `url("${mainBodyDecor}")`,
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vw',
})

export const Cell = styled('div', {
  background: `url("${cell}")`,
  backgroundRepeat: 'no-repeat',
  width: '16vw',
})

