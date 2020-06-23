export default function Permission(){}

Permission.requestNotificationPermission = function(){
	return new Promise(resolve=>{
		if(!window.cordova){
			Notification
			.requestPermission()
			.then(function(permission) {
				resolve(permission==="granted")
			});
		}else{
			cordova.plugins.notification.local.hasPermission(function (granted) { 
				resolve(granted);
			});
		}
	});
};