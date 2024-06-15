import { useDispatch } from 'react-redux';
import { AppDispath } from '../redux/store';

export const useCustomDispatch = useDispatch<AppDispath>;
