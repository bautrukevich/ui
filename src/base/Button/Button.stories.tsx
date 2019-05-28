/* Vendor */
import * as React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'

/* Component */
import {Button} from './Button'
import {ButtonColorEnum, ButtonSizeEnum} from './Button.types'

/* Types */

/* Utils */

/* Styles */
const Back = styled.div`
  background-color: var(--color-grey);
  padding: 24px;
`

/* Stories */
storiesOf('Button', module)
  .add('default (color - primary, size - normal)', () => (
    <Button>Default</Button>
  ))
  .add('size – big', () => (
    <Button size={ButtonSizeEnum.big}>Size - big</Button>
  ))
  .add('color – gray', () => (
    <Button color={ButtonColorEnum.gray}>Color – gray</Button>
  ))
  .add('color – black', () => (
    <Button color={ButtonColorEnum.black}>Color – black</Button>
  ))
  .add('color – white', () => (
    <Back>
      <Button color={ButtonColorEnum.white}>Color – white</Button>
    </Back>
  ))
  .add('disabled', () => (
    <Button disabled>Disabled</Button>
  ))
