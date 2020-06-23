import {writable} from 'svelte/store';

const worker = writable(null);
if (!window.cordova && 'serviceWorker' in navigator) {
	navigator.serviceWorker.getRegistrations().then(registrations => {
		if(registrations.length > 0){
			let tmp = null;
			for(let i = 0; i < registrations.length; i++){
				if(registrations[i].active && window.location.origin+"/worker.js" === registrations[i].active.scriptURL){
					tmp = registrations[i];
					break;
				}
			}
			if(tmp === null){
				console.log("Service worker 'worker.js' not found!");
			}else{
				console.log("Service worker 'worker.js' found!");
				worker.set(tmp);
			}
		}else{
			(async ()=>{
				console.log("Attempting to register service worker 'worker.js'...");
				let res = await navigator.serviceWorker.register("worker.js");
				console.log("Service worker 'worker.js' registration attempt result:",res);
			})();
		}
	});
}else{
	if(window.cordova)
		console.warn("Service will not be registered since you're running a cordova applicaiton!");
	else
		console.warn("Service worker 'worker.js' not found!");
}

export default worker;