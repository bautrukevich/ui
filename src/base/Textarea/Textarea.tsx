/* Vendors */
import React from 'react'

/* Styles */
import * as Styled from './Textarea.styled'

/* Components */

/* Utils */

/* Types */
import {Props} from './Textarea.types'

/* Component */
export const Textarea = ({className, value, disabled = false, placeholder}: Props) => (
  <Styled.Textarea
    className={className}
    disabled={disabled}
    placeholder={placeholder}
    value={value} />
)

