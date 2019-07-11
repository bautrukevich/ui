/* Vendors */
import styled from 'styled-components'

/* Types */

/* Utils */

/* Styles */
export const CheckboxLabel = styled.label`
  font-family: var(--font-sans);
  font-size: var(--font-size);
  line-height: 1;
  position: relative;
  cursor: pointer;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`

export const CheckboxToggle = styled.span`
  position: relative;
  cursor: pointer;
  padding: 0;
  width: 18px;
  height: 18px;
  
  &:before {
    content: '';
    border-radius: 4px;
    margin-right: 8px;
    display: inline-block;
    vertical-align: text-top;
    width: 16px;
    height: 16px;
    background: white;
    border: 2px solid var(--color-warm-grey);
  }
`

export const CheckboxInput = styled.input`
  position: absolute; // take it out of document flow
  opacity: 0; // hide it
  width: 0;
  height: 0;

  //& ~ span {
  //  position: relative;
  //  cursor: pointer;
  //  padding: 0;
  //  width: 18px;
  //  height: 18px;
  //}
  //
  //& ~ span:before {
  //  content: '';
  //  border-radius: 4px;
  //  margin-right: 8px;
  //  display: inline-block;
  //  vertical-align: text-top;
  //  width: 16px;
  //  height: 16px;
  //  background: white;
  //  border: 2px solid var(--color-warm-grey);
  //}

  &:hover ~ span:before {
    border: 2px solid var(--color-light-blue);
  }
  
  &:focus ~ span:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  &:checked ~ span:before {
    background: #fff;
  }
  
  &:disabled ~ span {
    color: var(--color-light-grey);
    cursor: auto;
  }

  &:disabled ~ span:before {
    box-shadow: none;
    background: var(--color-lighten-grey);
    border-color: var(--color-light-grey);
  }

  &:checked ~ span:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    background: var(--color-dark);
    width: 2px;
    height: 2px;
    box-shadow: 
      2px 0 0 var(--color-dark),
      4px 0 0 var(--color-dark),
      4px -2px 0 var(--color-dark),
      4px -4px 0 var(--color-dark),
      4px -6px 0 var(--color-dark),
      4px -8px 0 var(--color-dark);
    transform: rotate(45deg);
  }
  
  &:hover ~ span:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    background: var(--color-dark);
    width: 2px;
    height: 2px;
    box-shadow: 
      2px 0 0 var(--color-dark),
      4px 0 0 var(--color-dark),
      4px -2px 0 var(--color-dark),
      4px -4px 0 var(--color-dark),
      4px -6px 0 var(--color-dark),
      4px -8px 0 var(--color-dark);
    transform: rotate(45deg);
  }
`
