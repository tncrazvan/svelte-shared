import worker from '../stores/worker.js';
export default function toggleNotifications(trueOrFalse){
	(worker.subscribe($worker=>{
		$worker.postMessage({
			action: "set-vars",
			body: {
				notifications:{
					enabled: trueOrFalse
				}
			}
		});
	}))();
}