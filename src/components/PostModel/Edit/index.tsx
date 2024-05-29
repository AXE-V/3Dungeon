import { useDropFocus } from '../../../hooks/useDropFocus';
import { ModelMDE } from '../../Common/MDE';
import { Field_2 } from '../../Common/Fields/2';
import { Scrollbar } from '../../Common/Scroll';
import { StyleElements as SE } from '../../Common/styleElements';
import { ModelViewer } from '../components/ModelViewer';
import { Styles as S } from '../style';
import { Select } from '../../Common/Select';
import { Tags } from '../../Common/Tags';
import { SyntheticEvent, useEffect, useState } from 'react';
import { filterCategory, filterLicense } from '../../Common/Select/data';
import store from '../../../redux/store';
import { TablesInsert, Tables } from '../../../interfaces/db';
import { useAuth } from '../../../providers/authProvider';
import { Message } from '../../Common/Message';
import { useLocation } from 'react-router-dom';

import {
  TableModels,
  editPost,
  // TableModels,
  postSelector,
  setPostAbout,
  setPostCategory,
  setPostLicense,
  setPostTitle,
  setPostUser,
} from '../../../redux/slices/data/post';
import { Action, ActionCreator, CreateSliceOptions, createAction } from '@reduxjs/toolkit';
import { useCustomDispatch } from '../../../hooks/useCustomDispatch';
import { createPost } from '../../../api/post';

export const EditPostModel = () => {
  useDropFocus();
  const { user } = useAuth();
  const lskey = 'edit_post';
  const [postSaved, setPostSaved] = useState(false);
  const [sliceData] = useState(store.getState().postR);
  const dispatch = useCustomDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setPostUser(user?.id));
  }, [user]);

  // type Models = Tables<'models'> & {
  //   @default('uuid_generate_v4()') id: string;
  // }

  const onSave = (e: SyntheticEvent<EventTarget>) => {
    try {
      // insert into mytable (meta) values ((category_val, (polygons, vertices, edges)))
      const data: TableModels = {
        about: sliceData.about!,
        category: sliceData.category!,
        format: sliceData.format!,
        geometry: JSON.stringify(sliceData.geometry),
        license: sliceData.license!,
        rating: 0,
        size: 0,
        tags: sliceData.tags!,
        title: sliceData.title!,
        user_id: sliceData.user_id!,
      };
      // createPost(data);
      // editPost(data);
      // setPostSaved(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {postSaved && (
        <Message color="#c6b63f" style={{ left: '86vw', top: '6vw' }}>
          {location.pathname === `/user/${user?.id}/create-post` ? 'Post created' : 'Post edited'}
        </Message>
      )}
      <Scrollbar buttons={true} className={S.window()} scrollStyle={{ height: '96.5%', top: 48 }}>
        <div className={S.mainGrid()}>
          <S.Column1>
            <ModelViewer />
            <Field_2
              sliceValue={sliceData.title}
              action={setPostTitle}
              _id={0}
              inputOptions={{ type: 'text', label: 'header' }}
              style={{ position: 'relative', left: '50%' }}
            />
            <ModelMDE action={setPostAbout} />
          </S.Column1>
          <div style={{ padding: '5vw 2vw 2vw 2vw' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3vw' }}>
              <SE.Button
                style={{
                  fontSize: '1.5vw',
                }}
                type="submit"
                onClick={onSave}>
                Save post
              </SE.Button>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1vw' }}>
                <Select
                  data={filterCategory}
                  action={setPostCategory}
                  sliceValue={sliceData.category}
                />
                <Select
                  data={filterLicense}
                  action={setPostLicense}
                  sliceValue={sliceData.license}
                />
              </div>
              <Tags sliceValue={sliceData.tags} />
            </div>
          </div>
        </div>
      </Scrollbar>
    </div>
  );
};
