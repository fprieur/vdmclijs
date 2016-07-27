#!/usr/bin/env node
'use strict';
const program = require('commander');
var file = require('./file');
var github = require ('./github');

program
  .version('0.0.1')
  .command("create <name>")
  .description('Generate a quickstart project')
  .action(function(name){
    console.log('create a project named "%s"', name);
    file.CreateDockerfile();
  });

program
  .command("create_repo <repo_name>")
  .description('Create de public repo on github with the given name')
  .action(function(name){
    console.log('Create the repo  "%s"', name);
    github.CreateRepo(name);
  });

program.parse(process.argv);
