let BASE_URL = 'http://dev.api.com/';

const REACT_APP_API_KEY = 'AIzaSyAU2gyK0KUgi-N0mc9ym2syQ1Rwvk3RPtI',
REACT_APP_AUTH_DOMAIN = 'react-demo-app-d767d.firebaseapp.com',
REACT_APP_DATABASE_URL = 'https://react-demo-app-d767d.firebaseio.com',
REACT_APP_PROJECT_ID = 'react-demo-app-d767d',
REACT_APP_STORAGE_BUCKET = 'react-demo-app-d767d.appspot.com',
REACT_APP_MESSAGING_SENDER_ID = '29117871519'

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