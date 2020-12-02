import worker from '../stores/worker.js';

export default function install(callback:Function):Promise<boolean>{
	return new Promise(async resolve=>{
		if ('serviceWorker' in navigator) {
			let reg:ServiceWorkerRegistration = await navigator.serviceWorker.register("worker.js");
			worker.set(reg);
			window.addEventListener('beforeinstallprompt', (request:any) => {
				// Prevent Chrome 67 and earlier from automatically showing the prompt
				request.preventDefault();
				request.prompt();
				request
					.userChoice
					.then(async (result) => {
						const accepted = result === 'accepted';
						debugger;
						if (!accepted && 'serviceWorker' in navigator) {
							const registrations = await navigator.serviceWorker.getRegistrations();
							if(registrations.length > 0){
								for(let registration of registrations) {
									registration.unregister();
								}
							}
							
							if(callback) callback(accepted);
							resolve(request)
						}
						
					});
			});
		}else{
			console.warn("The ServiceWorker API does not seem to be available. Make sure youre website is secure.");
			resolve(false);
		}
	});
}