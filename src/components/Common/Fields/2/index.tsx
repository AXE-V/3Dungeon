import { FC, memo } from "react";
import { useField_2 } from "./Hooks/useField_2";
import { SVGComponent } from "../../../../interfaces/SVGComponent";
import { Styles } from "./style";
import { PasswordSymbol } from "./components/PasswordSymbol";
import { InputEye } from "./components/InpEye";

export const Field_2: FC<SVGComponent> = memo(({type = 'text', label = 'label', _id, _idParent, style, register}) => {
  const {
    onChange, 
    onClick, 
    onMouseLeave, 
    onMouseOver, 
    inpRef, 
    valueInput, 
    canSee, 
    setCanSee 
  } = useField_2(_id, _idParent)

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
          type={type ?? 'text'} 
          value={valueInput} 
          maxLength={64} 
          {...register}
          onChange={onChange} 
          style={{
              width: type === 'text' ? '66%' : '74%', 
              pointerEvents: 'none', 
              opacity: !canSee && type === 'text' ? 0 : void 0
            }}
          />}

        {(type === 'text') ? (
            <>
            <Styles.SymbolContainer style={{opacity: !canSee ? 1 : 0 }}>

            {valueInput.split('').map((_, i) => (i % 2 === 0) ? 
              <PasswordSymbol key={i}/> : 
              <PasswordSymbol key={i} transform="rotate(60 957.6 540.21)"/>)}

          </Styles.SymbolContainer>
          <Styles.Overlapper/>
          </>
        ) : void 0}

        <Styles.InpItems>
          {type === 'text' ? 
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
})