/* Vendor */
import * as React from 'react';
import {storiesOf} from '@storybook/react'

/* Component */
import {Checkbox} from './Checkbox'

/* Types */

/* Utils */

/* Styles */

/* Stories */
storiesOf('Checkbox', module)
  .add('default', () => (
    <Checkbox
      name='default'
      value={1}
      onChange={() => {}}>Default</Checkbox>
  ))
  .add('checked', () => (
    <Checkbox
      name='default'
      value={1}
      onChange={() => {}}
      checked>Checked</Checkbox>
  ))
  .add('disabled', () => (
    <Checkbox
      name='default'
      value={1}
      onChange={() => {}}
      disabled>Disabled</Checkbox>
  ))
  .add('checked + disabled', () => (
    <Checkbox
      name='default'
      value={1}
      onChange={() => {}}
      checked
      disabled>Checked & Disabled</Checkbox>
  ))
