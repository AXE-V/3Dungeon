import { SyntheticEvent, useEffect, useState } from "react";
import { styleController } from "../../../../utils/styleController";

export const useSelectElement = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
   const handlerIsOpen = (val: boolean) => setIsOpen(val);
  useEffect(() => {
    const clickFunc = (e: any) => {
      !e.target.dataset.focusFill ? handlerIsOpen(false) : void 0;
    };

    document.addEventListener('click', (e: any) => clickFunc(e));
    return document.removeEventListener('click', (e: any) => clickFunc(e));
  }, []);

  return {
    isOpen,
    setIsOpen,
    onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {
      styleController({ target: e, command: 'add', style: { fill: '#1e1e1e' } });
    },
  
    onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
      styleController({ target: e, command: 'remove' });
    },
  
    onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
      handlerIsOpen(!isOpen);
    }
  }
}