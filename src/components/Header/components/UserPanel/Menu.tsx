import { FC } from 'react';
import { MenuItem } from './MenuItem';
import { Styles as S } from './style';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { useAuth } from '../../../../providers/authProvider';

export const Menu: FC<SVGComponent> = ({ style }) => {
  const { user } = useAuth();
  const login = user?.user_metadata.login;

  return (
    <>
      <div style={{ position: 'absolute', right: 0, ...style }}>
        <div style={{ height: '1vw', width: '11vw' }} />
        <S.Menu>
          <S.MenuSection>
            <MenuItem label={'collections'} to={`/user/${login}/collections`} />
            <MenuItem label={'models'} to={`/user/${login}/3d-models`} />
            <MenuItem label={'likes'} to={`/user/${login}/likes`} />
            <MenuItem label={'account'} to={`/user/${login}`} />
            <MenuItem label={'clear cache'} />
            <MenuItem label={'login'} />
          </S.MenuSection>
        </S.Menu>
      </div>
    </>
  );
};

export default Menu;
