const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const app = require('./app');
require('../src/database');

// app.listen(4000, () => console.log('server on port 4000'));

async function main(){
    await app.listen(app.get('port'));
    console.log('server on port '+app.get('port'));
}

main();