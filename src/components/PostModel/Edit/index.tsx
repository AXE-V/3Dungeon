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
import { TablesInsert, Tables } from '../../../interfaces/DatabaseGeneratedTypes';
import { useAuth } from '../../../providers/authProvider';
import { Message } from '../../Common/Message';
import { useLocation } from 'react-router-dom';

import {
  editPost,
  postSelector,
  setPostAbout,
  setPostCategory,
  setPostLicense,
  setPostTitle,
  setPostUser,
} from '../../../redux/slices/data/post';
import {
  Action,
  ActionCreator,
  CreateSliceOptions,
  createAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { useCustomDispatch } from '../../../hooks/useCustomDispatch';
import { createPost } from '../../../api/post';
import { supabase } from '../../../supabase';
import { useSelector } from 'react-redux';

export const EditPostModel = () => {
  useDropFocus();
  const { user } = useAuth();
  const [postSaved, setPostSaved] = useState({ saved: false, error: false });
  const [loading, setLoading] = useState(false);
  const [operation, setOperation] = useState<'update' | 'insert'>('update');
  const postSlice = useSelector(postSelector);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(setPostUser(user?.id));
  }, [user]);

  // 'https://guflskihwrcehwjtxlab.supabase.co/storage/v1/object/public/models/20250b4a-bb69-4cce-ae6a-29fe0167c429/yf-23_black_widow_ii_-_fighter_jet_-_free.zip?t=2024-06-02T12%3A10%3A29.314Z'

  const onClick = () => {
    try {
      setLoading(true);
      setPostSaved((prev) => ({ ...prev, saved: false, error: false }));
      const preparedData: Tables<'models'> = {
        about: postSlice.about,
        category: postSlice.category,
        format: postSlice.format,
        geometry: JSON.stringify(postSlice.geometry),
        license: postSlice.license,
        size: postSlice.size,
        tags: postSlice.tags,
        title: postSlice.title,
        user_id: postSlice.user_id,
        zip_name: postSlice.zip_name,
        scene: postSlice.scene,
      };

      const savePostData = async () => {
        try {
          const dispatchedData = await dispatch(
            editPost({ data: preparedData, zip_name: `${postSlice.zip_name}`, uid: user?.id }),
          ).unwrap();
          // const dispatchedData = await dispatch(
          //   editPost({ data: preparedData, zipName: `${postSlice.zip?.zipName}`, uid: user?.id }),
          // ).unwrap();

          console.log(dispatchedData);

          if (!dispatchedData.zip.success) throw dispatchedData.zip.message;

          if (dispatchedData.zip.count === 1) {
            setOperation('insert');
          } else {
            setOperation('update');
          }

          console.log(dispatchedData);

          setLoading(() => false);
          setPostSaved((prev) => ({ ...prev, saved: true, error: false }));
          setTimeout(() => {
            setPostSaved((prev) => ({ ...prev, saved: false, error: false }));
          }, 3000);
        } catch (error) {
          setLoading(() => false);
          console.log(error);
          setPostSaved((prev) => ({ ...prev, error: true, saved: false }));

          setTimeout(() => {
            setPostSaved((prev) => ({ ...prev, error: false, saved: false }));
          }, 3000);
        }
      };

      savePostData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {postSaved.saved && (
        <Message color="#c6b63f" style={{ left: '86vw', top: '6vw' }}>
          {operation === 'insert' ? 'Post created' : 'Post edited'}
        </Message>
      )}
      {postSaved.error && (
        <Message color="#c61a1a" style={{ left: '86vw', top: '6vw' }}>
          {'Save error'}
        </Message>
      )}
      {loading && (
        <Message color="#c6b63f" style={{ left: '86vw', top: '6vw' }}>
          {'Loading...'}
        </Message>
      )}
      <Scrollbar buttons={true} className={S.window()} scrollStyle={{ height: '96.5%', top: 48 }}>
        <div className={S.mainGrid()}>
          <S.Column1>
            <ModelViewer />
            <Field_2
              sliceValue={postSlice.title}
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
                onClick={onClick}>
                Save post
              </SE.Button>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1vw' }}>
                <Select
                  data={filterCategory}
                  action={setPostCategory}
                  sliceValue={postSlice.category}
                />
                <Select
                  data={filterLicense}
                  action={setPostLicense}
                  sliceValue={postSlice.license}
                />
              </div>
              <Tags sliceValue={postSlice.tags} />
            </div>
          </div>
        </div>
      </Scrollbar>
    </div>
  );
};
