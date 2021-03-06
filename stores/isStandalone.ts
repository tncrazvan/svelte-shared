import {Writable, writable} from 'svelte/store';
declare global {
    interface Window { cordova: any; }
}
const isStandalone:Writable<any> = writable(window.cordova || window.matchMedia('(display-mode: standalone)').matches);

export default isStandalone;