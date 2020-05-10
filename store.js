const axios = require('axios');
const atob = require('atob');

// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
const evaluationData = JSON.parse(atob(process.argv[2]));

const environment = process.argv[3];
let endpoint = ''
switch(environment) {
  case 'development':
    endpoint = 'http://localhost:3310/v2/evaluation';
    break;
  case 'staging':
    endpoint = 'https://trybe-evaluation-staging.herokuapp.com/v2/evaluation';
    break;
  case 'production':
    endpoint = 'https://trybe-evaluation-production.herokuapp.com/v2/evaluation';
    break;
  default:
    break;
}

const evaluationResponse = {
  ...evaluationData,
  pr_number: parseInt(process.argv[4])
}

console.log(evaluationResponse);

axios.post(endpoint, evaluationResponse)
.then((response) => {
  console.log(`Status: ${response.status}`);
  console.log(response.body);
  process.exit();
})
.catch((error) => {
  console.log("ERROR");
  console.log(error);
  console.log("==========");
  Object.keys(error).map(e => console.log(e));
  process.exit(1);
});
