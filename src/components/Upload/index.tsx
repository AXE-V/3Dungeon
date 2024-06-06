import { useEffect, useLayoutEffect, useState } from 'react';
import { Logo } from '../Common/Logo';
import { BgUpload } from './components/Bg';
import { BrowseBtn } from './components/BrowseBtn';
import { ExtiBtn } from './components/ExitBtn';
import { Styles as S } from './components/style';
import { useNavigate } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../supabase';
import { useAuth } from '../../providers/authProvider';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { clearPostData } from '../../redux/slices/data/post';

export const Upload = () => {
  const { user } = useAuth();
  const dispatch = useCustomDispatch();
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatch(clearPostData());
  }, []);

  return (
    <>
      <S.HeaderText>uploading file</S.HeaderText>
      <Logo
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, 0)',
          top: '3vw',
          width: '11vw',
          fill: '#111111',
        }}
      />
      <ExtiBtn />
      <p
        style={{
          color: '#c6b63f',
          position: 'absolute',
          top: '26vw',
          transform: 'translate(-50%, -50%)',
        }}>
        {/* prepare */}
        {message}
      </p>
      <S.H1>place your model</S.H1>
      <S.Info1>
        <S.Info2>
          <p style={{ opacity: 0.75 }}>Drag and drop or</p>
          <BrowseBtn
            setMessage={setMessage}
            user={user}
            style={{ width: '7vw', marginTop: '.4vw', position: 'relative', zIndex: 0 }}
          />
        </S.Info2>
        <p style={{ opacity: 0.5, marginTop: '3vw' }}>FBX, OBJ, DAE, BLEND and STL supported</p>
      </S.Info1>
      <BgUpload />
    </>
  );
};
