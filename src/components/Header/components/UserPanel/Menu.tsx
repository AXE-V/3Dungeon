import { FC } from "react";
import { MenuItem } from "./MenuItem";
import { Styles as S } from "./style";
import { SVGComponent } from "../../../../interfaces/SVGComponent";

export const Menu: FC<SVGComponent> = ({style}) => {
  return ( 
    <div style={{position: 'absolute', right: 0, ...style}}>
      <div style={{height: '1vw', width: '11vw'}}/>
      <S.Menu>
          <S.MenuSection>
            <MenuItem label={'models'} to={'/user/:id/models'}/>
            <MenuItem label={'likes'} to={'/user/:id/likes'}/>
            <MenuItem label={'account'} to={'/user/:id'}/>
          </S.MenuSection>
          <S.MenuSection>
            <MenuItem label={'login'}/>
          </S.MenuSection>
        </S.Menu>
    </div>
   );
}
 
export default Menu;