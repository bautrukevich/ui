/* Vendor */
import * as React from 'react';
import {storiesOf} from '@storybook/react'

/* Component */
import {Link} from './Link'

/* Utils */

/* Styles */

/* Stories */
storiesOf('Link', module)
  .add('default', () => (
    <Link to='https://google.com/'>Google.com</Link>
  ))
