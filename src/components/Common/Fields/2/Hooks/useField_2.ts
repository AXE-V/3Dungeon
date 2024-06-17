import { SyntheticEvent, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useChangeFocus } from '../../../../../hooks/useChangeFocus';
import { styleController } from '../../../../../utils/styleController';
import { useCustomDispatch } from '../../../../../hooks/useCustomDispatch';
import { inputSelector, setFocus } from '../../../../../redux/slices/visual/input';

export const useField_2 = (_id: any, _idParent: any) => {
  const dispatch = useCustomDispatch();
  const inpRef = useRef(null);
  const [canSee, setCanSee] = useState(false);

  const inputR = useSelector(inputSelector);

  useChangeFocus({ inpRef: inpRef, inputR: inputR });

  return {
    inputR,
    inpRef,
    canSee,
    setCanSee,
    onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {
      inputR.focus && inputR._id === _id && inputR._idParent === _idParent
        ? void 0
        : styleController({ target: e, command: 'add', style: { background: '#1e1e1e' } });
    },

    onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
      if (inputR._id !== _id || inputR._idParent !== _idParent) {
        styleController({ target: e, command: 'remove' });
      }
    },

    onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
      dispatch(setFocus({ focus: true, _id: _id, _idParent: _idParent }));
      styleController({
        target: e,
        command: 'add',
        style: { background: '#c6b63f', color: '#000' },
      });
    },
  };
};
