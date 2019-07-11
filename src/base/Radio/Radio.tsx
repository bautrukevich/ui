/* Vendors */
import React, {ReactElement} from 'react'

/* Styles */
import * as Styled from './Radio.styled'

/* Components */

/* Utils */

/* Types */
import {Props, RadioType} from './Radio.types'

/* Component */
export const Radio = ({className, name, items, value, isVertical = false, onChange}: Props): ReactElement => (
  <Styled.RadioGroup
    className={className}
    isVertical={isVertical}>
    {items.map(({value: radioValue, title, disabled}: RadioType) => (
      <Styled.RadioLabel
        key={radioValue}
        isVertical={isVertical}>
        <Styled.RadioInput
          type='radio'
          name={name}
          value={value}
          checked={radioValue === value}
          disabled={disabled}
          onChange={onChange} />
        <div>{title}</div>
      </Styled.RadioLabel>
    ))}
  </Styled.RadioGroup>
)
