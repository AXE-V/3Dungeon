import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputState, setFocus } from "../redux/slices/visual/input";
import { AppDispath } from "../redux/store";
import { styleController } from "../assets/decor/interactive";

export const useField_1Events = (_id: any = 0) => {
  const inpRef = useRef(null)
  const [valueInput, setValueInput] = useState('');

  const dispath = useDispatch<AppDispath>()
  const inputR = useSelector(inputState)

  useEffect(() => {
     try {
      inputR._id !== _id ? (
        styleController(null, {command: 'remove', currentTgNodes: ((inpRef.current as unknown) as HTMLInputElement).childNodes})
      ) : void 0
     } catch (error) {
      console.log('inpRef not found');
     }
  }, [inputR._id])

  return {
    inpRef,
    valueInput,
    onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) { 
      (inputR.focus && inputR._id === _id) ? void 0 : 
      styleController(e, {command: 'add', style: {fill: '#fff', stroke: '#fff'}})
    },

    onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
      inputR._id === _id ? void 0 : 
      styleController(e, {command: 'remove'})
    },
  
    onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
      dispath(setFocus({focus: true, _id: _id}))
      styleController(e, {command: 'add', style: { background: '#fff', stroke: '#fff'}});    
    },
    
    onChange<E extends SyntheticEvent<EventTarget>>(e: E) {
      setValueInput((e.target as HTMLInputElement).value) 
    }
  }
}