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
    <Input
      value='Some text'
      onChange={() => {}} />
  ))
  .add('type – number', () => (
    <Input
      type='number'
      value={18}
      onChange={() => {}} />
  ))
  .add('type – password', () => (
    <Input
      type='password'
      value='p@$$w0rd'
      onChange={() => {}} />
  ))
  .add('disabled', () => (
    <Input disabled />
  ))
  .add('readOnly', () => (
    <Input
      value='Some text'
      readOnly />
  ))
  .add('with placeholder', () => (
    <Input placeholder='Field name here or tip' />
  ))
