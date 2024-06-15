import { ActionCreator } from '@reduxjs/toolkit';
import { SyntheticEvent, useEffect, useRef } from 'react';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { styleController } from '../../../../utils/styleController';
import { ISelect } from '../../../../interfaces/ISelect';

// type Props = {
//   isFilter?: boolean;
//   _id?: any;
//   selectedItem?: any;
//   setSelectedItem?: (val: any) => void;
//   setIsOpen?: (val: any) => void;
//   action?: ActionCreator<any>;
// };
export const useSelectItemElement = ({
  _id,
  selectedItem,
  setSelectedItem,
  setIsOpen,
  action,
  isFilter,
  filterBy,
}: ISelect) => {
  const itemRef = useRef(null);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    selectedItem === _id
      ? styleController({
          target: (itemRef.current as unknown as HTMLElement).childNodes[1].childNodes,
          command: 'add',
          style: { fill: '#c6b63f' },
        })
      : styleController({
          target: (itemRef.current as unknown as HTMLElement).childNodes[1].childNodes,
          command: 'remove',
        });
  }, [selectedItem]);

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {
    selectedItem !== _id
      ? styleController({
          target: (e.currentTarget as HTMLElement).childNodes[1].childNodes,
          command: 'add',
          style: { fill: '#1e1e1e' },
        })
      : void 0;
  }

  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
    selectedItem !== _id
      ? styleController({
          target: (e.currentTarget as HTMLElement).childNodes[1].childNodes,
          command: 'remove',
        })
      : void 0;
  }

  function onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
    setSelectedItem?.(_id);
    if (isFilter) {
      // const exec = async () => {
      //   const data = await dispatch(action?.({ filterBy, filterValue: _id }));
      // };
      // exec();
      console.log('filter');
    } else {
      dispatch(action?.(_id));
    }
    styleController({
      target: (e.currentTarget as HTMLElement).childNodes[1].childNodes,
      command: 'add',
      style: { fill: '#c6b63f' },
    });
    setIsOpen?.(false);
  }

  return {
    onMouseOver,
    onMouseLeave,
    onClick,
    itemRef,
    dispatch,
  };
};
