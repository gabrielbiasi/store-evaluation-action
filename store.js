const axios = require('axios');
const atob = require('atob');

// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
const evaluationData = JSON.parse(atob(process.argv[2]));

console.log(evaluationData);

axios.post('https://trybe-evaluation.herokuapp.com/evaluation', evaluationData)
.then((response) => {
  console.log(`Status: ${response.status}`);
  process.exit();
})
.catch((error) => {
  console.log(error);
  process.exit(1);
});
