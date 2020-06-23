<script>
	// Your web app's Firebase configuration
	export let config = {
		apiKey: "AIzaSyBdJAMoMfZoCtMdU0lhIkVoOPlz5PQpsjQ",
		authDomain: "sferalite.firebaseapp.com",
		databaseURL: "https://sferalite.firebaseio.com",
		projectId: "sferalite",
		storageBucket: "sferalite.appspot.com",
		messagingSenderId: "1098917894766",
		appId: "1:1098917894766:web:d73e87f131c2128126a47f",
		measurementId: "G-7GG4KYRTMH"
	};
	export let token;
	export let onMessage;
	export let onError;
	export let onPermissionGranted;
	// Initialize Firebase
	window.firebase.initializeApp(config);
	const messaging = window.firebase.messaging();
	messaging.requestPermission()
	.then(()=>{
		console.log("Permission granted");
		return messaging.getToken();
	})
	.then(t=>{
		token = t;
		if(onPermissionGranted) onPermissionGranted(token);
	})
	.catch(err=>{
		if(onError) onError(err);
	})
	messaging.onMessage(payload=>{
		onMessage(payload);
	});
</script>