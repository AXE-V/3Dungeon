import { FC, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { styleController } from '../../../../utils/styleController';
import { Styles as S } from './style';
import { supabase } from '../../../../supabase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../providers/authProvider';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { clearCache } from '../../../../redux/slices/data/user';
import { clearCatalogData } from '../../../../redux/slices/data/filter';

export const MenuItem: FC<SVGComponent & { label: string }> = ({ style, label, to }) => {
  const { session } = useAuth();
  const dispatch = useCustomDispatch();
  const refLi = useRef(null);
  const [originalStyle, setOriginalStyle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setOriginalStyle((refLi.current as unknown as HTMLElement).style.cssText);
  }, []);

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({ command: 'add', target: e.currentTarget, style: { background: '#1e1e1e' } });
  }

  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
    styleController({ command: 'remove', target: e.currentTarget, originalStyle: originalStyle });
  }

  function redirect() {
    if (session && label !== 'login' && label !== 'clear cache') {
      navigate(`${to}`);
    } else if (session && label === 'login') {
      supabase.auth.signOut();
      navigate('/');
    } else if (!session) {
      navigate('/auth/login');
    } else if (session && label === 'clear cache') {
      dispatch(clearCatalogData());
      dispatch(clearCache()).then((d) => console.log(d.payload));
    }
  }

  return (
    <S.MenuItem
      ref={refLi}
      style={{ ...style }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={redirect}
      data-focus-fill>
      <span style={{ opacity: 0.75 }}>{label === 'login' && session ? 'logout' : label}</span>
    </S.MenuItem>
  );
};
