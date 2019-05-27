/* Vendors */
import React, {ReactChildren} from 'react'

/* Styles */
import * as Styled from './Link.styled'

/* Components */

/* Utils */

/* Types */
type Props = {
  className?: string,
  to?: string,
  children: string | ReactChildren,
}

/* Component */
export const Link = ({className, to, children}: Props) => {
  return (
    <Styled.Link
      className={className}
      href={to}>{children}</Styled.Link>
  )
}
