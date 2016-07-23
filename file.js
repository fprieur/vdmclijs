var writeFile = require('write');

function CreateDockerfile(){
  writeFile('src/Dockerfile',
            "FROM node:4.3 \nEXPOSE 3000",
            function(err) {
              if (err) console.log(err);
  });
}

exports.CreateDockerfile = CreateDockerfile;
