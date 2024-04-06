import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import { SVGComponent } from "../../../../interfaces/SVGComponent";
import { styleController } from "../../../../utils/styleController";
import { Styles as S} from "./style";
import { supabase } from "../../../../supabase";
import { useNavigate } from "react-router-dom";
import { getSession } from "../../../../api/authSign";

export const MenuItem: FC<SVGComponent> = ({style, label, to}) => {
  const refLi = useRef(null)
  const [originalStyle, setOriginalStyle] = useState('')
  const navigate = useNavigate()
  const session = getSession()

  useEffect(() => {    
    setOriginalStyle(((refLi.current as unknown) as HTMLElement).style.cssText)
  }, [])

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {      
    styleController({command: 'add', target: e.currentTarget, style: {background: '#1e1e1e'} })
  }

  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {  
    styleController({command: 'remove', target: e.currentTarget, originalStyle: originalStyle})
  }

  function redirect<E extends SyntheticEvent<EventTarget>>(e: E) { 
    if (session && label !== 'login') {
      navigate(`${to}`) 
      console.log('1');
    } 
    else if (session && label === 'login') {
      supabase.auth.signOut()
      console.log('2');
    }
    else if (!session) {
      navigate('/auth/login')
      console.log('3');
    }
  }

  return ( 
      <S.MenuItem ref={refLi} style={{...style}}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onClick={redirect}
        data-focus-fill>
        <span style={{opacity: .75}}>
            {label === 'login' && session ? 'logout' : label}
        </span>
      </S.MenuItem>
   );
}