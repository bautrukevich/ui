#!/usr/bin/env node
import program from 'commander'
import {makeComponent} from './makeComponent'

program
  .version('0.0.4')
  .description('Make component in /src/components folder')

program
  .command('component <name>')
  .alias('c')
  .description('Create a component')
  .action((name) => {
    const newName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`

    makeComponent(newName)
  })

program.parse(process.argv)
