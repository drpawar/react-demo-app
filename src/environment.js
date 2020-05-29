let BASE_URL = 'http://dev.api.com/';


if(process.env.REACT_APP_ENV === 'dev') {
    BASE_URL = 'http://dev.api.com/';
}

if(process.env.REACT_APP_ENV === 'uat') {
    BASE_URL = 'http://uat.api.com/';
}

if(process.env.REACT_APP_ENV === 'prod') {
    BASE_URL = 'http://prod.api.com';
}

export {BASE_URL};