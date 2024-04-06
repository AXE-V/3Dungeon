import { SyntheticEvent, useRef, useState } from "react";
import { AppDispath } from "../../../../../redux/store";
import { inputState, setFocus } from "../../../../../redux/slices/visual/input";
import { useDispatch, useSelector } from "react-redux";
import { useChangeFocus } from "../../../../../hooks/useChangeFocus";
import { styleController } from "../../../../../utils/styleController";

export const useField_2 = (_id: any, _idParent: any) => {
  const inpRef = useRef(null)
  const [valueInput, setValueInput] = useState('');
  const [canSee, setCanSee] = useState(false);

  const dispath = useDispatch<AppDispath>()
  const inputR = useSelector(inputState)

  useChangeFocus({inpRef: inpRef, inputR: inputR})

  return {
    inputR,
    inpRef,
    valueInput,
    canSee,
    setCanSee,
    onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) { 
      (inputR.focus && inputR._id === _id && inputR._idParent === _idParent) ? void 0 : 
      styleController({target: e, command: 'add', style: { background: '#1e1e1e'}})
    },
  
    onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
      if (inputR._id !== _id || inputR._idParent !== _idParent) {
        styleController({target: e, command: 'remove'})
      }
    },
  
    onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
      dispath(setFocus({focus: true, _id: _id, _idParent: _idParent}))
      styleController({target: e, command: 'add', style: { background: '#c6b63f', color: '#000'}})
    },
  
    onChange<E extends SyntheticEvent<EventTarget>>(e: E) {
      setValueInput((e.target as HTMLInputElement).value) 
    } 
  }
}


