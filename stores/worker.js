import {writable} from 'svelte/store';

const worker = writable(null);
async function find(registrations){
	if(registrations.length > 0){
		let reg = null;
		for(let i = 0; i < registrations.length; i++){
			if(registrations[i].active && window.location.origin+"/worker.js" === registrations[i].active.scriptURL){
				reg = registrations[i];
				break;
			}
		}
		if(reg === null){
			console.log("Service worker 'worker.js' not found!");
		}else{
			console.log("Service worker 'worker.js' found!");
			worker.set(reg);
		}
	}else{
		console.log("Attempting to register service worker 'worker.js'...");
		let reg = await navigator.serviceWorker.register("worker.js");
		worker.set(reg);
		console.log("Service worker 'worker.js' registered!");
	}
}

if (!window.cordova && 'serviceWorker' in navigator) {
	navigator.serviceWorker.getRegistrations().then(find);
}else{
	if(window.cordova)
		console.warn("Service will not be registered since you're running a cordova applicaiton!");
	else
		console.warn("Service worker 'worker.js' not found!");
}

export default worker;