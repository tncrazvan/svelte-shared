import worker from '../stores/worker.js';
export default function WorkerMessenger(){}

WorkerMessenger.setVar = function(body){
	(worker.subscribe($worker=>{
		let action = "set-vars";
		$worker.postMessage({action,body});
	}))();
};