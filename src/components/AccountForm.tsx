import React from 'react';
import { FormWrapper } from './FormWrapper';

type AccountFormData = {
  email: string;
  password: string;
};

type IAccountFormProps = AccountFormData & {
  updateFields: (fields: Partial<AccountFormData>) => void;
};

export function AccountForm({ email, password, updateFields }: IAccountFormProps) {
  return (
    <FormWrapper title='Account Creation'>
      <label>Email</label>
      <input required autoFocus value={email} onChange={(e) => updateFields({ email: e.target.value })} />
      <label>Password</label>
      <input required type='password' value={password} onChange={(e) => updateFields({ password: e.target.value })} />
    </FormWrapper>
  );
}
