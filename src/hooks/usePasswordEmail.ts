import { SyntheticEvent } from "react"
import { useDropFocus } from "./useDropFocus"
import { styleController } from "../utils/styleController"

export const usePasswordEmail = (_id: any, _idParent: any) => {

  useDropFocus()

  return {
    onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {    
      styleController({target: (e.currentTarget as HTMLInputElement).childNodes[2].childNodes, 
        command: 'add', 
        style: {stroke: '#4d4d4d', fill: '#4d4d4d', opacity: 1}})
    },
  
    onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
      styleController({target: (e.currentTarget as HTMLInputElement)
        .childNodes[2].childNodes, command: 'remove'})
    }
  }
}
