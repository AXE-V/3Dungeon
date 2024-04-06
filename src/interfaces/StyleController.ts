import { CSS } from "@stitches/react"

export interface StyleController {
  command: Command,
  target: any,
  tags?: DataTag[]
  style?: CSS,
  originalStyle?: string
}

export interface SetStyle {
  command: Command,
  target: any, 
  tag: DataTag | string, 
  style?: CSS,
  originalStyle?: string
}

export interface DataTag {
  value: string,
  style: CSS
} 

export type Command = 'add' | 'remove'
