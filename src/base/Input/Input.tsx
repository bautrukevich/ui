/* Vendors */
import React from 'react'

/* Styles */
import * as Styled from './Input.styled'

/* Components */

/* Utils */

/* Types */
export interface Props {
  className?: string,
  type?: string,
  disabled?: boolean,
  placeholder?: string,
}

/* Component */
export const Input = ({className, type = 'text', disabled = false, placeholder}: Props) => (
  <Styled.Input
    className={className}
    type={type}
    disabled={disabled}
    placeholder={placeholder} />
)
