/* Vendors */
import React, {ReactElement} from 'react'

/* Styles */
import * as Styled from './Form.styled'

/* Components */

/* Utils */

/* Types */
import {Props} from './Form.types'

/* Component */
export const Form = ({className, children}: Props): ReactElement => (
  <Styled.Form
    className={className}>{children}</Styled.Form>
)
