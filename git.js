var sys = require('util')
var exec = require('child_process').exec;
var child;
var child2;


function gitInit(repo_path){
  // git init new repo locally
  child = exec("git init ",
  { cwd: repo_path },
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function gitAdd(repo_path){
  child2 = exec("git add .", {
  cwd: repo_path+"/"
}, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function gitCommit(repo_path) {
  child = exec("git commit -m \"init from vdmcli\" ", {
  cwd: repo_path+"/"
}, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function gitAddRemoteOrigin(repo_path,repo_name){
  child = exec("git remote add origin git@github.com:fprieur/"+repo_name+".git", {
  cwd: repo_path
}, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function gitPush(repo_path){
  child = exec("git push -u origin master", {
  cwd: repo_path
},function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function PushNewrepo(repo_path, repo_name){

  setTimeout(function(){
      // git init new repo locally
      gitInit(repo_path);
      console.log("git init");
  }, 3000);

  setTimeout(function(){
      //git add new files
      console.log("git add");
      gitAdd(repo_path);
  }, 6000);


  setTimeout(function(){
      //git commit -m from vdmcli
      console.log("git commit");
      gitCommit(repo_path);
  }, 9000);

  setTimeout(function(){
    //git create new remote origin
    console.log("git remote add origin");
    gitAddRemoteOrigin(repo_path,repo_name);
  }, 12000);

  setTimeout(function(){
    //git push on master
    console.log("git push");
    gitPush(repo_path);
  }, 18000);
}

exports.PushNewrepo = PushNewrepo;
