#!/usr/bin/env node
'use strict';
const program = require('commander');
const file = require('./file');

program
  .version('0.0.1')
  .command("create [name]")
  .description('Generate a quickstart project')
  .action(function(name){
    console.log('create a project named "%s"', name);
    file.CreateDockerfile();
  });

program.parse(process.argv);
