import chalk from 'chalk'

import {makeComponentDirectory} from './makeComponentDirectory'
import {copyComponentFiles} from './copyComponentFiles'
import {updateComponentFiles} from './updateComponentFiles'

/**
 * Make a new component.
 * @param {string} name
 * @return {void}
 */
export const makeComponent = (name: string): void => {
  try {
    makeComponentDirectory(name)
    copyComponentFiles(name)
    updateComponentFiles(name)

    console.log(`🎉 ${chalk.bold(name)} ${chalk.green('component was created!')}`)
  }
  catch (error) {
    console.error(`💔 ${chalk.red(error.message)}`)
  }
}
