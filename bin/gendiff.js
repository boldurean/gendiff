#!/usr/bin/env node
import program from 'commander';

program
  .version('0.0.1')
  .description('An application for pizza ordering')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')

program.parse(process.argv);
