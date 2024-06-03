import { useEffect, useLayoutEffect, useState } from 'react';
import { Logo } from '../Common/Logo';
import { BgUpload } from './components/Bg';
import { BrowseBtn } from './components/BrowseBtn';
import { ExtiBtn } from './components/ExitBtn';
import { Styles } from './components/style';
import { useNavigate } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../supabase';
import { useAuth } from '../../providers/authProvider';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import {
  clearPostData,
  // clearPostZip,
  setPostAbout,
  setPostCategory,
  setPostFormat,
  setPostGeometry,
  setPostLicense,
  setPostSize,
  setPostTags,
  setPostTitle,
} from '../../redux/slices/data/post';

export const Upload = () => {
  const { user } = useAuth();
  const dispatch = useCustomDispatch();

  useEffect(() => {
    // const clearPostData = () => {
    //   console.log('clearPostData');
    //   // dispatch(setPostAbout(''));
    //   // dispatch(setPostCategory(''));
    //   // dispatch(setPostFormat(''));
    //   // dispatch(setPostGeometry(''));
    //   // dispatch(setPostLicense(''));
    //   // dispatch(setPostSize(0));
    //   // dispatch(setPostTags([]));
    //   // dispatch(setPostTitle(''));
    //   // dispatch(clearPostZip());
    // };

    dispatch(clearPostData());
  }, []);

  return (
    <>
      <Styles.HeaderText>uploading file</Styles.HeaderText>
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
      <Styles.H1>place your model</Styles.H1>
      <Styles.Info1>
        <Styles.Info2>
          <p style={{ opacity: 0.75 }}>Drag and drop or</p>
          <BrowseBtn
            user={user}
            style={{ width: '7vw', marginTop: '.4vw', position: 'relative', zIndex: 0 }}
          />
        </Styles.Info2>
        <p style={{ opacity: 0.5, marginTop: '3vw' }}>FBX, OBJ, DAE, BLEND and STL supported</p>
      </Styles.Info1>
      <BgUpload />
    </>
  );
};
