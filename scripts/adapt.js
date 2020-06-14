import isDesktop from '../store/isDesktop.js';
let running = false;
export default function adapt(){
	if(running) return;
	running = true;
	function poll(){
		render(document.body.getBoundingClientRect());
		setTimeout(poll,100);
	}

	function render(rect){
		if(rect.width > 992)
			isDesktop.set(992); //value in line with https://materializecss.com/grid.html#grid-responsive
		else
			isDesktop.set(false);
	}

	poll();
}