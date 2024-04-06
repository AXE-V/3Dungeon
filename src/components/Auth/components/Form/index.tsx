import { Link, useLocation, useNavigate } from "react-router-dom";
import { Field_1 } from "../../../Common/Fields/1";
import { Styles } from "./style";
import { SignConfirm } from "../SignConfirm";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormInputs } from "../../../../interfaces/FormInputs";
import { getFieldsOptions } from "./options";
import { supabase } from "../../../../supabase";
import { authLogin, authRegister } from "../../../../api/authSign";
import { useDispatch, useSelector } from "react-redux";
import { UserData, userState } from "../../../../redux/slices/data/user";
import { AppDispath } from "../../../../redux/store";
import { useDropFocus } from "../../../../hooks/useDropFocus";

export const FormRegLog = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>()
  const [isSucces, setSucces] = useState<Boolean>(false)
  const location = useLocation()
  const fields = getFieldsOptions()
  const width = "22vw"
  const [loading, setLoading] = useState(false)
  const authR = useSelector(userState)
  const {dispath} = useDropFocus()
  
  const onSubmit: SubmitHandler<FormInputs> = async (params) => {
    setLoading(true)

    if (location.pathname === '/auth/register') {
      authRegister(params).then(({data, error}) => {
        if (error) {
          console.warn(error)
          return
        }
        console.log(data)
      })     
      setSucces(true)       
    } 
    else if (location.pathname === '/auth/login') {
      authLogin(params).then(({data, error}) => {
        if (error) {
          console.warn(error)
          return
        }
        console.log(data);
      })     
      setSucces(true)     
    }
    
    setLoading(false)
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

    {!loading ? <SignConfirm 
      width={width} 
      style={{marginTop: '1.5vw'}}/> : 'Loading...'}

    <Link to="#">
      <Styles.Span>forgot password</Styles.Span>
    </Link>

    {isSucces && location.pathname === '/auth/register' &&
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
