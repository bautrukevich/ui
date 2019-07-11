/* Vendor types */

/* Types */
import {ChangeEvent} from 'react'

export interface Props {
  className?: string;
  name: string;
  value: string | number | string[];
  children: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
}
