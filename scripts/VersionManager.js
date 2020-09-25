export default function VersionManager(){}
VersionManager.watch = function(callback,options={}){
    return new Promise(resolve=>{
        options.delay = options.delay?options.delay:1 * 1000;
        options.attempts = options.attempts?options.attempts:7;
        let localAttempts = 0;
        (async function poll(){
            options.attempts++;
            try{
                if(localAttempts >= options.attempts && !Version){
                    console.warn("It looks like the \"window.Version\" class is not loading.");
                }else{
                    if(Version){
                        if(callback) {
                            await callback(Version);
                            resolve();
                        }
                    }else setTimeout(poll,options.delay);
                }
            }catch(e){
                setTimeout(poll,options.delay);
            }
        })();
    });
}