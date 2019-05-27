import * as React from 'react';
import {storiesOf} from '@storybook/react'

import {Link} from './Link'

storiesOf('Link', module)
  .add('default', () => (
    <Link to='https://google.com/'>Google.com</Link>
  ))
