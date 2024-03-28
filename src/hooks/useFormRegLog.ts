import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispath } from "../redux/store"
import { setFocus } from "../redux/slices/visual/input"

export const useFormRegLogEvents = () => {
  const dispath = useDispatch<AppDispath>()
  useEffect(() => {
    const clickFunc = (e: any) => {
      const condition = (e: any) => {
        const ds = e.target.dataset
        return !(ds.input || ds.field || ds.focusFill || ds.focusStroke)
      }
      condition(e) ? dispath(setFocus({focus: false, _id: -1})) : void 0     
    }
    document.addEventListener('click', e => clickFunc(e))
    return () => document.removeEventListener('click', e => clickFunc(e))
  }, [])

  return {
    dispath
  }
}