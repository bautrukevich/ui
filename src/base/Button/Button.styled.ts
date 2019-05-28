/* Vendors */
import styled, {css} from 'styled-components'

/* Types */
import {ButtonColorEnum, ButtonSizeEnum, Props} from './Button.types'

/* Utils */
/**
 * Get styles for different button sizes.
 * @param size
 */
const getButtonSizeStyle = ({size}: Props) => {
  switch (size) {
    case ButtonSizeEnum.big:
      return css`
        padding: 12px 24px;
      `
    case ButtonSizeEnum.normal:
      return css`
        padding: 8px 16px;
      `
    default: // ButtonSizeEnum.normal
      return css`
        padding: 8px 16px;
      `
  }
}

/**
 * Get styles for different button colors.
 * @param color
 */
const getButtonColorStyle = ({color}: Props) => {
  switch (color) {
    case ButtonColorEnum.primary:
      return css`
        --button-color: #fff;
        --button-outline-color: #52b0ff;
        
        --button-back-color: #238de6;
        --button-hover-back-color: #52b0ff;
        --button-active-back-color: #187cce;  
      `
    case ButtonColorEnum.gray:
      return css`
        --button-color: #191919;
        --button-outline-color: #52b0ff;
        --button-disabled-color: #c5c4be;
        
        --button-back-color: #e7e7e7;
        --button-hover-back-color: #f6f6f6;
        --button-active-back-color: #f0f0f0;
        --button-disabled-back-color: #e7e7e7;
      `
    case ButtonColorEnum.white:
      return css`
        --button-back-color: #fff;
      `
    case ButtonColorEnum.black:
      return css`
        --button-color: #fff;
        
        --button-back-color: #191919;
        --button-hover-back-color: #5c5c5c;
        --button-active-back-color: #191919;
      `
    default: // ButtonColorEnum.primary
      return css`
        --button-color: #fff;
        --button-outline-color: #52b0ff;
        
        --button-back-color: #238de6;
        --button-hover-back-color: #52b0ff;
        --button-active-back-color: #187cce;
      `
  }
}

/* Styles */
export const Button = styled.button`
  --button-color: #191919;
  --button-outline-color: #52b0ff;
  --button-disabled-color: #c5c4be;

  --button-back-color: #e7e7e7;
  --button-hover-back-color: #f6f6f6;
  --button-active-back-color: #f0f0f0;
  --button-disabled-back-color: #e7e7e7;

  font-size: var(--font-size);
  font-family: var(--font-sans);
  font-weight: bold;
  line-height: var(--line-height);
  letter-spacing: normal;
  text-align: center;
  color: var(--button-color);
  padding: 8px 16px;
  border-radius: 6px;
  background-color: var(--button-back-color);
  border: none;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: var(--button-hover-back-color);
    cursor: pointer;
    text-decoration: none;
  }

  &:focus {
    position: relative;
    outline: none;
    &:before {
      content: " ";
      position: absolute;
      z-index: 1;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      border: 3px solid var(--button-outline-color);
      border-radius: 9px;
    }
  }

  &:active {
    background-color: var(--button-active-back-color);
    &:before {
      content: " ";
      border: none;
    }
  }

  &:disabled {
    background-color: var(--button-disabled-back-color);
    color: var(--button-disabled-color);
    cursor: not-allowed;
  }
  
  ${getButtonSizeStyle}
  ${getButtonColorStyle}
`
