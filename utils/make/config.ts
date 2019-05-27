import {join} from 'path'

/**
 * Name for dumb component
 * @type {string}
 */
const DUMB_COMPONENT_NAME = /__Component__/g
const DUMB_COMPONENT_NAME_LOWERCASE = /__component__/g

/**
 * Template component path.
 * @type {string}
 */
const COMPONENT_PATH = join(__dirname, './component')

/**
 * Future component path.
 * @type {string}
 */
const COMPONENTS_PATH = join(__dirname, '../../src/base')

export {
  DUMB_COMPONENT_NAME,
  DUMB_COMPONENT_NAME_LOWERCASE,
  COMPONENT_PATH,
  COMPONENTS_PATH,
}
