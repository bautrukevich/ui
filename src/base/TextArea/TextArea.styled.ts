/* Vendors */
import styled from 'styled-components'

/* Types */

/* Utils */

/* Styles */
export const TextArea = styled.textarea`
  font-size: var(--font-size);
  font-family: var(--font-sans);
  line-height: 1.25;
  border-radius: 6px;
  padding: 9px 12px;
  border: 1px solid var(--color-warm-grey);
  box-sizing: border-box;
  color: var(--color-dark);
  width: 100%;
  margin-bottom: 0;
  resize: vertical;
  min-height: 96px;

  &::placeholder {
    color: var(--color-warm-grey);
  }

  &:hover {
    border: 2px solid var(--color-light-blue);
    padding: 8px 11px;
    min-height: 96px;
  }

  &:focus {
    outline: none;
    border: 2px solid var(--color-blue);
    padding: 8px 11px;
    min-height: 96px;
  }

  &:disabled {
    background-color: var(--color-lighten);
    color: var(--color-grey);
    border-style: dashed;
    padding: 9px 12px;

    &:hover {
      background-color: #f6f6f6;
      color: var(--color-grey);
      cursor: not-allowed;
      border: 1px solid var(--color-warm-grey);
    }
  }
`
