export default function uuid(){
	let dt = new Date().getTime();
	let uuid = 'xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		 let r = (dt + Math.random()*16)%16 | 0;
		 dt = Math.floor(dt/16);
		 return (c=='x' ? r :(r&0x3|0x8)).toString(16);
	});
	return uuid;
}