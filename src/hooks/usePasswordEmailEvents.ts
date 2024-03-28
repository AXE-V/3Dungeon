import { SyntheticEvent, useEffect } from "react"
import { useDispatch } from "react-redux"
import { setFocus } from "../redux/slices/visual/input"
import { styleController } from "../assets/decor/interactive"

export const usePasswordEmailEvents = (_id: any, _idParent: any) => {
  const dispath = useDispatch()
  // сброс фокуса
  useEffect(() => {
    const clickFunc = (e: any) => {   
      const ds = e.target.dataset 
      !(ds.focusFill || ds.focusStroke || ds.input) ? (
        dispath(setFocus({focus: false, _id: -1, _idParent: -1}))
      ) : void 0  
    }
    document.addEventListener('click', e => clickFunc(e))
    return () => document.removeEventListener('click', e => clickFunc(e))
  }, [])

  return {
    onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {    
      styleController(e, {currentTgNodes: (e.currentTarget as HTMLInputElement).childNodes[2].childNodes, 
        command: 'add', 
        style: {stroke: '#4d4d4d', fill: '#4d4d4d', opacity: 1}})
    },
  
    onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
      styleController(e, {currentTgNodes: (e.currentTarget as HTMLInputElement)
        .childNodes[2].childNodes, command: 'remove'})
    }
  }
}

export const useField_2DropFocus = () => {
  const dispath = useDispatch()
  useEffect(() => {
    const clickFunc = (e: any) => {   
      const ds = e.target.dataset 
      !(ds.focusFill || ds.focusStroke || ds.input) ? (
        dispath(setFocus({focus: false, _id: -1, _idParent: -1}))
      ) : void 0  
    }
    document.addEventListener('click', e => clickFunc(e))
    return () => document.removeEventListener('click', e => clickFunc(e))
  }, [])
}