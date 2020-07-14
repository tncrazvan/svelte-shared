import worker from '../stores/worker.js';
import Permission from './Permission.js';
export default async function notify(title,body,vibrate=[200, 100, 200],icon='static/images/logo.png',tag=''){
	debugger;
	if(!await Permission.requestNotificationPermission()){
		console.warn("Notification won't be sent because notification permission has not been granted.");
		return;
	}
	if(!window.cordova){
		(worker.subscribe($worker=>{
			if($worker === null){
				console.warn("You need to install the main worker before sending a notification.");
				return;
			}
			$worker.active.postMessage(JSON.stringify({
				action: "send-notification",
				body: {
					title,
					body,
					vibrate,
					icon,
					tag
				}
			}));
		}))();
	}else{
		debugger;
		cordova.plugins.notification.local.schedule({
			title,
			text: body,
			foreground: true
	  });
	}
}