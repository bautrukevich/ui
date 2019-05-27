/* Vendor */
import * as React from 'react';
import {storiesOf} from '@storybook/react'

/* Component */
import {Input} from './Input'

/* Utils */

/* Styles */

/* Stories */
storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('with value', () => (
    <Input value='Some text'/>
  ))
  .add('type – number', () => (
    <Input
      type='number'
      value={18} />
  ))
  .add('disabled', () => (
    <Input disabled />
  ))
  .add('with placeholder', () => (
    <Input placeholder='Field name here or tip' />
  ))
