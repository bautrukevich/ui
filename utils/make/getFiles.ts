import {readdirSync} from 'fs'

/**
 * Get list of files from directory.
 * @param path
 * @return Array<string>
 */
export const getFiles = (path: string): Array<string> => {
  return readdirSync(path)
}
