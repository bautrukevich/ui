/* Vendors */
import React, {ReactElement} from 'react'

/* Styles */
import * as Styled from './FormControl.styled'

/* Components */

/* Utils */

/* Types */
import {Props} from './FormControl.types'

/* Component */
export const FormControl = ({className, label, caption, children}: Props): ReactElement => (
  <Styled.FormControl
    className={className}>
    <Styled.FormLabel>
      <Styled.FormLabelText>
        {label}
      </Styled.FormLabelText>
      {children}
    </Styled.FormLabel>
    <Styled.FormCaption>
      {caption}
    </Styled.FormCaption>
  </Styled.FormControl>
)
