import { FC, MutableRefObject, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Basics, SVGComponent } from '../../../interfaces/SVGComponent';
import { Styles as S } from './style';
import { Field_2 } from '../Fields/2';
import { StyleElements as SE } from '../styleElements';
import { CSSProperties } from '@stitches/react';
import { useTags } from './hooks/useTags';
import { setPostTags } from '../../../redux/slices/data/post';

export const Tags: FC<SVGComponent & Basics> = ({ style, sliceValue }) => {
  const { addTag, removeTag, selectTag, clearedField, selectedTag, setValueInput, tagsArr } =
    useTags({ data: sliceValue, action: setPostTags });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '.5vw' }}>
      <div className={S.TagButtons()}>
        <SE.Button onClick={addTag}>Add</SE.Button>
        <SE.Button onClick={removeTag}>Remove</SE.Button>
      </div>
      <Field_2
        cleared={clearedField}
        inputOptions={{ label: 'tag name' }}
        setStateValue={setValueInput}
      />
      <S.TagContainer>
        {tagsArr.map((t) => (
          <S.Tag
            style={{
              cursor: 'pointer',
              ...style,
              background: selectedTag === t ? '#1e1e1e' : void 0,
            }}
            key={t}
            onClick={() => selectTag(t)}>
            <span style={{ opacity: 0.75 }}>{t}</span>
          </S.Tag>
        ))}
      </S.TagContainer>
    </div>
  );
};
