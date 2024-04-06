import { SyntheticEvent, useEffect, useState } from "react";
import { Logo } from "../Common/Logo";
import { BgUpload } from "./components/Bg";
import { BrowseBtn } from "./components/BrowseBtn";
import { ExtiBtn } from "./components/ExitBtn";
import { Styles } from "./components/style";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../hooks/useSession";

export const Upload = () => {


  // function onChange<E extends SyntheticEvent<EventTarget>>(e: E) {
  //   const file = (e.target as HTMLInputElement).files![0]
  //   console.log(file); 

  //   const reader = new FileReader()
  //   console.log(reader);
  //   reader.readAsDataURL(file)
  // }

  

  return ( 
   <>
    <div>
      <Styles.HeaderText>uploading file</Styles.HeaderText>
      <Logo style={{position: 'absolute', left: '50%', transform: 'translate(-50%, 0)', 
        top: '3vw', width: '11vw', fill: '#111111'}}/>
      <ExtiBtn/>
      <Styles.H1>place your model</Styles.H1>
      <Styles.Info1>
        <Styles.Info2>
          <p style={{opacity: .75}}>Drag and drop or</p>
          <BrowseBtn style={{width: '7vw', marginTop: '.4vw', position: 'relative', zIndex: 0}}/>
        </Styles.Info2>
        <p style={{opacity: .5, marginTop: '3vw'}}>
          FBX, OBJ, DAE, BLEND and STL supported
          </p>
      </Styles.Info1>
      <BgUpload/>      
    </div>
   </>
   );
}