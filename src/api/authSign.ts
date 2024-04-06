import { FormInputs } from "../interfaces/FormInputs";
import { supabase } from "../supabase";

export const authRegister = async (params: FormInputs) => {
  const {email, password, ...other} = params
  const {data, error} = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        ...other
      }
    }
  })
  return {data, error}
}

export const authLogin = async (params: FormInputs) => {
  const {email, password} = params
  const {data, error} = await supabase.auth.signInWithPassword({
    password,
    email
  })
  return {data, error}
}

export const getSession = () => {
  return localStorage.getItem('sb-guflskihwrcehwjtxlab-auth-token')
}