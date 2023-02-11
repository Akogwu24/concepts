import React from 'react';
import { FormWrapper } from './FormWrapper';

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserformProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};
export const UserForm = ({ firstName, lastName, age, updateFields }: UserformProps) => {
  return (
    <FormWrapper title='User Details'>
      <label>First Name</label>
      <input required autoFocus value={firstName} onChange={(e) => updateFields({ firstName: e.target.value })} />
      <label>Last Name</label>
      <input required value={lastName} onChange={(e) => updateFields({ lastName: e.target.value })} />
      <label>Age</label>
      <input type='number' min={1} required value={age} onChange={(e) => updateFields({ age: e.target.value })} />
    </FormWrapper>
  );
};
