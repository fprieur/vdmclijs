var sys = require('util')
var exec = require('child_process').exec;
var child;

function gitInit(repo_path){
  // git init new repo locally
  child = exec("git init "+ repo_path, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function gitAdd(repo_path){
  child = exec("git add --all", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function gitCommit(repo_path) {
  child = exec("git commit -m 'init from vdmcli' ", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function gitAddRemoteOrigin(repo_path,repo_name){
  child = exec("git remote add git@github.com:fprieur/"+repo_name+".git ", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function gitPush(repo_path){
  child = exec("git push -u origin master ", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function PushNewrepo(repo_path, repo_name){

  setTimeout(function(){
    //do what you need here
}, 2000);

  // git init new repo locally
  gitInit(repo_path);
  setTimeout(function(){
    //do what you need here
}, 2000);
  //git add new files
  gitAdd(repo_path);
  
  setTimeout(function(){
    //do what you need here
}, 2000);
  //git commit -m from vdmcli
  gitCommit(repo_path);

  //git create new remote origin
  //gitAddRemoteOrigin(repo_path,repo_name);

  //git push on master
  //gitPush(repo_path);

}

exports.PushNewrepo = PushNewrepo;
