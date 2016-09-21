var firebase = require('firebase');

var googleConfig = require('./google-services');

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
// var config = {
//   apiKey: "<API_KEY>",
//   authDomain: "<PROJECT_ID>.firebaseapp.com",
//   databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
//   storageBucket: "<BUCKET>.appspot.com",
// };
var config = {
  apiKey: googleConfig.client[0].api_key[0].current_key,
  authDomain: googleConfig.project_info.project_id + '.firebaseapp.com',
  databaseURL: 'https://hoidev.firebaseio.com/',
  storageBucket: googleConfig.project_info.storage_bucket
};

var mainApp = firebase.initializeApp(config);

var database = mainApp.database();

var outlet = firebase.database().ref('outlet_13_daily_closures');

// outlet.on('value', function(snapshot) {
// 	// console.log(snapshot);
// 	var data = snapshot.val();
// 	console.log(data);
// });

/* listen to what changed */
// var commentsRef = firebase.database().ref('outlet_13_daily_closures');
// commentsRef.on('child_added', function(data) {
//   console.log(data.key, data.val().text, data.val().author);
// });

outlet.once('value').then(function(snapshot) {
	console.log(snapshot.val());
});