import { Basics } from './SVGComponent';

export type InputTypes =
  | 'email'
  | 'hidden'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

export type IInput = Input & Basics;

interface Input {
  focus?: boolean;
  canSee?: boolean;
  inputOptions?: {
    label?: string | string[];
    editableLabel?: boolean;
    type?: InputTypes;
    placeholder?: string;
  };
  register?: {};
}
