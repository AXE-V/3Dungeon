import { FC } from "react";

import { SVGComponent } from "../../../../../../interfaces/SVGComponent";
import { Styles } from "../../style";
import { InputEye } from "../InpEye";
import { PasswordSymbol } from "../PasswordSymbol";
import { useField_2Events } from "../../../../../../hooks/useField_2Events";

export const Field_2: FC<SVGComponent> = ({type = 'text', label = 'label', _id, _idParent, style}) => {
  const {
    onChange, 
    onClick, 
    onMouseLeave, 
    onMouseOver, 
    inputR, 
    inpRef, 
    valueInput, 
    canSee, 
    setCanSee 
  } = useField_2Events(_id, _idParent)

  return ( 
   <>
    <Styles.InpLabel
      ref={inpRef} 
      data-field 
      onClick={onClick} 
      onMouseOver={onMouseOver} 
      onMouseLeave={onMouseLeave} 
      style={{display: 'flex', position: 'relative', width: '100%', ...style}}>   

      <Styles.InpText 
        data-focus-stroke 
        style={{pointerEvents: 'none'}}>

        <div style={{pointerEvents: 'none'}}>
          {label}
        </div>
      </Styles.InpText>

      <Styles.InpBorder data-focus-stroke>

        {<Styles.Inp 
          data-input 
          onChange={onChange} 
          value={valueInput} 
          maxLength={64} 
          required 
          style={{
              width: type === 'password' ? '66%' : '74%', 
              pointerEvents: 'none', 
              opacity: !canSee && type === 'password' ? 0 : void 0
            }}
          />}


        {(type === 'password') ? (
            <>
            <Styles.SymbolContainer style={{opacity: !canSee ? 1 : 0}}>

            {(inputR.focus && 
              inputR._id === _id && 
              inputR._idParent === _idParent) && 
            <div 
              className={Styles.caret()} 
              style={{left: `${valueInput.length !== 0 ? 
                (Number(((inpRef.current as unknown) as HTMLInputElement).selectionEnd) * 1.2)+.5 : 
                0.5}vw`}}
              />}

            {valueInput.split('').map((_, i) => (i % 2 === 0) ? 
              <PasswordSymbol/> : 
              <PasswordSymbol transform="rotate(60 957.6 540.21)"/>)}

          </Styles.SymbolContainer>
          <Styles.Overlapper/>
          </>
        ) : void 0}

        <Styles.InpItems>
          {type === 'password' ? 
            <InputEye 
              _id={_id} 
              _idParent={_idParent} 
              canSee={canSee} 
              seeFunc={() => setCanSee(!canSee)}/> :
              void 0}
          <Styles.InpCount>{valueInput.length}/64</Styles.InpCount> 
        </Styles.InpItems>

      </Styles.InpBorder>   
    </Styles.InpLabel>
   </>
   );
}