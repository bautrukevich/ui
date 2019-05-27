/* Vendors */
import React from 'react'

/* Styles */
import * as Styled from './Select.styled'

/* Components */
const ArrowDown = () => (
  <Styled.SelectIcon
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={12}
    viewBox={`0 0 12 12`}>
    <path d='M9.84110855,3.20000005 L11.1699999,4.69481869 L6.66944561,8.69481869 C6.29051292,9.03160626 5.71948695,9.03160626 5.34055426,8.69481869 L0.839999974,4.69481869 L2.16889132,3.20000005 L6.00499994,6.60945441 L9.84110855,3.20000005 Z' />
  </Styled.SelectIcon>
)
/* Utils */

/* Types */
import {OptionType, Props} from './Select.types'

/* Component */
export const Select = ({className, items, value, disabled = false, placeholder}: Props) => (
  <Styled.Select>
    <Styled.SelectInput
      className={className}
      disabled={disabled}
      placeholder={placeholder}
      value={value}>
      {items.map(({value, title, disabled}: OptionType) => (
        <option
          key={value}
          value={value}
          disabled={disabled}>
          {title}
        </option>
      ))}
    </Styled.SelectInput>
    <ArrowDown />
  </Styled.Select>
)
