var GitHubApi = require("github");
var config = require('config');

var github = new GitHubApi({
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    headers: {
        "user-agent": "vdmcli" // GitHub is happy with a unique user agent
    },
    Promise: require('bluebird'),
    followRedirects: true, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
});

function CreateRepo(name) {
  var githubToken = config.get('Github.token');

  github.authenticate({
    type: "oauth",
    token: githubToken
  });

  github.repos.create({
    name: name
  }, function(err, res) {
      //console.log(JSON.stringify(res));
      console.log("depot créé sur github");
  });
}

exports.CreateRepo = CreateRepo;
