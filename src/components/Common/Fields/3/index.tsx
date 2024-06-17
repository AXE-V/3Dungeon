import { FC, SyntheticEvent, memo, useEffect, useState } from 'react';
import { useField_3 } from './Hooks/useField_3';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { Styles as S } from './style';
import { PasswordSymbol } from './components/PasswordSymbol';
import { InputEye } from './components/InpEye';
import { IInput } from '../../../../interfaces/IInput';

export const Field_3: FC<SVGComponent & IInput> = memo(
  ({ inputOptions, register, _id, _idParent, style }) => {
    const { onMouseLeave, onMouseOver, onChange, inpRef, valueInput, canSee, setCanSee } =
      useField_3(_id, _idParent);

    useEffect(() => {
      inputOptions?.editableLabel;
      inputOptions?.type !== 'password' ? setCanSee(true) : void 0;
    }, []);

    const [inpHeaderValue, setInpHeaderValue] = useState('');
    function inpHeaderLabel_onChange<E extends SyntheticEvent<EventTarget>>(e: E) {
      setInpHeaderValue((e.target as HTMLInputElement).value);
    }

    return (
      <>
        <S.InpContainer
          ref={inpRef}
          data-field
          style={{ display: 'flex', position: 'relative', ...style }}>
          <S.InpHeaderLabel
            data-focus-stroke
            onMouseOver={(e) => onMouseOver(e, e.currentTarget)}
            onMouseLeave={(e) => onMouseLeave(e, e.currentTarget)}>
            {true ? (
              <>
                <input
                  type="text"
                  onChange={inpHeaderLabel_onChange}
                  style={{ opacity: 0, top: '-100%' }}
                />
                <output style={{ height: '1vw', opacity: 0.75 }}>{inpHeaderValue}</output>
              </>
            ) : (
              <div style={{ pointerEvents: 'none' }}>{inputOptions?.label}</div>
            )}
          </S.InpHeaderLabel>

          <S.InpBorderContentLabel
            data-focus-stroke
            onMouseOver={(e) => onMouseOver(e, e.currentTarget)}
            onMouseLeave={(e) => onMouseLeave(e, e.currentTarget)}>
            {
              <S.Inp
                data-input
                type={
                  canSee
                    ? inputOptions?.type === 'password'
                      ? 'text'
                      : inputOptions?.type
                    : 'text'
                }
                value={valueInput}
                maxLength={64}
                {...register}
                onChange={onChange}
                style={{
                  width: !inputOptions?.editableLabel
                    ? inputOptions?.type !== 'password'
                      ? 'calc(100% - 6vw)'
                      : 'calc(100% - 8.5vw)'
                    : 'calc(100% - 3vw)',
                  pointerEvents: 'none',
                  opacity: canSee ? void 0 : 0,
                }}
              />
            }

            <S.SymbolContainer style={{ opacity: !canSee ? 1 : 0 }}>
              {valueInput
                .split('')
                .map((_, i) =>
                  i % 2 === 0 ? (
                    <PasswordSymbol key={i} />
                  ) : (
                    <PasswordSymbol key={i} transform="rotate(60 957.6 540.21)" />
                  ),
                )}
            </S.SymbolContainer>

            {false && (
              <S.InpItems>
                {inputOptions?.type === 'password' ? (
                  <InputEye canSee={canSee} seeFunc={() => setCanSee(!canSee)} />
                ) : (
                  void 0
                )}
                <S.InpCount>{valueInput.length}/64</S.InpCount>
              </S.InpItems>
            )}
          </S.InpBorderContentLabel>
        </S.InpContainer>
      </>
    );
  },
);
