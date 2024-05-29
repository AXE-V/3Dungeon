import { PasswordEmail } from './components/PasswordEmail';
import { SaveGroup } from './components/Save';
import { TextAreaGroup } from './components/TextArea';
import { styles } from './style';
import { LocationGroup } from './components/Location';
import { ContactsGroup } from './components/Contacts';
import { AvatarGroup } from './components/Avatar';
import { SkillsGroup } from './components/Skills';
import { Cross } from '../Common/Cross';
import { useForm } from 'react-hook-form';
import { Field_2 } from '../Common/Fields/2';
import { FC, useEffect, useState } from 'react';
import { SVGComponent } from '../../interfaces/SVGComponent';
import { useNavigate } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import { InputTypes } from '../../interfaces/IInput';

export const User: FC<SVGComponent> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  interface Fields {
    label: string;
    name: string;
    type: InputTypes;
  }

  const emailGroup: Fields[] = [
    { label: 'email address', name: 'email_address', type: 'email' },
    { label: 'password', name: 'password', type: 'text' },
  ];
  const passwordGroup: Fields[] = [
    { label: 'old password', name: 'old_password', type: 'password' },
    { label: 'new password', name: 'new_password', type: 'password' },
  ];

  const onSubmit = (params: any) => {
    console.log(params);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container()}>
      <div className={styles.column()}>
        <AvatarGroup style={{ width: '24.4vw' }} />
        <SkillsGroup />
      </div>

      <div className={styles.column()}>
        <PasswordEmail style={{ width: '39vw' }} label="email">
          {emailGroup.map((elem: Fields, i: number) => (
            <Field_2
              key={i}
              _id={i}
              _idParent={0}
              style={{ width: '90%' }}
              inputOptions={{
                label: elem.label,
                type: elem.type,
                placeholder: elem.name,
                editableLabel: true,
              }}
              register={{ ...register(elem.name) }}
            />
          ))}
        </PasswordEmail>
        <PasswordEmail style={{ width: '39vw' }} label="password">
          {passwordGroup.map((elem: any, i: number) => (
            <Field_2
              {...elem}
              key={i}
              _id={i}
              _idParent={1}
              style={{ width: '90%' }}
              inputOptions={{ label: elem.label, type: elem.type, placeholder: elem.name }}
              register={{ ...register(elem.name) }}
            />
          ))}
        </PasswordEmail>
        <LocationGroup />
        <ContactsGroup />
      </div>

      <div className={styles.column()}>
        <TextAreaGroup width={'31.8vw'} />
        <SaveGroup />
      </div>
    </form>
  );
};
