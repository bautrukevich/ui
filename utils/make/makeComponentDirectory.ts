import {mkdirSync} from 'fs'
import {COMPONENTS_PATH} from './config'

/**
 * Make component directory.
 * @param {string} name
 */
export const makeComponentDirectory = (name: string): void => mkdirSync(`${COMPONENTS_PATH}/${name}/`)
