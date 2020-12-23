import {Writable, writable} from 'svelte/store';
declare global {
    interface Window { cordova: any; }
}
const worker:Writable<any> = writable(null);
export default worker;