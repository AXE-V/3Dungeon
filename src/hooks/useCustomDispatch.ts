import { useDispatch } from 'react-redux';
import { AppDispath } from '../redux/store';
import { Action } from '@reduxjs/toolkit';

// type DispatchFunction = {f: Action | ((payload: any) => Action)}
// export const useCustomDispatch = () => {
//   const dispatch = useDispatch<AppDispath>();
//   return (f: DispatchFunction) => {

//     dispatch(f)
//   };
// };

type DispatchFunction = Action | ((payload: any) => Action);
export const useCustomDispatch = () => {
  const dispatch = useDispatch<AppDispath>();
  return (f: DispatchFunction) => {
    if (typeof f == 'function') {
      dispatch(f({}));
    } else {
      dispatch(f);
    }
  };
};
