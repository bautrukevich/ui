/* Vendors */
import styled, {css} from 'styled-components'

/* Types */
import {Props} from './Radio.types'

/* Utils */
const isVerticalGroup = ({isVertical}: Props) => isVertical &&
  css`
    flex-direction: column;  
  `

const isVerticalLabel = ({isVertical}: Props) => isVertical ?
  css`
    margin-bottom: 24px;
    
    &:last-child {
      margin-bottom: 0;
    }
  ` :
  css`
    margin-right: 24px;
    
    &:last-child {
      margin-right: 0;
    }
  `

/* Styles */
export const RadioGroup = styled.div<{isVertical: boolean}>`
  display: flex;
  
  // @ts-ignore
  ${isVerticalGroup}
`

export const RadioLabel = styled.label<{isVertical: boolean}>`
  font-family: var(--font-sans);
  font-size: var(--font-size);
  font-weight: bold;
  line-height: 1;
  
  display: flex;
  align-items: center;
  
  &:hover {
    cursor: pointer;
  }

  // @ts-ignore
  ${isVerticalLabel}
`

export const RadioInput = styled.input`
  margin-right: 8px;
  appearance: none;

  border-radius: 50%;
  width: 18px;
  height: 18px;

  border: 2px solid var(--color-grey);
  transition: 0.2s all linear;
  outline: none;
  
  &:hover {
    background-color: var(--color-light-grey);
  }
  
  &:checked {
    border: 6px solid var(--color-blue);
    
    &:hover {
      background: none;
      border-color: var(--color-light-blue);
    }
  }
`
