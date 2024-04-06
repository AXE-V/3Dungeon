import { Session } from '@supabase/supabase-js'
import {SVGProps} from 'react'
import { StateType } from './StateType'

interface Basics {
  _id?: number,
  _idParent?: number,
  refference?: any,

  session?: Session
}

interface InputInter {
  label?: string | string[],
  placeholder?: string,
  register?: {}
}

export interface SVGComponent extends SVGProps<SVGSVGElement>, Basics, InputInter, StateType {}