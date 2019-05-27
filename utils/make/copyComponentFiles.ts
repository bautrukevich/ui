import {copyFileSync, constants} from 'fs'
import {getFiles} from './getFiles'
import {COMPONENTS_PATH, COMPONENT_PATH, DUMB_COMPONENT_NAME} from './config'

const {COPYFILE_EXCL} = constants

/**
 * Copy component file and rename.
 * @param {string} fileName
 * @param {string} name
 * @return void
 */
const copyComponentFile = (fileName: string, name: string): void => {
  const newFileName = fileName.replace(DUMB_COMPONENT_NAME, name)

  copyFileSync(`${COMPONENT_PATH}/${fileName}`, `${COMPONENTS_PATH}/${name}/${newFileName}`, COPYFILE_EXCL)
}

/**
 * Copy template component files.
 * @param {string} name
 * @return void
 */
export const copyComponentFiles = (name: string): void => {
  const files = getFiles(COMPONENT_PATH)

  for (const file in files) {
    const fileName = files[file]

    copyComponentFile(fileName, name)
  }
}
