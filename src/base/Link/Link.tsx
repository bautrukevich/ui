/* Vendors */
import React, {ReactElement} from 'react'

/* Styles */
import * as Styled from './Link.styled'

/* Components */

/* Utils */

/* Types */
import {Props} from './Link.types'

/* Component */
export const Link = ({className, to, children}: Props): ReactElement => {
  return (
    <Styled.Link
      className={className}
      href={to}>{children}</Styled.Link>
  )
}
