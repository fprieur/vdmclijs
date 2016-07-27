var writeFile = require('write');
var request = require('request');
var config = require('config');
var workdir = config.get('Workdir.dev');

function CreateDockerfile(){
  request.get('https://raw.githubusercontent.com/fprieur/test-pipeline-jenkins/master/Dockerfile', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var content = body;
        writeFile(workdir+'src/Dockerfile',
                  content,
                  function(err) {
                    if (err) console.log(err);
        });
    }
  });
}

function CreateJenkinsfile(){
  request.get('https://raw.githubusercontent.com/fprieur/test-pipeline-jenkins/master/Jenkinsfile', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var content = body;
        writeFile(workdir+'src/Jenkinsfile',
                  content,
                  function(err) {
                    if (err) console.log(err);
        });
    }
  });
}

exports.CreateDockerfile = CreateDockerfile;
exports.CreateJenkinsfile = CreateJenkinsfile;
