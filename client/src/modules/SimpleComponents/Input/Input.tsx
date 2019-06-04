import React, { FC, ChangeEvent } from 'react';
import { Input } from './parts';

interface InputProps {
  placeholder: string,
  onChange: (event: ChangeEvent) => void;
  type: string;
}

const Input1: FC<InputProps> = (props) => (
  <Input {...props} />
);

export default Input1;
