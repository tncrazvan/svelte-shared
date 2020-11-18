<style>
	:global(.grid){
		display: grid;
	}
	:global(.grid-width-1){
		grid-template-columns: 1fr;
	}
	:global(.grid-width-2){
		grid-template-columns: repeat(2,1fr);
	}
	:global(.grid-width-3){
		grid-template-columns: repeat(3,1fr);
	}
	:global(.grid-width-4){
		grid-template-columns: repeat(4,1fr);
	}
	:global(.grid-width-5){
		grid-template-columns: repeat(5,1fr);
	}
	:global(.grid-width-6){
		grid-template-columns: repeat(6,1fr);
	}
	:global(.grid-width-7){
		grid-template-columns: repeat(7,1fr);
	}
	:global(.grid-width-8){
		grid-template-columns: repeat(8,1fr);
	}
	:global(.grid-width-9){
		grid-template-columns: repeat(9,1fr);
	}
	:global(.grid-width-10){
		grid-template-columns: repeat(10,1fr);
	}
	
	:global(.grid-x-center){
		display: grid;
		justify-self: center;
		justify-items: center;
		justify-content: center;
	}
	:global(.grid-x-left){
		display: grid;
		justify-self: left;
		justify-items: left;
		justify-content: left;
	}
	:global(.grid-x-right){
		display: grid;
		justify-self: right;
		justify-items: right;
		justify-content: right;
	}
	:global(.grid-y-center){
		display: grid;
		align-self: center;
		align-items: center;
		align-content: center;
	}
	:global(.grid-y-top){
		display: grid;
		align-self: start;
		align-items: start;
		align-content: start;
	}
	:global(.grid-y-bottom){
		display: grid;
		align-self: end;
		align-items: end;
		align-content: end;
	}
</style>