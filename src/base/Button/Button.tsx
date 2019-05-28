/* Vendors */
import React from 'react'

/* Styles */
import * as Styled from './Button.styled'

/* Components */

/* Utils */

/* Types */
import {ButtonColorEnum, ButtonSizeEnum, Props} from './Button.types'

/* Component */
export const Button = (
  {
    className,
    type = 'button',
    color = ButtonColorEnum.primary,
    size = ButtonSizeEnum.normal,
    disabled = false,
    onClick,
    children
  }: Props) => (
  <Styled.Button
    className={className}
    type={type}
    color={color}
    size={size}
    disabled={disabled}
    onClick={onClick}>
    {children}
  </Styled.Button>
)
