import { writable } from 'svelte/store';
import localStorageExists from './localStorageExists.js';
let store = false;
let $localStorageExists = false;
const unsubscribe = localStorageExists.subscribe(_localStorageExists=>$localStorageExists=_localStorageExists);
unsubscribe();

if($localStorageExists && localStorage["rememberMe"]){
	try{
		store = JSON.parse(localStorage.getItem("rememberMe"));
		console.info("rememberMe store loaded from local storage.");
	}catch(e){
		console.info("Could not load rememberMe store.",e);
		store = false;
	}
}

const rememberMe = writable(store);

if($localStorageExists){
	rememberMe.subscribe($rememberMe=>{
		localStorage.setItem("rememberMe",JSON.stringify($rememberMe));
	});
}

export default rememberMe;