/* Vendor types */

/* Types */
import {ChangeEvent} from 'react'

export interface Props {
  className?: string;
  items: OptionType[];
  value?: string | number;
  multiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface OptionType {
  value: string | number;
  title: string;
  disabled?: boolean;
}
