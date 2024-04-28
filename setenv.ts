const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const environment = process.env['ENV'] || 'dev';

const dir = './src/environments/';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const targetPath = `${dir}environment.${environment}.ts`;

const envConfigFile = `export const environment = {
  apiKey: '${process.env['API_KEY']}',
  apiUrl: '${process.env['API_URL']}'
};
`;

fs.writeFileSync(targetPath, envConfigFile, 'utf8');
console.log(`Output generated at ${targetPath}`);