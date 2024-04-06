import { SyntheticEvent, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { AppDispath } from "../redux/store"
import { setActiveSign, signState } from "../redux/slices/visual/sign"
import { styleController } from "../utils/styleController"
export const useSign = (_id: any, path: string) => {
  const location = useLocation()
  const navigate = useNavigate()
  const signRef = useRef(null)
  const dispath = useDispatch<AppDispath>()
  const signR = useSelector(signState)

  useEffect(() => {  
    signR._id !== _id ? (
      styleController({target: ((signRef.current as unknown) as HTMLInputElement)
        .childNodes[1].childNodes, 
        command: 'remove'})
    ) : void 0
  }, [signR._id])

  useEffect(() => {
    location.pathname !== path ? void 0 : (
      styleController({target: ((signRef.current as unknown) as HTMLInputElement)
        .childNodes[1].childNodes[18].childNodes, 
        command: 'add', 
        style: {fill: '#fff', opacity: .75}}),

      dispath(setActiveSign({_id: _id}))
    )
  }, [])

  return {
    signRef,
    onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
      dispath(setActiveSign({_id: _id}))
      signR._id !== _id ? (
        styleController({target: e, command: 'add', style: { fill: '#fff', opacity: .75}})
      ) : void 0         
      navigate(path)
    },

    onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
      signR._id !== _id ? styleController({target: e, command: 'remove'}) : void 0
    },
  
    onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {
      styleController({target: e, command: 'add', style: { fill: '#fff', opacity: .75}})
    }
  }
}