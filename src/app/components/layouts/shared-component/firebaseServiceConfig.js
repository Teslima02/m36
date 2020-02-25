import app from 'firebase/app';

const prodConfig = {

    apiKey: "AIzaSyAmOHeT5bubvC1xbfD58GR3Bbb-7Oqgd0k",
    authDomain: "m36ng-f100d.firebaseapp.com",
    databaseURL: "https://m36ng-f100d.firebaseio.com",
    projectId: "m36ng-f100d",
    storageBucket: "m36ng-f100d.appspot.com",
    messagingSenderId: "912251290177",
    appId: "1:912251290177:web:6c22f597b2abdc4ea5fcc0",
    measurementId: "G-9TEE59TRPM",
};

const devConfig = {

    apiKey: "AIzaSyAmOHeT5bubvC1xbfD58GR3Bbb-7Oqgd0k",
    authDomain: "m36ng-f100d.firebaseapp.com",
    databaseURL: "https://m36ng-f100d.firebaseio.com",
    projectId: "m36ng-f100d",
    storageBucket: "m36ng-f100d.appspot.com",
    messagingSenderId: "912251290177",
    appId: "1:912251290177:web:6c22f597b2abdc4ea5fcc0",
    measurementId: "G-9TEE59TRPM",
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
  
export default Firebase;
