
import { PasswordEmail } from "./components/PasswordEmail";
import { SaveGroup } from "./components/Save";
import { TextAreaGroup } from "./components/TextArea";
import { styles } from "./style";
import { LocationGroup } from "./components/Location";
import { ContactsGroup } from "./components/Contacts";
import { AvatarGroup } from "./components/Avatar";
import { SkillsGroup } from "./components/Skills";
import { Cross } from "./components/Cross";

export const User = () => {

  interface Fields {
    label: string,
    type: string,
  }

  const fieldsData: Fields[][] = [
    [ 
      {label: 'email address', type: 'email'},
      {label: 'password', type: 'password'}
    ],
    [ 
      {label: 'old password', type: 'password'},
      {label: 'new password', type: 'password'}
    ],
  ]

  const headersData = ['email', 'password']
  
  return ( 
    <div className={styles.container()} >
      <Cross 
        style={{
          position: 'absolute', 
          top: '-3.1vw', 
          right: 0, 
          width: '3vw'}}
        />
      <div className={styles.column()}>
        <AvatarGroup width={'24.4vw'} />
        <SkillsGroup />
      </div>
      <div className={styles.column()}>
        {fieldsData.map((arr, i) => (
          <PasswordEmail 
            key={i} 
            _id={i} 
            headersData={headersData[i]} 
            label={arr as []} 
            style={{width: '39vw'}} />          
        ))}
        <LocationGroup/>
        <ContactsGroup/>
      </div>
      <div className={styles.column()}>
        <TextAreaGroup width={'31.8vw'}/>
        <SaveGroup />
      </div>
    </div>
   );
}