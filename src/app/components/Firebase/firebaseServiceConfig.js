import app from 'firebase/app';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyCFr8NMfpssfVrMi_KhIr586Vthf8BcoZ8",
    authDomain: "m36subscribers.firebaseapp.com",
    databaseURL: "https://m36subscribers.firebaseio.com",
    projectId: "m36subscribers",
    storageBucket: "m36subscribers.appspot.com",
    messagingSenderId: "461801666162",
    appId: "1:461801666162:web:34292d57dcb80891c774eb"
};

const devConfig = {
    apiKey: "AIzaSyCFr8NMfpssfVrMi_KhIr586Vthf8BcoZ8",
    authDomain: "m36subscribers.firebaseapp.com",
    databaseURL: "https://m36subscribers.firebaseio.com",
    projectId: "m36subscribers",
    storageBucket: "m36subscribers.appspot.com",
    messagingSenderId: "461801666162",
    appId: "1:461801666162:web:34292d57dcb80891c774eb"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.db = app.database();
    }

    subscriberData = (data) => {
        if (!app.apps.length) {
            return;
        }

        this.db.ref().child('Subscribers')
            .push({
                fullname: data.fullname,
                email: data.email,
                timestamp: new Date().getTime(),
            })
            .catch((evt) => {
                // console.log(evt, 'evt')
                return Promise.resolve(evt);
            });
    };
}

export default Firebase;
