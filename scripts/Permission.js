export default function Permission(){}

Permission.requestNotificationPermission = function(){
	return new Promise(resolve=>{
		Notification
			.requestPermission()
			.then(function(permission) {
				resolve(permission==="granted")
			});
	});
};