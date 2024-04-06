import { NavigateFunction, To } from "react-router-dom"
import { supabase } from "../supabase"
export const authRedirect = (navigate: NavigateFunction, to: To) => {        
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'INITIAL_SESSION') {
      console.log('INITIAL_SESSION')
      navigate(to)
    } else if (event === 'SIGNED_IN') {
      console.log('SIGNED_IN')
      navigate(to)
    }
  })
}