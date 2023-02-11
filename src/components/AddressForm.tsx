import React from 'react';
import { FormWrapper } from './FormWrapper';

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};
type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export const AddressForm = ({ street, city, state, zip, updateFields }: AddressFormProps) => {
  return (
    <FormWrapper title='Address'>
      <label>Street</label>
      <input required autoFocus value={street} onChange={(e) => updateFields({ street: e.target.value })} />
      <label>City</label>
      <input required value={city} onChange={(e) => updateFields({ city: e.target.value })} />
      <label>State</label>
      <input required value={state} onChange={(e) => updateFields({ state: e.target.value })} />
      <label>Zip</label>
      <input required value={zip} onChange={(e) => updateFields({ zip: e.target.value })} />
    </FormWrapper>
  );
};
