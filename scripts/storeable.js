import { writable } from 'svelte/store';
import localStorageExists from '../stores/localStorageExists.js';

let $localStorageExists = false;
const unsubscribe = localStorageExists.subscribe(_localStorageExists=>$localStorageExists=_localStorageExists);
unsubscribe();

export default function storeable(storeName, store){
	if($localStorageExists && localStorage[storeName]){
		try{
			store = JSON.parse(localStorage[storeName]);
		}catch(e){
			console.errpr("Could not load store \""+storeName+"\".",e);
			store = null;
		}
	}
	const result = writable(store);
	if($localStorageExists){
		result.subscribe($result=>{
			localStorage.setItem(storeName,JSON.stringify($result));
		});
	}
	return result;
}