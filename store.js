const axios = require('axios');
const atob = require('atob');

// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
const evaluationData = JSON.parse(atob(process.argv[2]));

const environment = process.argv[3];
let endpoint = ''
switch(environment) {
  case 'development':
    endpoint = 'http://localhost:3310';
    break;
  case 'staging':
    endpoint = 'https://trybe-evaluation-staging.herokuapp.com/evaluation';
    break;
  case 'production':
    endpoint = '';
    break;
  default:
    break;
}

console.log(evaluationData);

axios.post(endpoint, evaluationData)
.then((response) => {
  console.log(`Status: ${response.status}`);
  process.exit();
})
.catch((error) => {
  console.log(error);
  process.exit(1);
});
