/* Vendors */
import styled from 'styled-components'

/* Styles */
export const Select = styled.div`
  position: relative;
`

export const SelectInput = styled.select`
  font-size: 16px;
  line-height: 1.25;
  border-radius: 6px;
  padding: 9px 26px 9px 12px;
  border: 1px solid var(--color-warm-grey);
  box-sizing: border-box;
  color: var(--color-dark);
  height: 40px;
  width: 100%;
  background: none;
  appearance: none;
  
  &::placeholder {
    color: var(--color-warm-grey);
  }

  &:hover {
    border: 2px solid var(--color-light-blue);
    padding: 7px 11px;
  }

  &:focus {
    outline: none;
    border: 2px solid var(--color-blue);
    padding: 7px 11px;
  }

  &:disabled {
    background-color: var(--color-lighten);
    color: var(--color-grey);
    padding: 9px 12px;

    &:hover {
      background-color: #f6f6f6;
      color: var(--color-grey);
      cursor: not-allowed;
      border: 1px solid var(--color-warm-grey);
    }
  }
`

export const SelectIcon = styled.svg`
  position: absolute;
  top: 14px;
  right: 12px;
`
