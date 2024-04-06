
import { PasswordEmail } from "./components/PasswordEmail";
import { SaveGroup } from "./components/Save";
import { TextAreaGroup } from "./components/TextArea";
import { styles } from "./style";
import { LocationGroup } from "./components/Location";
import { ContactsGroup } from "./components/Contacts";
import { AvatarGroup } from "./components/Avatar";
import { SkillsGroup } from "./components/Skills";
import { Cross } from "../Common/Cross";
import { useForm } from "react-hook-form";
import { Field_2 } from "../Common/Fields/2";
import { FC } from "react";
import { SVGComponent } from "../../interfaces/SVGComponent";


export const User: FC<SVGComponent> = () => {
  const {handleSubmit, register, formState: {errors}} = useForm()
  // const [loading, setLoading] = useState(false)
  const session = getSelection()

  // useEffect(() => {
  //   // let ignore = false
  //   // const getDataUser = async () => {
  //   //   setLoading(true)
  //   //   const {user} = session

  //   //   const {data: publicUserData, error: publicUserError} = await supabase
  //   //   .from('users')
  //   //   .select('label')
  //   //   .eq('id', user.id)

  //   //   const {data: privateUserData, error: privateUserError} = await supabase
  //   //   .from('private_users_data')
  //   //   .select('email, password')
  //   //   .eq('id', user.id)

  //   //   if (!ignore) {
  //   //     if (privateUserError || publicUserError) {
  //   //       return
  //   //     } else if (publicUserData && privateUserData) {
  //   //       // сохранение данных в redux/localstorage или еще куда-нибудь (после регистрации/авторизации)!
  //   //     }
  //   //   }

  //   //   setLoading(false)
  //   // }

  //   // getDataUser()

  //   // return () => {
  //   //   ignore = true
  //   // }

  //   console.log(session);
    
  // }, [session])

  interface Fields {
    label: string,
    name: string,
    type: string,
  }
  
  const emailGroup: Fields[] = [ 
    {label: 'email address', name: 'email_address', type: 'email'},
    {label: 'password', name: 'password', type: 'text'}
  ]
  const passwordGroup: Fields[] = [ 
    {label: 'old password', name: 'old_password', type: 'text'},
    {label: 'new password', name: 'new_password', type: 'text'}
  ]

  const onSubmit = (params: any) => {
    console.log(params);    
  }

  return ( 
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container()} >
      <Cross 
        style={{
          position: 'absolute', 
          top: '-3.1vw', 
          right: 0, 
          width: '3vw'}}
        />

      <div className={styles.column()}>
        <AvatarGroup style={{width: '24.4vw'}} register={{...register('avatar_url')}}/>
        <SkillsGroup />
      </div>

      <div className={styles.column()}>
        <PasswordEmail style={{width: '39vw'}}>
        {emailGroup.map((elem: any, i: number) => (
          <Field_2 
            {...elem} 
            key={i} 
            _id={i} 
            _idParent={0} 
            style={{width: '90%'}} 
            register={{...register(elem.name)}}
            />
        ))} 
        </PasswordEmail>
        <PasswordEmail style={{width: '39vw'}}>
        {passwordGroup.map((elem: any, i: number) => (
          <Field_2 
            {...elem} 
            key={i} 
            _id={i} 
            _idParent={1} 
            style={{width: '90%'}} 
            register={{...register(elem.name)}}
            />
        ))} 
        </PasswordEmail>
        <LocationGroup/>
        <ContactsGroup/>
      </div>

      <div className={styles.column()}>
        <TextAreaGroup width={'31.8vw'}/>
        <SaveGroup />
      </div>

      <button type="submit">Save</button>
    </form>
   );
}