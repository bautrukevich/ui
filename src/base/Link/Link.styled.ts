/* Vendors */
import styled from 'styled-components'

/* Types */

/* Utils */

/* Styles */
export const Link = styled.a`
  font-size: var(--font-size);
  font-family: var(--font-sans);
  font-weight: bold;
  color: var(--color-dark);
  text-decoration: none;
  border-bottom: 2px solid rgba(255, 60, 65, 0.5);

  &:hover {
    background-color: rgba(255, 60, 65, 0.25);
  }

  &:focus {
    border-bottom-color: #ff3c41;
    background: none;
    outline-offset: 2px;
    outline: var(--color-light-blue) solid 2px;
  }

  &:visited {
    border-bottom-color: var(--color-purple);

    &:hover {
      background-color: rgba(213, 137, 255, 0.5);
      border-bottom-color: var(--color-light-purple);
    }
  }
`
