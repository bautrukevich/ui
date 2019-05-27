/* Vendor types */

/* Types */
import {ChangeEvent} from 'react'

export interface Props {
  className?: string,
  items: Array<OptionType>
  value?: string | number,
  multiple?: boolean,
  disabled?: boolean,
  placeholder?: string,
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void,
}

export type OptionType = {
  value: string | number,
  title: string,
  disabled?: boolean
}
