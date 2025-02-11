import React from 'react';
import { UseFormMethods } from 'react-hook-form';

import { Select } from '../../../Form';
import { BaseFormInputProps, GridFormSelectField } from '../../types';

export interface GridFormSelectInputProps extends BaseFormInputProps {
  field: Omit<GridFormSelectField, 'label'>;
  register: UseFormMethods['register'];
}

export const GridFormSelectInput: React.FC<GridFormSelectInputProps> = ({
  className,
  disabled,
  error,
  field,
  register,
  required,
}) => {
  return (
    <Select
      defaultValue={field.defaultValue}
      disabled={disabled}
      className={className}
      error={error}
      htmlFor={field.name}
      name={field.name}
      onChange={(event) => field.onUpdate?.(event.target.value)}
      ref={register(field.validation)}
      options={field.options}
      id={field.id}
      aria-invalid={error}
      aria-required={required}
    />
  );
};
