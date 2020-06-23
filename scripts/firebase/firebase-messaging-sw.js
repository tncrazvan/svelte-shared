importScripts("static/firebase/firebase-app.js")
importScripts("static/firebase/firebase-messaging.js")
let firebaseConfig = {
	apiKey: "AIzaSyBdJAMoMfZoCtMdU0lhIkVoOPlz5PQpsjQ",
	authDomain: "sferalite.firebaseapp.com",
	databaseURL: "https://sferalite.firebaseio.com",
	projectId: "sferalite",
	storageBucket: "sferalite.appspot.com",
	messagingSenderId: "1098917894766",
	appId: "1:1098917894766:web:d73e87f131c2128126a47f",
	measurementId: "G-7GG4KYRTMH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload){
	const title = "hello world";
	const options = {
		body: payload.status
	};
	return self.registration.showNotification(title,options);
});