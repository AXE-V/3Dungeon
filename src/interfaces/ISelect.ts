import { ActionCreator } from '@reduxjs/toolkit';
import { Basics } from './SVGComponent';

export type ISelect = Select & Basics;

export interface Select {
  selectedItem?: string;
  setSelectedItem?: (val: any) => void;
  isOpen?: any;
  setIsOpen?: (val: any) => void;
  itemKey?: string;
  data?: { [val: string]: string[] };
}
