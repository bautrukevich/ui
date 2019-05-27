/* Vendor */
import * as React from 'react';
import {storiesOf} from '@storybook/react'

/* Component */
import {Textarea} from './Textarea'

/* Utils */

/* Styles */

/* Stories */
storiesOf('Textarea', module)
  .add('default', () => (
    <Textarea />
  ))
  .add('with value', () => (
    <Textarea value='Some text'/>
  ))
  .add('disabled', () => (
    <Textarea disabled />
  ))
  .add('with placeholder', () => (
    <Textarea placeholder='Field name here or tip' />
  ))
