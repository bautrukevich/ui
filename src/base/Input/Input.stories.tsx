import * as React from 'react';
import {storiesOf} from '@storybook/react'

import {Input} from './Input'

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
