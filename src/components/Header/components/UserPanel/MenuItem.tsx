import { FC, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { styleController } from '../../../../utils/styleController';
import { Styles as S } from './style';
import { supabase } from '../../../../supabase';
import { useNavigate } from 'react-router-dom';

export const MenuItem: FC<SVGComponent & { label: string }> = ({ style, label, to, session }) => {
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
    if (session && label !== 'login') {
      navigate(`${to}`);
    } else if (session && label === 'login') {
      supabase.auth.signOut();
      navigate('/');
    } else if (!session) {
      navigate('/auth/login');
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
