/* Vendor */
import * as React from 'react';
import {storiesOf} from '@storybook/react'

/* Component */
import {Input, TextArea} from '../..'
import {FormControl} from './FormControl'

/* Types */

/* Utils */

/* Styles */

/* Stories */
storiesOf('FormControl', module)
  .add('with input', () => (
    <FormControl
      label='Input label'
      caption='Input caption'>
      <Input name='default' />
    </FormControl>
  ))
  .add('with textarea', () => (
    <FormControl
      label='TextArea label'
      caption='TextArea caption'>
      <TextArea />
    </FormControl>
  ))
