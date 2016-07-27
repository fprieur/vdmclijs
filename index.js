#!/usr/bin/env node
'use strict';
const program = require('commander');
var file = require('./file');
var github = require ('./github');
var git = require('./git');
var config = require('config');
var workdir = config.get('workdir.dev');

program
  .version('0.0.1')
  .command("create_project <name>")
  .description('Generate a quickstart project')
  .action(function(name){
    console.log('create a project named "%s"', name);
    file.CreateDockerfile();
    file.CreateJenkinsfile();
    //github.CreateRepo(name);
    git.PushNewrepo(workdir+"src",name)
  });

program
  .command("create_repo <repo_name>")
  .description('Create de public repo on github with the given name')
  .action(function(name){
    console.log('Create the repo  "%s"', name);
    github.CreateRepo(name);
  });

program
  .command("git")
  .description('test git')
  .action(function(name){
    console.log('Create the repo  "%s"', name);
    git.PushNewrepo();
  });

program.parse(process.argv);
