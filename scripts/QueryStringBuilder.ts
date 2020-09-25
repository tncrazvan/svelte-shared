export default class QueryStringBuilder{

	private url:string;
	private queries = {
		/*<COL_NAME>: {
			equals: {},
			notEquals: {},
			greaterThan: {},
			lesserThan: {},
			empty: {},
			notEmpty: {},
			between: {},
		}*/
	};
	constructor(url){
		this.url = url;
	}

	like(key,value):void{
		this.equals(key,"%"+value+"%");
	}

	equals(key,value){
		if(!this.queries[key+""]) this.queries[key+""] = {};
		if(!this.queries[key+""].equals) this.queries[key+""].equals = [];
		this.queries[key+""].equals.push(value+"");
		return this;
	};
	notEquals(key,value){
		if(!this.queries[key+""]) this.queries[key+""] = {};
		if(!this.queries[key+""].notEquals) this.queries[key+""].notEquals = [];
		this.queries[key+""].notEquals.push(value+"");
		return this;
	};
	greaterThan(key,value){
		if(!this.queries[key+""]) this.queries[key+""] = {};
		if(!this.queries[key+""].greaterThan) this.queries[key+""].greaterThan = [];
		this.queries[key+""].greaterThan.push(value+"");
		return this;
	};
	lesserThan(key,value){
		if(!this.queries[key+""]) this.queries[key+""] = {};
		if(!this.queries[key+""].lesserThan) this.queries[key+""].lesserThan = [];
		this.queries[key+""].lesserThan.push(value+"");
		return this;
	};
	empty(key){
		if(!this.queries[key+""]) this.queries[key+""] = {};
		if(!this.queries[key+""].empty) this.queries[key+""].empty = true;
		return this;
	};
	notEmpty(key){
		if(!this.queries[key+""]) this.queries[key+""] = {};
		if(!this.queries[key+""].notEmpty) this.queries[key+""].notEmpty = true;
		return this;
	};
	between(key,start,end){
		if(!this.queries[key+""]) this.queries[key+""] = {};
		if(!this.queries[key+""].between) this.queries[key+""].between = [];
		this.queries[key+""].between.push({start,end});
		return this;
	};

	toString(){
		let qss = new Array();
		for(let colmnName in this.queries){
			let operations = this.queries[colmnName];
			let qs = "";
			let i = 0;
			for(let operationName in operations){
				switch(operationName){
					case "equals":
						qs += encodeURIComponent(colmnName)
						qs += i > 0?";":"="
						for(let j = 0; j < operations[operationName].length; j++){
							qs += (j>0?';=':'')+encodeURIComponent(operations[operationName][j]);
						}
					break;
					case "notEquals":
						qs += encodeURIComponent(colmnName)
						qs += i > 0?";":"=#"
						for(let j = 0; j < operations[operationName].length; j++)
							qs += (j>0?';=#':'')+encodeURIComponent(operations[operationName][j]);
					break;
					case "greaterThan":
						qs += encodeURIComponent(colmnName)
						qs += i > 0?";":"=>"
						for(let j = 0; j < operations[operationName].length; j++)
							qs += (j>0?';=>':'')+encodeURIComponent(operations[operationName][j]);
					break;
					
					case "lesserThan":
						qs += encodeURIComponent(colmnName)
						qs += i > 0?";":"=<"
						for(let j = 0; j < operations[operationName].length; j++)
							qs += (j>0?';=<':'')+encodeURIComponent(operations[operationName][j]);
					break;
					
					case "empty":
						qs += encodeURIComponent(colmnName)
						qs += i > 0?";":"="
						qs += operations[operationName]? "!":""
					break;

					case "notEmpty":
						qs += encodeURIComponent(colmnName)
						qs += i > 0?";":"="
						qs += operations[operationName]? ".":""
					break;

					case "between":
						qs += encodeURIComponent(colmnName)
						qs += i > 0?";":"="
						for(let j = 0; j < operations[operationName].length; j++)
							qs += (j>0?';':'')+encodeURIComponent(operations[operationName][j].start)+":"+encodeURIComponent(operations[operationName][j].end);
					break;
				}
				i++;
			}
			qss.push(qs);
		}

		return this.url+"?"+qss.join("&");
	}
}