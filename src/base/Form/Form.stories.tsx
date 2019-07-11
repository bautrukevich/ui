/* Vendor */
import * as React from 'react'
import {storiesOf} from '@storybook/react'
/* Component */
import {Form} from './Form'
import {Button, Checkbox, FormControl, Input} from '../..'
import {ButtonSizeEnum} from '../Button/Button.types'

/* Types */

/* Utils */

/* Styles */

/* Stories */
storiesOf('Form', module)
  .add('login form', () => (
    <Form>
      <FormControl
        label='E-mail'>
        <Input
          type='email'
          name='email' />
      </FormControl>
      <FormControl
        label='Password'>
        <Input
          type='password'
          name='password' />
      </FormControl>
      <FormControl>
        <Checkbox
          name='remember_me'
          value={'true'}
          onChange={() => {}}>Remember me</Checkbox>
      </FormControl>
      <Button
        type='submit'
        size={ButtonSizeEnum.big}>
        Sign in
      </Button>
    </Form>
  ))
  .add('register form', () => (
    <Form>
      <FormControl
        label='Name'>
        <Input
          name='name' />
      </FormControl>
      <FormControl
        label='E-mail'>
        <Input
          type='email'
          name='email' />
      </FormControl>
      <FormControl
        label='Password'>
        <Input
          type='password'
          name='password' />
      </FormControl>
      <FormControl
        label='Repeat password'>
        <Input
          type='password'
          name='repeat_password' />
      </FormControl>
      <FormControl>
        <Checkbox
          name='terms_and_privacy'
          value={'true'}
          onChange={() => {}}>I agree to the Terms Of Service and Privacy Policy.</Checkbox>
      </FormControl>
      <FormControl>
        <Checkbox
          name='discounts_and_promos'
          value={'true'}
          onChange={() => {}}>I want to receive info on discounts and promos.</Checkbox>
      </FormControl>
      <Button
        type='submit'
        size={ButtonSizeEnum.big}>
        Create account
      </Button>
    </Form>
  ))
