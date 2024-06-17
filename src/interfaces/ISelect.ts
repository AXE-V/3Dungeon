import { Basics } from './SVGComponent';

export type ISelect = Select & Basics;

export interface Select {
  filterBy:
    | 'category'
    | 'created_at'
    | 'format'
    | 'id'
    | 'license'
    | 'rating'
    | 'tags'
    | 'title'
    | 'user_id'
    | 'view_count'
    | 'zip_name';
  isFilter?: boolean;
  selectedItem?: string;
  setSelectedItem?: (val: any) => void;
  isOpen?: any;
  setIsOpen?: (val: any) => void;
  itemKey?: string;
  data?: { [val: string]: string[] };
}
