const existingLastCommitSha = require('process').env.LAST_COMMIT_SHA;
const envVars = existingLastCommitSha?{
  LAST_COMMIT_SHA: existingLastCommitSha
}:{
  LAST_COMMIT_SHA: require('child_process')
    .execSync('git rev-parse HEAD')
    .toString().trim()
}
console.log(envVars);
module.exports = envVars;
