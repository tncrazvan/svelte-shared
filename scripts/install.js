/**
 * Makes a request to install this website as a Progressive Web Application.
 * @param {*} worker worker relative filename
 * @returns a Promise which in turn returns the reuqest to the browser.
 * Use this request to finalize the installation.
 * Eample: 
 * let request = await install();
 *		request.prompt();
 *		request
 *			.userChoice
 *			.then((result) => {
 *				console.log(result);
 *			});
 */
export default async function install(worker='/worker.js'){
	console.log("test");
	return new Promise(resolve=>{
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register(worker);
			window.addEventListener('beforeinstallprompt', (request) => {
				// Prevent Chrome 67 and earlier from automatically showing the prompt
				request.preventDefault();
				resolve(request)
			});
		}
	});
}