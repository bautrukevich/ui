/* Vendor types */

/* Types */
import {ChangeEvent} from 'react'

export interface Props {
  className?: string,
  value?: string | number,
  disabled?: boolean,
  placeholder?: string,
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void,
}
