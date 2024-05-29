import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../redux/store';
import { setFocus } from '../redux/slices/visual/input';

// сброс стилей при клике вне элемента
export const useDropFocus = () => {
  const dispatch = useDispatch<AppDispath>();
  useEffect(() => {
    const clickFunc = (e: any) => {
      const condition = (e: any) => {
        const ds = e.target.dataset;
        return !(ds.input || ds.field || ds.focusFill || ds.focusStroke);
      };
      condition(e) ? dispatch(setFocus({ focus: false, _id: -1, _idParent: -1 })) : void 0;
    };
    document.addEventListener('click', (e) => clickFunc(e));
    return () => {
      document.removeEventListener('click', (e) => clickFunc(e));
    };
  }, []);

  return {
    dispatch,
  };
};
