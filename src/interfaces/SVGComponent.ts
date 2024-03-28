import {SVGProps} from 'react'

interface Basics {
  _id?: number,
  _idParent?: number,
  refference?: any
}

interface InputInter {
  label?: string | string[],
  placeholder?: string,
  register?: {}
}

export interface SVGComponent extends SVGProps<SVGSVGElement>, Basics, InputInter {}