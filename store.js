const axios = require('axios');
const atob = require('atob');

// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
const evaluationData = JSON.parse(atob(process.argv[2]));

const environment = process.argv[3];
let url = ''
switch(environment) {
  case 'development':
    url = 'http://localhost:3310';
    break;
  case 'staging':
    url = 'https://trybe-evaluation.herokuapp.com/evaluation';
    break;
  case 'production':
    url = '';
    break;
  default:
    break;
}

console.log(evaluationData);

axios.post(url, evaluationData)
.then((response) => {
  console.log(`Status: ${response.status}`);
  process.exit();
})
.catch((error) => {
  console.log(error);
  process.exit(1);
});
