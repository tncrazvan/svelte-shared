import worker from '../stores/worker.js';
window.addEventListener('beforeinstallprompt', (request:any) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	request.preventDefault();
	request.prompt();
});

export default function install():Promise<boolean>{
	return new Promise(async resolve=>{
		if ('serviceWorker' in navigator) {
			let reg:ServiceWorkerRegistration = await navigator.serviceWorker.register("worker.js");
			worker.set(reg);
			
		}else{
			console.warn("The ServiceWorker API does not seem to be available. Make sure youre website is secure.");
			resolve(false);
		}
	});
}