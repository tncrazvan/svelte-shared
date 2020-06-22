import {writable} from 'svelte/store';

const isStandalone = writable(window.matchMedia('(display-mode: standalone)').matches);

export default isStandalone;