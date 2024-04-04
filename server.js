import app  from './src/app.js';
import config from 'config';

app.listen(config.get('api.porta'), () => console.log('A API está funcionando'));