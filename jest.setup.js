// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

import 'setimmediate';
import { getEnvironments } from './src/helpers';
// const fetch = require('whatwg-fetch');
// module.exports = fetch;


require('dotenv').config({
    path:'.env.test'
})

jest.mock('./src/helpers',()=>({
    
    getEnvironments : ()=>({...process.env})
}))