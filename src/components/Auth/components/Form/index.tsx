import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Field_1 } from '../../../Common/Fields/1';
import { Styles } from './style';
import { SignConfirm } from '../SignConfirm';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInputs, getFieldsOptions } from './options';
import { useRegLog } from './hooks/useRegLog';
import { Message } from '../../../Common/Message';
import { useAuth } from '../../../../providers/authProvider';

export const FormRegLog = () => {
  const width = '22vw';
  const fields = getFieldsOptions();
  const navigate = useNavigate();
  const { session } = useAuth();
  const { handleSubmit, innerSubmit, register, errors, authError, loading, isSucces } = useRegLog();

  const onSubmit: SubmitHandler<FormInputs> = (params) => {
    innerSubmit(params);
  };

  useEffect(() => {
    if (session) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [session]);

  return (
    <div>
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, i) =>
          location.pathname === '/auth/login' && item.label === 'login' ? (
            void 0
          ) : (
            <label
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1vw',
              }}
              key={i}>
              <Field_1
                style={{ width: width }}
                {...item}
                inputOptions={{ label: item.label, placeholder: item.placeholder }}
                _id={i}
                register={{ ...register(item.label, item.registerOptions) }}
              />
              <Message
                color="#c61a1a"
                style={{
                  position: 'relative',
                  left: 0,
                  top: 0,
                  display: !errors[item.label] ? 'none' : 'block',
                }}>
                {errors[item.label]?.message}
              </Message>
            </label>
          ),
        )}

        {authError && (
          <Styles.AuthError>Authorisation Error. Incorrect email or password</Styles.AuthError>
        )}

        {!loading ? <SignConfirm style={{ marginTop: '1.5vw', width: width }} /> : 'Loading...'}

        <Link to="#">
          <Styles.Span>forgot password</Styles.Span>
        </Link>

        {isSucces && !authError && location.pathname === '/auth/register' && (
          <Message color="#c6b63f">Check your email</Message>
        )}

        {isSucces && !authError && location.pathname === '/auth/login' && (
          <Message color="#c6b63f">you authorized</Message>
        )}
      </Styles.Form>
    </div>
  );
};
