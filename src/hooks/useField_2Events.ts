import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { AppDispath } from "../redux/store";
import { inputState, setFocus } from "../redux/slices/visual/input";
import { useDispatch, useSelector } from "react-redux";
import { styleController } from "../assets/decor/interactive";

export const useField_2Events = (_id: any, _idParent: any) => {
  const inpRef = useRef(null)
  const [valueInput, setValueInput] = useState('');
  const [canSee, setCanSee] = useState(false);

  const dispath = useDispatch<AppDispath>()
  const inputR = useSelector(inputState)

  useEffect(() => {
    styleController(null, {command: 'remove', currentTgNodes: ((inpRef.current as unknown) as HTMLInputElement).childNodes})
  }, [inputR._id, inputR._idParent])

  return {
    inputR,
    inpRef,
    valueInput,
    canSee,
    setCanSee,
    onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) { 
      (inputR.focus && inputR._id === _id && inputR._idParent === _idParent) ? void 0 : 
      styleController(e, {command: 'add', style: { background: '#1e1e1e'}})
    },
  
    onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
      if (inputR._id !== _id || inputR._idParent !== _idParent) {
        styleController(e, {command: 'remove'})
      }
    },
  
    onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
      dispath(setFocus({focus: true, _id: _id, _idParent: _idParent}))
      styleController(e, {command: 'add', style: { background: '#c6b63f', color: '#000'}})
    },
  
    onChange<E extends SyntheticEvent<EventTarget>>(e: E) {
      setValueInput((e.target as HTMLInputElement).value) 
    } 
  }
}