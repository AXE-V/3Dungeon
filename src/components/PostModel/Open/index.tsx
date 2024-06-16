import { useDropFocus } from '../../../hooks/useDropFocus';
import { ModelMDE } from '../../Common/MDE';
import { Field_2 } from '../../Common/Fields/2';
import { Scrollbar } from '../../Common/Scroll';
import { StyleElements as SE } from '../../Common/styleElements';
import { ModelViewer } from '../components/ModelViewer';
import { Styles as S } from '../style';
import { Select } from '../../Common/Select';
import { Tags } from '../../Common/Tags';
import { useEffect, useState } from 'react';
import { filterCategory, filterLicense } from '../../Common/Select/data';
import { Tables } from '../../../interfaces/DatabaseGeneratedTypes';
import { useAuth } from '../../../providers/authProvider';
import { Message } from '../../Common/Message';

import {
  PostModel,
  editPost,
  postSelector,
  setPostAbout,
  setPostCategory,
  setPostLicense,
  setPostTitle,
  setPostUser,
} from '../../../redux/slices/data/post';
import { useCustomDispatch } from '../../../hooks/useCustomDispatch';
import { useSelector } from 'react-redux';

export const OpenPostModel = () => {
  useDropFocus();
  const postSlice = useSelector(postSelector);

  return (
    <div>
      <Scrollbar buttons={true} className={S.window()} scrollStyle={{ height: '96.5%', top: 48 }}>
        <div className={S.mainGrid()}>
          <S.Column1>
            <ModelViewer
              post={{ zip_name: postSlice.zip_name, user_id: postSlice.user_id }}
              style={{ height: '34vw' }}
            />
            <Field_2
              sliceValue={postSlice.title}
              action={setPostTitle}
              _id={0}
              inputOptions={{ type: 'text', label: 'header' }}
              style={{ position: 'relative', left: '50%' }}
            />
            <ModelMDE action={setPostAbout} />
          </S.Column1>
        </div>
      </Scrollbar>
    </div>
  );
};
