/* Vendor types */
import {ChangeEvent} from 'react'

/* Types */
export interface Props {
  className?: string,
  type?: string,
  value?: string | number,
  disabled?: boolean,
  placeholder?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
}
