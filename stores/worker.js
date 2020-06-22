import {writable} from 'svelte/store';

const worker = writable(null);
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.getRegistrations().then(registrations => {
		if(registrations.length > 0){
		  worker.set(registrations[0]);
		}
	});
}else{
	console.warn("Service worker not found!");
}

export default worker;