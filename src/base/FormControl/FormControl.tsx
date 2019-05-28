/* Vendors */
import React from 'react'

/* Styles */
import * as Styled from './FormControl.styled'

/* Components */

/* Utils */

/* Types */
import {Props} from './FormControl.types'

/* Component */
export const FormControl = ({className, label, caption, children}: Props) => (
  <Styled.FormControl
    className={className}>
    <Styled.FormLabel>
      {label}
    </Styled.FormLabel>
    {children}
    <Styled.FormCaption>
      {caption}
    </Styled.FormCaption>
  </Styled.FormControl>
)
