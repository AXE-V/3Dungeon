import { RegisterOptions } from "react-hook-form"
import { FormInputTypes, FormInputs } from "../../../../interfaces/FormInputs"

interface Fields {
  label: FormInputTypes,
  type: string,
  placeholder: string,
  registerOptions?: RegisterOptions<FormInputs, FormInputTypes> | undefined
}

export const getFieldsOptions = (): Fields[] => {
  return [
    {
      label: 'login',
      type: 'text',
      placeholder: 'scrull',
      registerOptions: {
        required: 'Login is required',
        minLength: {
          value: 2,
          message: 'Minimum 2 characters'
        }
      }
    },
    {
      label: 'email',
      type: 'email',
      placeholder: 'skrull@gmail.com',
      registerOptions: {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
          message: 'Email is not valid'
        }
      }
    },
    {
      label: 'password',
      type: 'password',
      placeholder: 'qwerty123',
      registerOptions: {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Minimum 6 characters'
        },
      }
    }
  ]
} 