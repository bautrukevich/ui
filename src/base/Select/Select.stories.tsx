/* Vendor */
import * as React from 'react';
import {storiesOf} from '@storybook/react'

/* Component */
import {Select} from './Select'

/* Types */
import {OptionType} from './Select.types'

/* Utils */
const ITEMS: Array<OptionType> = [
  {
    value: 'apple',
    title: 'Apple',
  }, {
    value: 'banana',
    title: 'Banana',
  }, {
    value: 'papaya',
    title: 'Papaya',
    disabled: true,
  }
]

/* Styles */

/* Stories */
storiesOf('Select', module)
  .add('default', () => (
    <Select items={ITEMS}/>
  ))
  .add('with value', () => (
    <Select
      items={ITEMS}
      value='banana'/>
  ))
  .add('with disabled option', () => (
    <Select
      items={ITEMS}
      value='apple'/>
  ))
  .add('disabled', () => (
    <Select
      items={ITEMS}
      disabled />
  ))
  .add('with placeholder', () => (
    <Select
      items={ITEMS}
      placeholder='Field name here or tip' />
  ))

