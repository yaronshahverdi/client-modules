import React from 'react';
import { UseFormMethods } from 'react-hook-form';

import { Input } from '../../../Form';
import { BaseFormInputProps, GridFormFileField } from '../../types';

export interface GridFormFileInputProps extends BaseFormInputProps {
  field: Omit<GridFormFileField, 'label'>;
  register: UseFormMethods['register'];
}

export const GridFormFileInput: React.FC<GridFormFileInputProps> = ({
  className,
  disabled,
  error,
  field,
  register,
  required,
}) => {
  return (
    <Input
      className={className}
      disabled={disabled}
      error={error}
      htmlFor={field.name}
      name={field.name}
      onChange={(event) => field.onUpdate?.(event.target.files!)}
      ref={register(field.validation)}
      type="file"
      id={field.id}
      aria-invalid={error}
      aria-required={required}
    />
  );
};
