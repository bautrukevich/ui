/* Vendor types */

/* Types */
import {ChangeEvent} from 'react'

export interface RadioType {
  value: string | number;
  title: string;
  disabled?: boolean;
}

export interface Props {
  className?: string;
  name: string;
  items: RadioType[];
  value?: string | number;
  isVertical?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
