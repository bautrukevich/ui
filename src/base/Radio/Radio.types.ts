/* Vendor types */

/* Types */
import {ChangeEvent} from 'react'

export type RadioType = {
  value: string | number,
  title: string,
  disabled?: boolean,
}

export interface Props {
  className?: string,
  name: string,
  items: Array<RadioType>
  value?: string | number,
  isVertical?: boolean,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
}
