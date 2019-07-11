/* Vendors */
import React, {ReactElement} from 'react'

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
    visual,
    disabled = false,
    onClick,
    children
  }: Props): ReactElement => (
  <Styled.Button
    className={className}
    type={type}
    color={color}
    size={size}
    visual={visual}
    disabled={disabled}
    onClick={onClick}>
    {children}
  </Styled.Button>
)
