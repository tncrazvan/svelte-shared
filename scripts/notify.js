import worker from '../stores/worker.js';
export default function notify(title,body,vibrate=[200, 100, 200],icon='static/images/logo.png',tag=''){
	(worker.subscribe($worker=>{
		$worker.postMessage({
			action: "send-notification",
			body: {
				title,
				body,
				vibrate,
				icon,
				tag
			}
		});
	}))();
}