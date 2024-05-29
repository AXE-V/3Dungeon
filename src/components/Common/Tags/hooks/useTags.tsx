import { useEffect, useState } from 'react';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { ActionCreator } from '@reduxjs/toolkit';

type Props = {
  data: string[];
  action: ActionCreator<any>;
};
export const useTags = ({ data, action }: Props) => {
  const dispatch = useCustomDispatch();
  const [clearedField, setClearField] = useState(false);
  const [tagsArr, setTagsArr] = useState<string[]>(data ?? []);
  const [valueInput, setValueInput] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const addTag = () => {
    setTagsArr((prev) => Array.from(new Set([...prev, valueInput])));
    setClearField(true);
  };

  const removeTag = () => {
    setTagsArr((prev) => prev.filter((s) => s !== selectedTag));
    setClearField(true);
  };

  const selectTag = (t: string) => {
    setSelectedTag(t);
  };

  useEffect(() => {
    setClearField(false);
  }, [clearedField]);

  useEffect(() => {
    dispatch(action(tagsArr));
  }, [tagsArr]);

  return {
    clearedField,
    setClearField,
    tagsArr,
    setTagsArr,
    valueInput,
    setValueInput,
    selectedTag,
    setSelectedTag,
    addTag,
    removeTag,
    selectTag,
  };
};
