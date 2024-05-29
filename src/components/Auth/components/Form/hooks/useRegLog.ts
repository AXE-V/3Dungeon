import { useForm } from 'react-hook-form';
import { FormInputs } from '../options';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { authLogin, authRegister } from '../../../../../api/authSign';
import { AuthError, AuthResponse } from '@supabase/supabase-js';

type SubmitPath = {
  path: string;
  fn: CallableFunction;
};

const initialPathes: SubmitPath[] = [
  { path: '/auth/register', fn: authRegister },
  { path: '/auth/login', fn: authLogin },
];

export const useRegLog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [isSucces, setSucces] = useState<Boolean>(false);
  const [authError, setAuthError] = useState<AuthError | null>(null);

  const innerSubmit = (params: FormInputs, pathes: SubmitPath[] = initialPathes) => {
    setLoading(true);
    pathes.forEach((p) => {
      location.pathname === p.path
        ? p.fn(params).then((d: AuthResponse) => {
            const { data, error } = d;
            if (error) {
              setAuthError?.(error);
              console.error(error);
              return;
            }
            setAuthError?.(null);
            setSucces?.(true);
            console.log(data);
          })
        : void 0;
    });
    setLoading(false);
  };

  return {
    loading,
    setLoading,
    isSucces,
    setSucces,
    authError,
    setAuthError,
    innerSubmit,
    errors,
    register,
    handleSubmit,
  };
};
