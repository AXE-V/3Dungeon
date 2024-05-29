import { Session, User } from '@supabase/supabase-js';
import { MutableRefObject, SVGProps } from 'react';
import { IState } from './IState';
import { ActionCreator } from '@reduxjs/toolkit';

export interface Basics {
  _id?: any;
  _idParent?: any;
  refference?: MutableRefObject<any>;
  sliceValue?: any;
  action?: ActionCreator<any>;
}

interface UserData {
  session?: Session | null;
  user?: User | null;
}

export interface SVGComponent extends SVGProps<SVGSVGElement>, UserData, IState {}
