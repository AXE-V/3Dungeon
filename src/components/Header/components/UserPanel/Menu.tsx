import { FC } from 'react';
import { MenuItem } from './MenuItem';
import { Styles as S } from './style';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { Message } from '../../../Common/Message';

export const Menu: FC<SVGComponent> = ({ style, session }) => {
  const uid = session?.user.id;
  return (
    <>
      <div style={{ position: 'absolute', right: 0, ...style }}>
        <div style={{ height: '1vw', width: '11vw' }} />
        <S.Menu>
          <S.MenuSection>
            <MenuItem session={session} label={'models'} to={`/user/${uid}/3d-models`} />
            <MenuItem session={session} label={'likes'} to={`/user/${uid}/likes`} />
            <MenuItem session={session} label={'account'} to={`/user/${uid}`} />
            <MenuItem session={session} label={'login'} />
          </S.MenuSection>
        </S.Menu>
      </div>
    </>
  );
};

export default Menu;
