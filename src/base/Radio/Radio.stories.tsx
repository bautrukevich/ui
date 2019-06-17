/* Vendor */
import * as React from 'react';
import {storiesOf} from '@storybook/react'

/* Component */
import {Radio} from './Radio'
import {OptionType} from '../Select/Select.types'

/* Types */

/* Utils */
const ITEMS: OptionType[] = [
  {
    value: 1,
    title: 'Option 1',
  }, {
    value: 2,
    title: 'Option 2',
  }, {
    value: 3,
    title: 'Option 3',
  },
]

/* Styles */

/* Stories */
storiesOf('Radio', module)
  .add('default', () => (
    <Radio
      name='default'
      items={ITEMS} />
  ))
  .add('is – vertical', () => (
    <Radio
      name='value'
      items={ITEMS}
      value={1}
      isVertical
      onChange={() => {}}/>
  ))
  .add('with value', () => (
    <Radio
      name='value'
      items={ITEMS}
      value={1}
      onChange={() => {}}/>
  ))
