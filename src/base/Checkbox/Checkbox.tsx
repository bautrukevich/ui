/* Vendors */
import React, {ReactElement} from 'react'

/* Styles */
import * as Styled from './Checkbox.styled'

/* Components */

/* Utils */

/* Types */
import {Props} from './Checkbox.types'

/* Component */
export const Checkbox = ({className, name, value, children, onChange, checked = false, disabled = false}: Props): ReactElement => (
  <Styled.CheckboxLabel className={className}>
    <Styled.CheckboxInput
      type='checkbox'
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
      hidden />
    <Styled.CheckboxToggle />
    {children}
  </Styled.CheckboxLabel>
)
