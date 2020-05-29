import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyAU2gyK0KUgi-N0mc9ym2syQ1Rwvk3RPtI',
    authDomain: 'react-demo-app-d767d.firebaseapp.com',
    databaseURL: 'https://react-demo-app-d767d.firebaseio.com',
    projectId: 'react-demo-app-d767d',
    storageBucket: 'react-demo-app-d767d.appspot.com',
    messagingSenderId: '29117871519'
  };

const fire = firebase.initializeApp(config)

export default fire;