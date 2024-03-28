import { useField_2DropFocus } from "../../../../hooks/usePasswordEmailEvents";
import { Field_2 } from "../../../User/components/PasswordEmail/components/Field";
import { ModelDescription } from "../Common/components/Description";
import { ModelViewer } from "../Common/components/Viewer";
import { ModelWindow } from "../Common/components/Window";
import { Styles } from "../style";

export const CreatePostModel = () => {
  useField_2DropFocus()
  return ( 
    <>
      <ModelWindow>
        <div className={Styles.mainGrid()}>
          <Styles.Column1>
            <ModelViewer/>
            <Field_2 _id={0} style={{width: '100%', position: 'relative', left: '50%'}}/>
            <ModelDescription/>
          </Styles.Column1>
          <div style={{padding: '2vw'}}>
            <form style={{display: 'flex', flexDirection: 'column', gap: '1vw'}}>
              <p style={{padding: '3vw 0 1vw 0', fontSize: '1.5vw'}}>Tariff [usd]</p>
              <Field_2 _id={1}/>
              <Styles.Button type="submit">save</Styles.Button>
            </form>
          </div>
        </div>
      </ModelWindow>
    </> 
   );
}