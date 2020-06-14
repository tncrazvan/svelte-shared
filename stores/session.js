import { writable } from 'svelte/store';
import localStorageExists from './localStorageExists.js';
let store = null;
let $localStorageExists = false;
const unsubscribe = localStorageExists.subscribe(_localStorageExists=>$localStorageExists=_localStorageExists);
unsubscribe();

if($localStorageExists && localStorage["session"]){
	try{
		store = JSON.parse(localStorage.getItem("session"));
		console.info("User Session store loaded from local storage.");
	}catch(e){
		console.info("Could not load user session.",e);
		store = null;
	}
}

const session = writable(store);

if($localStorageExists){
	session.subscribe($session=>{
		localStorage.setItem("session",JSON.stringify($session));
	});
}

export default session;