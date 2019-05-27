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
  .add('disabled', () => (
    <Input disabled />
  ))
  .add('with placeholder', () => (
    <Input placeholder='Field name here or tip' />
  ))
