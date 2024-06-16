import { useState } from 'react';
import { useCustomDispatch } from '../../../hooks/useCustomDispatch';
import {
  postFilterSelector,
  setCatalogData,
  setCatalogFilteredData,
  setCatalogPath,
} from '../../../redux/slices/data/filter';
import { useCatalogPathes } from './pathes';
import { PostModel } from '../../../redux/slices/data/post';
import { useSelector } from 'react-redux';

export const pathVariantFn = () => {
  const [labelPath, setLabelPath] = useState('');
  const dispatch = useCustomDispatch();

  type PathFunction = {
    cb: () => any;
    path: string;
    pathLabel: string;
  };

  const pathFunction = async ({ cb, path, pathLabel }: PathFunction) => {
    try {
      const data = await dispatch(cb()).unwrap();
      setLabelPath(pathLabel);
      setTimeout(() => {
        dispatch(setCatalogData(data));
        dispatch(setCatalogFilteredData(data));
        dispatch(setCatalogPath(path));
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    pathFunction,
    labelPath,
    dispatch,
  };
};
