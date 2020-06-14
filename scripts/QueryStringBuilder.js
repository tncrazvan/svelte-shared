export default function QueryStringBuilder(){
	let queries = {};
	this.build=function(){
		return result;
	}
	this.set=function(key,value){
		queries[key+""] = value+"";
		return this;
	};

	this.get=function(){
		let result = "";
		for(let key in queries){
			result +=(result===""?"?":"&")+encodeURIComponent(key)+"="+encodeURIComponent(queries[key]);
	  	}
		return result;
	}
}