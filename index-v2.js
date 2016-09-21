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
    // database.ref('android')
    //     .startAt('4a:d9:e7:21:db:40', 'bssid')
    //     .endAt('4a:d9:e7:21:db:40', 'bssid')
    //     .once('value', function(snap) {
    //         console.log('bssid', snap.val());
    //     });

    // database.ref('android/ad75b08ca48a911e')
    //     .once('value', function (snap){
    //         console.log('fetched ', snap.val());
    //     });

    var stopWatch = function(){
        var stopWatch = this;
        var startTime, stopTime, dif;

        stopWatch.start = function(){
            startTime = new Date();
        };

        stopWatch.stop = function(){
            stopTime = new Date();
            stopWatch.dif();
        };

        stopWatch.dif = function(){
            var dif = (stopTime - startTime) / 1000 + ' seconds';
            console.log(dif);
        };

        return stopWatch;
    }();

    // stopWatch.start();
    // database.ref('android')
    //     // .indexOn('bssid')
    //     .orderByChild('bssid')
    //     // .equalTo('4a:d9:e7:21:db:40')
    //     .equalTo('2a:a4:3c:db:7b:80')
    //     .once('value', function (snap){
    //         stopWatch.stop();
    //         // var time2 = new Date();
    //         // console.log((time2 - time) / 1000 + ' seconds');
    //         console.log('fetched first once', snap.val());
    //     });

    stopWatch.start();
    database.ref('android/ad75b08ca48a911e/devices')
        .orderByChild('mac')
        .equalTo('b4:43:0d:10:1a:a8')
        .once('value', function (snap){
            stopWatch.stop();
            console.log('base on device.mac', snap.val());

            // var androidX = snap.val()[0];

            // var device = androidX.devices['b4:43:0d:10:1a:a8'];
            var device = snap.val();

            device.online ? function(){
                //try to ip address
                console.log(device.ip);
            }() : 
            function(){
                //move on
                console.log('device is offline, move on');
            }();
        });


});