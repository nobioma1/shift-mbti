import React, { ChangeEvent, useState } from 'react';
import { EmailFormWrapper } from './emailForm.styled';

interface IEmailForm {
  setUserEmail(email: string): void;
}

const EmailForm = ({ setUserEmail }: IEmailForm) => {
  const [email, setEmail] = useState('');

  const onBlurHandler = () => {
    setUserEmail(email);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <EmailFormWrapper>
      <h3>Your Email</h3>
      <input
        value={email}
        placeholder="you@example.com"
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </EmailFormWrapper>
  );
};

export default EmailForm;
