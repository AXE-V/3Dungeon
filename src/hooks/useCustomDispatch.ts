import { useDispatch } from 'react-redux';
import { AppDispath } from '../redux/store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';

// export const useCustomDispatch = () => {
//   const dispatch = useDispatch<AppDispath>();
//   return (f: Action) => {
//     dispatch(f);
//   };
// };

export const useCustomDispatch = useDispatch<AppDispath>;
