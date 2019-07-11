/* Vendor types */
import {MouseEvent, ReactNode, ReactNodeArray} from 'react'

/* Types */
export enum ButtonSizeEnum {
  big = 'big',
  normal = 'normal',
}

export enum ButtonColorEnum {
  brand = 'brand',
  primary = 'primary',
  gray = 'gray',
  black = 'black',
  white = 'white',
}

export enum ButtonVisualEnum {
  rounded = 'rounded',
}

export interface Props {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  color?: ButtonColorEnum;
  size?: ButtonSizeEnum;
  visual?: ButtonVisualEnum;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode | ReactNodeArray;
}
