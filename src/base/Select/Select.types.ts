/* Vendor types */

/* Types */
export interface Props {
  className?: string,
  items: Array<OptionType>
  value?: string | number,
  disabled?: boolean,
  placeholder?: string,
}

export type OptionType = {
  value: string | number,
  title: string,
  disabled?: boolean
}
