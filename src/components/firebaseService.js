import config from './firebaseServiceConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import '@firebase/messaging';

class firebaseService {

    init() {
        if (firebase.apps.length) {
            return;
        }
        firebase.initializeApp(config);
        this.db = firebase.database();
        this.auth = firebase.auth();
    }

    getUserData = (userId) => {
        if (!firebase.apps.length) {
            return;
        }
        return new Promise((resolve, reject) => {
            this.db.ref(`users/${userId}`)
                .once('value')
                .then((snapshot) => {
                    const user = snapshot.val();
                    resolve(user);
                });
        });
    };

    createRMAuthData = (email, password) => {
        if (!firebase.apps.length) {
            return;
        }

        // this is use to check if user is already in database
        firebase.auth().fetchSignInMethodsForEmail(email)
            .then(providers => {
                console.log(providers.length, 'providers.length');
                // if providers.length === 0 that mean's the user is not available 
                if (providers.length === 0) {
                    this.auth.createUserWithEmailAndPassword(email, password)
                        .then(evt => {
                            evt.user.updateProfile({
                                displayName: 'rm',
                            })
                        })
                        .catch((error) => {
                            // Handle Errors here.
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            // ...
                            console.log(errorCode, 'errorCode')
                            console.log(errorMessage, 'error.message')
                        });
                } else {
                    // has signed up
                    console.log('nothing come heres')

                    // this.db.ref().child('users').child(email).setWithPriority({
                    //     displayName: 'rm',
                    // });
                    // this.db.ref().child('users').child(email);
                }
            });
    };

    createRMData = (data) => {
        if (!firebase.apps.length) {
            return;
        }

        this.db.ref().child('RM')
            .push({
                adUserID: data.rmId,
                email: data.email,
                count: 0,
                id: 'rm',
                token: '',
                image: 'https://pngimage.net/wp-content/uploads/2018/05/customer-care-logo-png-4.png',
                timestamp: new Date().getTime(),
            });
    };

    updateUserTokenInRMNode = (email, token) => {

        if (!firebase.apps.length) {
            return;
        }
        this.db.ref().child(`RM`)
            .orderByChild('email').equalTo(`${email}`)
            .once("value", snapshot => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    // snapshot.ref.update({ token: token })
                    const ky = Object.keys(userData)[0];
                    this.db.ref(`RM/${ky}/token`).set(token);
                }
            });
    };

    updateUserTokenInCSNode = (email, token) => {

        if (!firebase.apps.length) {
            return;
        }
        this.db.ref().child(`CS`)
            .orderByChild('email').equalTo(`${email}`)
            .once("value", snapshot => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    // snapshot.ref.update({ token: token })
                    const ky = Object.keys(userData)[0];
                    this.db.ref(`CS/${ky}/token`).set(token);
                }
            });
    };

    createCSAuthData = (email, password) => {
        if (!firebase.apps.length) {
            return;
        }
        // let user = null;
        // this.auth.createUserWithEmailAndPassword(email, password)
        //     .then(() => {
        //         user = firebase.auth().currentUser;
        //     })
        //     .then(() => {

        //         user.updateProfile({
        //             displayName: 'cs',
        //         })
        //     })
        //     .catch((error) => {
        //         // Handle Errors here.
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // ...
        //         console.log(errorCode, 'errorCode')
        //         console.log(errorMessage, 'error.message')
        //     });

        firebase.auth().fetchSignInMethodsForEmail(email)
            .then(providers => {
                console.log(providers.length, 'providers.length');
                // if providers.length === 0 that mean's the user is not available 
                if (providers.length === 0) {
                    this.auth.createUserWithEmailAndPassword(email, password)
                        .then(evt => {
                            evt.user.updateProfile({
                                displayName: 'cs',
                            })
                        })
                        .catch((error) => {
                            // Handle Errors here.
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            // ...
                            console.log(errorCode, 'errorCode')
                            console.log(errorMessage, 'error.message')
                        });
                } else {
                    // has signed up
                    console.log('nothing come heres')

                    // this.db.ref().child('users').child(email).setWithPriority({
                    //     displayName: 'rm',
                    // });
                    // this.db.ref().child('users').child(email);
                }
            });
    };

    createCSData = (data) => {
        if (!firebase.apps.length) {
            return;
        }

        this.db.ref().child('CS')
            .push({
                // adUserID: splitEmailTOadUserID[0],
                adUserID: data.adminId,
                email: data.email,
                count: 0,
                id: 'cs',
                token: '',
                image: 'https://pngimage.net/wp-content/uploads/2018/05/customer-care-logo-png-4.png',
                timestamp: new Date().getTime(),
            });
    };

    signInFirebaseData = (email, password) => {
        if (!firebase.apps.length) {
            return;
        }
        this.auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
                console.log(errorCode, 'errorCode')
                console.log(errorMessage, 'error.message')
            });
    };

    currentUser = () => {
        if (!this.auth) {
            return;
        }

        const user = firebase.auth().currentUser;

        // console.log(user, 'firebase user firebase user')

        if (user) {
            return user;
        } else {
            this.onAuthStateChanged(user => {
                // console.log(user, 'auhte');
                return user;
            })
        }
    };

   

   
    getMsgs = () => {
        if (!firebase.apps.length) {
            return;
        }
        return new Promise((resolve, reject) => {
            this.db.ref().child('Messages')
                .on('value', snapshot => {
                    const MSGs = snapshot.val();
                    resolve(MSGs);
                });
        });
    };

    checkUserInCSNode = (email) => {

        if (!firebase.apps.length) {
            return;
        }
        return new Promise((resolve, reject) => {
            this.db.ref(`CS`)
                .orderByChild('email').equalTo(`${email}`)
                .on('value', snapshot => {
                    const user = snapshot.val();

                    Object.keys(user).map(ke => {
                        return resolve(user[ke])
                    });
                })
        });
    };

    checkUserInRMNode = (email) => {

        if (!firebase.apps.length) {
            return;
        }
        return new Promise((resolve, reject) => {
            this.db.ref(`RM`)
                .orderByChild('email').equalTo(`${email}`)
                .on('value', snapshot => {
                    const user = snapshot.val();

                    Object.keys(user).map(ke => {
                        return resolve(user[ke])
                    });
                })
        });
    };


    checkUserInChatNode = (adUserID) => {

        if (!firebase.apps.length) {
            return;
        }
        return new Promise((resolve, reject) => {
            this.db.ref(`Chat`)
                .orderByKey().equalTo(`${adUserID}`)
                .on('value', snapshot => {
                    const user = snapshot.val();
                    if (user !== null) {
                        Object.keys(user).map(key => {

                            const checkType = Array.isArray(user[key].chatList);

                            // console.log(checkType, 'checkType')

                            if(checkType === false){
                                user[key].chatList = Object.entries(user[key].chatList).filter(Boolean);
                            } else {
                                user[key].chatList = user[key].chatList.filter(Boolean);
                            }
                        })
                        return resolve(user);
                    }
                })
        });
    };

    updateUserData = (user) => {
        if (!firebase.apps.length) {
            return;
        }
        return this.db.ref(`users/${user.uid}`)
            .set(user);
    };

    onAuthStateChanged = (callback) => {
        // console.log('yh is here')
        if (!this.auth) {
            return;
        }
        this.auth.onAuthStateChanged(callback);
    };

    signOut = () => {
        if (!this.auth) {
            return;
        }
        this.auth.signOut();
    }
}

const instance = new firebaseService();

export default instance;
