import {readFile, writeFile} from 'fs'
import {COMPONENTS_PATH, DUMB_COMPONENT_NAME, DUMB_COMPONENT_NAME_LOWERCASE} from './config'
import {getFiles} from './getFiles'

/**
 * Update component file content.
 * @param {string} fileName
 * @param {string} componentName
 * @return void
 */
const updateComponentFile = (fileName: string, componentName: string): void => {
  const componentFile = `${COMPONENTS_PATH}/${componentName}/${fileName}`

  readFile(componentFile, (error, content) => {
    if (error) throw error

    const updated = content.toString()
      .replace(DUMB_COMPONENT_NAME, componentName)
      .replace(DUMB_COMPONENT_NAME_LOWERCASE, componentName.toLowerCase())

    writeFile(componentFile, updated, 'utf8', (error): void => {
      if (error) throw error
    })
  })
}

/**
 * Update component files content.
 * @param {string} name
 * @return void
 */
export const updateComponentFiles = (name: string): void => {
  const files = getFiles(`${COMPONENTS_PATH}/${name}`)

  for (const file in files) {
    const fileName = files[file]

    updateComponentFile(fileName, name)
  }
}
