import { MutableRefObject, useEffect } from "react";
import { StyleController } from "../interfaces/StyleController";
import { InputStorage } from "../interfaces/InputStorage";
import { styleController } from "../utils/styleController";

type Params = {
  inpRef: MutableRefObject<null>,
  inputR: InputStorage,
}

// при изменении активного _id или _idParent происходит сброс стилей всех экземпляров
export const useChangeFocus = (params: Params) => {
  const {inpRef, inputR} = params
  useEffect(() => {
    try {
      styleController({command: 'remove', target: ((inpRef.current as unknown) as HTMLInputElement).childNodes})
    } catch (error) {
      console.error('inpRef not found');
    }
  }, [inputR._id, inputR._idParent])
}