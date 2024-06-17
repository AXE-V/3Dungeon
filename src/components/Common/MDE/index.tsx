import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SimpleMdeReact } from 'react-simplemde-editor';
import { staticStyleMDE } from './style';
import 'easymde/dist/easymde.min.css';
import { CSSProperties } from '@stitches/react';
import { Basics, SVGComponent } from '../../../interfaces/SVGComponent';
import { useCustomDispatch } from '../../../hooks/useCustomDispatch';
import { PostModel } from '../../../redux/slices/data/post';

export const ModelMDE: FC<SVGComponent & Basics & PostModel> = ({ action, post }) => {
  const dispatch = useCustomDispatch();
  const [mde_parts, setMde_parts] = useState<(Element | null)[]>([]);
  const mdeRef = useRef(null);

  console.log(post);

  const autoSaveValue = post.about ?? localStorage.getItem('smde_model-description') ?? '';
  const delay = 1000;
  const mde_css: CSSProperties = { transition: '.2s' };

  useEffect(() => {
    const mde = mdeRef.current as unknown as HTMLElement;
    setTimeout(() => {
      const mde_toolbar = mde.querySelector('.editor-toolbar');
      const mde_body = mde.querySelector('.CodeMirror.cm-s-easymde.CodeMirror-wrap');
      const mde_statusbar = mde.querySelector('.editor-statusbar');
      setMde_parts([mde_toolbar, mde_body, mde_statusbar]);
    }, 100);
  }, [mdeRef.current]);

  const options = useMemo(() => {
    return {
      autosave: {
        enabled: true,
        uniqueId: 'model-description',
        delay,
      },
    };
  }, [delay]);

  const onChange = useCallback((val: string) => {
    dispatch(action?.(val));
  }, []);

  function onMouseOver() {
    mde_parts?.map((mde_part) => {
      Object.assign(
        (mde_part as HTMLElement).style,
        Object.assign({}, mde_css, {
          background: '#c6b63fAA',
          color: mde_part === mde_parts[2] ? '#0f0f0f' : void 0,
        }),
      );
    });
  }

  function onMouseLeave() {
    mde_parts?.map((mde_part) => {
      Object.assign(
        (mde_part as HTMLElement).style,
        Object.assign({}, mde_css, {
          background: '#181818AA',
          color: mde_part === mde_parts[2] ? '#ffffff99' : void 0,
        }),
      );
    });
  }

  staticStyleMDE();
  return (
    <SimpleMdeReact
      ref={mdeRef}
      options={options}
      value={autoSaveValue}
      onChange={onChange}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    />
  );
};
