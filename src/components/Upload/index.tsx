import { SyntheticEvent } from "react";
import { Logo } from "../Header/components/Logo";
import { BgUpload } from "./components/Bg";
import { BrowseBtn } from "./components/BrowseBtn";
import { ExtiBtn } from "./components/ExitBtn";
import { Styles } from "./components/style";

export const Upload = () => {

  function onChange<E extends SyntheticEvent<EventTarget>>(e: E) {
    const file = (e.target as HTMLInputElement).files![0]
    console.log(file); 

    const reader = new FileReader()
    console.log(reader);
    reader.readAsDataURL(file)
  }

  return ( 
    <>
      <label onChange={onChange} style={{cursor: 'pointer'}}>
        <input  type="file" style={{display: 'none'}} />
        <Styles.HeaderText>upload file</Styles.HeaderText>
      </label>
      <Logo style={{position: 'absolute', left: '50%', transform: 'translate(-50%, 0)', 
        top: '3vw', width: '11vw', fill: '#111111'}}/>
      <ExtiBtn/>
      <Styles.H1>place your model</Styles.H1>
      <Styles.Info1>
        <Styles.Info2>
          <div style={{opacity: .75}}>Drag and drop or</div>
          <BrowseBtn style={{width: '7vw', marginTop: '.4vw'}}/>
        </Styles.Info2>
        <div style={{opacity: .5, marginTop: '3vw'}}>
          FBX, OBJ, DAE, BLEND and STL supported
          </div>
      </Styles.Info1>
      <BgUpload/>      
    </>
   );
}