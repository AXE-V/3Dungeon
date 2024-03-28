import { Link, useLocation, useNavigate } from "react-router-dom";
import { Field_1 } from "../Field";
import { Styles } from "./style";
import { SignConfirm } from "../SignConfirm";
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormInputs } from "../../../../interfaces/FormInputs";
import { loginUser, registerUser } from "../../../../redux/slices/data/auth";
import { useFormRegLogEvents } from "../../../../hooks/useFormRegLog";
import { getFormFieldsOptions } from "./fieldsOptions";

export const FormRegLog = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>()
  const [isSubmitted, setSubmit] = useState<Boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()
  const width = "22vw"
  const fields = getFormFieldsOptions()
  const {dispath} = useFormRegLogEvents()

  const onSubmit: SubmitHandler<FormInputs> = async (params) => {
    if (location.pathname === '/auth/register') {
      const {payload} = await dispath(registerUser(params))
      // authRedirect(navigate, '/')
      console.group()
      console.log('register');
      console.log(payload); 
      console.groupEnd()
    } else if (location.pathname === '/auth/login') {
      const {payload} = await dispath(loginUser(params))
      // authRedirect(navigate, '/')    
      console.group()
      console.log('login');
      console.log(payload); 
      console.groupEnd()
    }
    setSubmit(true)
  }

  return ( 
   <div>
     <Styles.Form 
      onSubmit={handleSubmit(onSubmit)}>
    {fields.map((item, i) => (
      location.pathname === '/auth/login' && 
      item.label === 'login' ? 
      void 0 : (
        <label style={{position: 'relative'}}>
          <Field_1 
            style={{width: width}} 
            {...item} 
            key={i} 
            _id={i} 
            register={{...register(item.label, item.registerOptions)}}
            />      
          <Styles.BevelSvg 
            style={{display: !errors[item.label] ? 'none' : 'block'}} 
            viewBox="0 0 400 80">

            <polygon points="10 2, 390 2, 398 10, 398 70, 390 78, 10 78, 2 70, 2 10" />
            <text 
              x={200} 
              y={46} 
              fontSize={'1.37vw'} 
              textAnchor="middle" 
              fill="#c61a1a"
              >
                {errors[item.label]?.message}
            </text>
          </Styles.BevelSvg>
        </label>
      )
    ))}    

    <SignConfirm 
      width={width} 
      style={{marginTop: '1.5vw'}}/>

    <Link to="#">
      <Styles.Span>forgot password</Styles.Span>
    </Link>

    {isSubmitted && 
      <Styles.BevelSvg 
        style={{left: '63vw', top: '-12vw'}} 
        viewBox="0 0 400 80">
      <polygon 
        style={{stroke: "#c6b63f"}} 
        points="10 2, 390 2, 398 10, 398 70, 390 78, 10 78, 2 70, 2 10" />
      <text 
        x={200} 
        y={46} 
        fontSize={'1.37vw'} 
        textAnchor="middle" 
        fill="#c6b63f"
        >
          Check your email
      </text>
    </Styles.BevelSvg> }

  </Styles.Form>
   </div>
   );
}
