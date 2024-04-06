import { useDropFocus } from "../../../hooks/useDropFocus";
import { ModelDescription } from "../../Common/Description";
import { Field_2 } from "../../Common/Fields/2";
import { Scrollbar } from "../../Common/Scroll";
import { StyledElements as SE } from "../../Common/styledElements";
import { ModelViewer } from "../components/ModelViewer";
import { Styles } from "../style";

export const CreatePostModel = () => {
  useDropFocus()
  return ( 
    <>
      <Scrollbar
        buttons={true} 
        className={Styles.window()}
        scrollStyle={{height: '96.5%', top: 48}}
        >
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
              <SE.Button type="submit">save</SE.Button>
            </form>
          </div>
        </div>  
      </Scrollbar>
    </> 
   );
}