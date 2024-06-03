import { FC, SyntheticEvent, memo, useEffect, useState } from 'react';
import { useField_2 } from './Hooks/useField_2';
import { Basics, SVGComponent } from '../../../../interfaces/SVGComponent';
import { Styles as S } from './style';
import { PasswordSymbol } from './components/PasswordSymbol';
import { InputEye } from './components/InpEye';
import { IInput } from '../../../../interfaces/IInput';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';

export const Field_2: FC<SVGComponent & Basics & IInput & { cleared?: boolean }> = memo(
  ({
    inputOptions,
    register,
    _id,
    _idParent,
    style,
    setStateValue,
    cleared,
    sliceValue,
    action,
  }) => {
    const { onClick, onMouseLeave, onMouseOver, canSee, setCanSee, inpRef } = useField_2(
      _id,
      _idParent,
    );
    const dispatch = useCustomDispatch();

    useEffect(() => {
      inputOptions?.type !== 'password' ? setCanSee(true) : void 0;
    }, []);

    const [valueInput, setValueInput] = useState((sliceValue as string) ?? '');
    useEffect(() => {
      setValueInput((prev) => (cleared ? '' : prev));
    }, [cleared]);

    function onChange<E extends SyntheticEvent<EventTarget>>(e: E) {
      setStateValue?.((e.target as HTMLInputElement).value);
      setValueInput((e.target as HTMLInputElement).value);
      if (action) {
        dispatch(action?.(`${(e.target as HTMLInputElement).value}`));
      }
    }

    return (
      <>
        <S.InpLabel
          ref={inpRef}
          data-field
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          style={{ display: 'flex', position: 'relative', ...style }}>
          <S.InpText data-focus-stroke style={{ pointerEvents: 'none' }}>
            {false ? (
              <input type="text" value={'dfsg'} />
            ) : (
              <div style={{ pointerEvents: 'none' }}>{inputOptions?.label}</div>
            )}
          </S.InpText>

          <S.InpBorder data-focus-stroke>
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
                  width:
                    inputOptions?.type !== 'password' ? 'calc(100% - 6vw)' : 'calc(100% - 8.5vw)',
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

            <S.InpItems>
              {inputOptions?.type === 'password' ? (
                <InputEye
                  _id={_id}
                  _idParent={_idParent}
                  canSee={canSee}
                  seeFunc={() => setCanSee(!canSee)}
                />
              ) : (
                void 0
              )}
              <S.InpCount>{valueInput.length}/64</S.InpCount>
            </S.InpItems>
          </S.InpBorder>
        </S.InpLabel>
      </>
    );
  },
);
