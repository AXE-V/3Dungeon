//@ts-nocheck
import { useDropFocus } from '../../../hooks/useDropFocus';
import { ModelMDE } from '../../Common/MDE';
import { Field_2 } from '../../Common/Fields/2';
import { Scrollbar } from '../../Common/Scroll';
import { ModelViewer } from '../components/ModelViewer';
import { Styles as S } from '../style';

import { postSelector, setPostAbout, setPostTitle } from '../../../redux/slices/data/post';
import { useSelector } from 'react-redux';
import { Styles as TagStyles } from '../../Common/Tags/style';

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
            <ModelMDE action={setPostAbout} post={postSlice} />
          </S.Column1>
          <div
            style={{
              top: '4vw',
              position: 'relative',
              opacity: 0.75,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5vw',
            }}>
            <div style={{ display: 'flex', columnGap: '1vw' }}>
              category: <p style={{ color: '#c6b63f' }}>{postSlice.category}</p>
            </div>
            <div style={{ display: 'flex', columnGap: '1vw' }}>
              format: <p style={{ color: '#c6b63f' }}>{postSlice.format}</p>
            </div>
            <div style={{ display: 'flex', columnGap: '1vw' }}>
              license: <p style={{ color: '#c6b63f' }}>{postSlice.license}</p>
            </div>

            <div style={{ display: 'flex', gap: '.8vw' }}>
              <p>tags:</p>
              <ul style={{ display: 'flex', columnGap: '.5vw', rowGap: '.5vw', flexWrap: 'wrap' }}>
                {postSlice.tags.map((t) => (
                  <TagStyles.Tag>{t}</TagStyles.Tag>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Scrollbar>
    </div>
  );
};
