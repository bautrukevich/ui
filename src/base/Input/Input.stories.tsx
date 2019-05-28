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
    <Input name='default'/>
  ))
  .add('with value', () => (
    <Input
      name='default'
      value='Some text'
      onChange={() => {}} />
  ))
  .add('type – number', () => (
    <Input
      name='default'
      type='number'
      value={18}
      onChange={() => {}} />
  ))
  .add('type – password', () => (
    <Input
      name='default'
      type='password'
      value='p@$$w0rd'
      onChange={() => {}} />
  ))
  .add('disabled', () => (
    <Input
      name='default'
      disabled />
  ))
  .add('readOnly', () => (
    <Input
      name='default'
      value='Some text'
      readOnly />
  ))
  .add('with placeholder', () => (
    <Input
      name='default'
      placeholder='Field name here or tip' />
  ))
