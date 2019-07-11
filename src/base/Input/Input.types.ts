/* Vendor types */
import {ChangeEvent} from 'react'

/* Types */
export interface Props {
  className?: string;
  name: string;
  type?: 'text' | 'password' | 'number' | 'email';
  value?: string | number;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
