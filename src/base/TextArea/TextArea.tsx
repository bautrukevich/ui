/* Vendors */
import React from 'react'

/* Styles */
import * as Styled from './TextArea.styled'

/* Components */

/* Utils */

/* Types */
import {Props} from './TextArea.types'

/* Component */
export const TextArea = ({className, value, disabled = false, placeholder, onChange}: Props) => (
  <Styled.TextArea
    className={className}
    disabled={disabled}
    placeholder={placeholder}
    value={value}
    onChange={onChange} />
)

