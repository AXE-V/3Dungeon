import { css } from "../../../../../stitches.config";
import { cssAnimations } from "../../../../style";

export const styles = {
  'input': css({
    inset: '1vw', 
    marginRight: '1.5vw', 
    opacity: '0.75',
    fontSize: '1.2vw',
    zIndex: -1
  }),
  'require': css({
    animation: `${cssAnimations.requireAnim} 1s ease-in infinite`,
  }),
}