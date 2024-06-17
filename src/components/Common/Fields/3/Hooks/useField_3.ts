import { SyntheticEvent, useRef, useState } from 'react';
import { inputSelector } from '../../../../../redux/slices/visual/input';
import { useSelector } from 'react-redux';
import { useChangeFocus } from '../../../../../hooks/useChangeFocus';
import { styleController } from '../../../../../utils/styleController';
import { useCustomDispatch } from '../../../../../hooks/useCustomDispatch';

export const useField_3 = (_id: any, _idParent: any) => {
  const inpRef = useRef(null);
  const dispatch = useCustomDispatch();
  const [valueInput, setValueInput] = useState('');
  const [canSee, setCanSee] = useState(false);

  const inputR = useSelector(inputSelector);

  useChangeFocus({ inpRef: inpRef, inputR: inputR });

  return {
    dispatch,
    inputR,
    inpRef,
    valueInput,
    setValueInput,
    canSee,
    setCanSee,
    onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E, target?: any) {
      styleController({ target: target ?? e, command: 'add', style: { background: '#1e1e1e' } });
    },

    onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E, target?: any) {
      styleController({ target: target ?? e, command: 'remove' });
    },

    onChange<E extends SyntheticEvent<EventTarget>>(e: E) {
      setValueInput((e.target as HTMLInputElement).value);
    },
  };
};
