/* Vendors */
import React from 'react'

/* Styles */
import * as Styled from './Input.styled'

/* Components */

/* Utils */

/* Types */
import {Props} from './Input.types'

/* Component */
export const Input = ({className, type = 'text', disabled = false, placeholder}: Props) => (
  <Styled.Input
    className={className}
    type={type}
    disabled={disabled}
    placeholder={placeholder} />
)
