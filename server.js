const app  = require('./src/app.js');
const config = require('config');

app.listen(config.get('api.porta'), () => console.log('A API está funcionando'));