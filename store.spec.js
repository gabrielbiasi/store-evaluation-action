const Base64 = require('base64-string').Base64;
const execSync = require('child_process').execSync;

const buildPath = (absolutePath, filePath) => (`${absolutePath}/${filePath}`);


describe('Store', () => {
  it('should store evaluation successfully', () => {
    const pwd = execSync('pwd').toString().replace('\n', '');
    const storeFile = buildPath(pwd, 'store.js');
    const evaluationData = {
      github_username: 'jeanpsv',
      github_repository_name: 'betrybe/sd-0x-blockY-project-name',
      evaluations: [
        { description: 'Sum module', grade: 3 },
        { description: 'Power module', grade: 1 },
        { description: 'Multiply module', grade: 1 }
      ],
      pr_number: 9
    };
    const enc = new Base64();
    const evaluationDataInBase64 = enc.encode(JSON.stringify(evaluationData));
    const environment = 'development';
    const prNumber = '1';

    execSync(
      `node ${storeFile} ${evaluationDataInBase64} ${environment} ${prNumber}`,
      { stdio: 'inherit' }
    );
  });
});
