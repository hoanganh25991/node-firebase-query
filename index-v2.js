var config = {
    apiKey: "AIzaSyAs7p7m5I8AQs2-P702uhiEKekZ4IUAjaE",
    authDomain: "taskerbroadlink.firebaseapp.com",
    databaseURL: "https://taskerbroadlink.firebaseio.com",
    storageBucket: "taskerbroadlink.appspot.com",
    messagingSenderId: "588666590019"
};

var fb = firebase.initializeApp(config);

// var database = firebase.database();

// database.ref('android')
//     .startAt('4a:d9:e7:21:db:40')
//     .endAt('4a:d9:e7:21:db:40')
//     .once('value', function(snap) {
//         console.log('bssid', snap.val());
//     });
// ;

/* auth */
var email = 'lehoanganh25991@gmail.com';
// var email = 'lehoanasdfasf91@gmail.com';
var password = 'taskerbroadlink';

var fbPromise = firebase.auth().signInWithEmailAndPassword(email, password);

fbPromise.catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
    } else {
        alert(errorMessage);
    }
    console.log(error);
});

fbPromise.then(function() {
    console.log('sign in success, %s, %s', email, password);
    var database = firebase.database();
    database.ref('android')
        .startAt('4a:d9:e7:21:db:40', 'bssid')
        .endAt('4a:d9:e7:21:db:40', 'bssid')
        .once('value', function(snap) {
            console.log('bssid', snap.val());
        });

    database.ref('android/ad75b08ca48a911e')
        .once('value', function (snap){
            console.log('fetched ', snap.val());
        });

    var time = new Date();

    database.ref('android')
        // .indexOn('bssid')
        .orderByChild('bssid')
        .equalTo('4a:d9:e7:21:db:40')
        .once('value', function (snap){
            var time2 = new Date();
            console.log((time2 - time) / 1000 + ' seconds');
            console.log('fetched first once', snap.val());
        });

    var rootRef = fb.database().ref();

    var androidRef = rootRef.child('android');

    // androidRef.isEqual(rootRef);  // false
    // androidRef.isEqual(rootRef.child("android"));  // true
    // androidRef.parent.isEqual(rootRef);  // true


});