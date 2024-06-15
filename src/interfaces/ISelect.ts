import { ActionCreator } from '@reduxjs/toolkit';
import { Basics } from './SVGComponent';

export type ISelect = Select & Basics;

export interface Select {
  filterBy?: 'category' | 'format' | 'license' | 'rating' | 'date' | 'view_count';
  isFilter?: boolean;
  selectedItem?: string;
  setSelectedItem?: (val: any) => void;
  isOpen?: any;
  setIsOpen?: (val: any) => void;
  itemKey?: string;
  data?: { [val: string]: string[] };
}
