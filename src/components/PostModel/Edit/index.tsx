//@ts-nocheck
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

export const EditPostModel = () => {
  useDropFocus();
  const { user } = useAuth();
  const [postSaved, setPostSaved] = useState({ saved: false, error: false });
  const [loading, setLoading] = useState(false);
  const postSlice = useSelector(postSelector);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(setPostUser(user?.id));
  }, [user]);

  const onClick = async () => {
    try {
      setLoading(true);
      setPostSaved((prev) => ({ ...prev, saved: false, error: false }));

      const post: Tables<'models'> = {
        about: postSlice.about,
        category: postSlice.category,
        format: postSlice.format,
        license: postSlice.license,
        tags: postSlice.tags,
        title: postSlice.title,
        user_id: postSlice.user_id,
        zip_name: postSlice.zip_name,
      };

      const dispatchedData = await dispatch(
        editPost({
          post,
          zip_name: `${postSlice.zip_name}`,
          uid: user?.id!,
        }),
      ).unwrap();

      if (!dispatchedData.success) throw dispatchedData.message;

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

  return (
    <div>
      {postSaved.saved && (
        <Message color="#c6b63f" style={{ left: '86vw', top: '6vw' }}>
          {'Post saved'}
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
            <ModelMDE action={setPostAbout} post={postSlice} />
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
