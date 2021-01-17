#!/usr/bin/env node
import program from 'commander';

program
  .version('0.0.1')
  .description('An application for pizza ordering')

program.parse(process.argv);
