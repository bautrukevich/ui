/* Vendors */
import React from 'react'

/* Styles */
import * as Styled from './Input.styled'

/* Components */

/* Utils */

/* Types */
import {Props} from './Input.types'

/* Component */
export const Input = ({className, name, value, type = 'text', disabled = false, readOnly = false, placeholder, onChange}: Props) => (
  <Styled.Input
    className={className}
    type={type}
    name={name}
    value={value}
    disabled={disabled}
    readOnly={readOnly}
    placeholder={placeholder}
    onChange={onChange} />
)
