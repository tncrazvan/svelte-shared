let request;
window.addEventListener('beforeinstallprompt', (r:any) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	r.preventDefault();
	request = r;
});
export default function install():void{
	request.prompt();
}