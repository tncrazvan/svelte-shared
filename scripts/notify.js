import worker from '../stores/worker.js';
import Permission from './Permission.js';
export default async function notify(title,body,vibrate=[200, 100, 200],icon='static/images/logo.png',tag=''){
	if(!await Permission.requestNotificationPermission()){
		console.warn("Notification won't be sent because notification permission has not been granted.");
		return;
	}
	if(!window.cordova){
		(worker.subscribe($worker=>{
			if($worker === null){
				console.warn("You need to install the main worker before sending a notification. Please open the settigs seidemenu and click 'INSTALLA LOCALMENTE'.");
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
		// var date = new Date();
		
		// cordova.plugins.notification.local.schedule({
		// 	id: 1,
		// 	title: title,
		// 	message: body,
		// 	firstAt: date, // firstAt and at properties must be an IETF-compliant RFC 2822 timestamp
		// 	//every: "week", // this also could be minutes i.e. 25 (int)
		// 	//sound: "file://sounds/reminder.mp3",
		// 	icon: icon,
		// 	data: { meetingId:"123#fg8" }
		// });
		
		// cordova.plugins.notification.local.on("click", function (notification) {
		// 	console.log("notification data:",notification.data.meetingId);
		// });
	}
}