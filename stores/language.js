import { writable } from 'svelte/store';
import lsm from '../script/LocalStorageManager.js';

let store = {
	login: "Login",
	username:"Username",
	emailAddress:"Email address",
	password:"Password",
	rememberMe:"Remember me",
	forgotPasswordQ: "Forgot password?",
	unknownValidationError: "Unknown validation error",
	register: "Register",
	confirmPassword: "Confirm password",
	iReadTheTermsOfUse: "I read the terms of use",
	summary: "Summary",
	previous: "Previous",
	next: "Next",
	quantity: "Quantity",
	summary: "Summary",
	subtotal: "Subtotal",
	discount: "Discount",
	shipping: "Shipping",
	total: "Total",
	checkout: "Checkout",
	loading: "Loading",
	toPopATag: "to pop a tag",
};

if(lsm.check() && localStorage["language"]){
	try{
		store = JSON.parse(localStorage["language"]);
		console.info("User Session store loaded from local storage.");
	}catch(e){
		console.info("Could not load user language: ",localStorage["language"],e);
	}
}

const language = writable(store);

export default storageExists;