import worker from '../stores/worker.js';
import Permission from './Permission.js';
export default async function notify(title,body,vibrate=[200, 100, 200],icon='static/images/logo.png',tag=''){
	if(!await Permission.requestNotificationPermission()){
		console.warn("Notification won't be sent because notification permission has not been granted.");
		return;
	}
	(worker.subscribe($worker=>{
		if($worker === null && $worker.active){
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
}