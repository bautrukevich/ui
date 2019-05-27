/* Vendor */
import * as React from 'react';
import {storiesOf} from '@storybook/react'

/* Component */
import {TextArea} from './Textarea'

/* Utils */

/* Styles */

/* Stories */
storiesOf('TextArea', module)
  .add('default', () => (
    <TextArea />
  ))
  .add('with value', () => (
    <TextArea value='Some text'/>
  ))
  .add('disabled', () => (
    <TextArea disabled />
  ))
  .add('with placeholder', () => (
    <TextArea placeholder='Field name here or tip' />
  ))
