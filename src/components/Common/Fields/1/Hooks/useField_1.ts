import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputState, setFocus } from "../../../../../redux/slices/visual/input";
import { AppDispath } from "../../../../../redux/store";
import { styleController } from "../../../../../utils/styleController";

export const useField_1 = (_id: any = 0) => {
  const inpRef = useRef(null)
  const [valueInput, setValueInput] = useState('');

  const dispath = useDispatch<AppDispath>()
  const inputR = useSelector(inputState)

  // при изменении активного _id происходит сброс стилей всех экземпляров
  useEffect(() => {
     try {
      inputR._id !== _id ? (
        styleController({command: 'remove', target: ((inpRef.current as unknown) as HTMLInputElement).childNodes})
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
      styleController({command: 'add', target: e, style: {fill: '#fff', stroke: '#fff'}})
    },

    onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
      inputR._id === _id ? void 0 : 
      styleController({command: 'remove', target: e})
    },
  
    onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
      dispath(setFocus({focus: true, _id: _id})) 
      styleController({command: 'add', target: e, style: { background: '#fff', stroke: '#fff'}});    
    },
    
    onChange<E extends SyntheticEvent<EventTarget>>(e: E) {
      setValueInput((e.target as HTMLInputElement).value) 
    }
  }
}