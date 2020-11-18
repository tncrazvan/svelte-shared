<style>
	:global(.grid){
		display: grid;
	}

	/*WIDTH*/
	:global(.grid-cols-1){
		grid-template-columns: 1fr;
	}
	:global(.grid-cols-2){
		grid-template-columns: repeat(2,1fr);
	}
	:global(.grid-cols-3){
		grid-template-columns: repeat(3,1fr);
	}
	:global(.grid-cols-4){
		grid-template-columns: repeat(4,1fr);
	}
	:global(.grid-cols-5){
		grid-template-columns: repeat(5,1fr);
	}
	:global(.grid-cols-6){
		grid-template-columns: repeat(6,1fr);
	}
	:global(.grid-cols-7){
		grid-template-columns: repeat(7,1fr);
	}
	:global(.grid-cols-8){
		grid-template-columns: repeat(8,1fr);
	}
	:global(.grid-cols-9){
		grid-template-columns: repeat(9,1fr);
	}
	:global(.grid-cols-10){
		grid-template-columns: repeat(10,1fr);
	}

	/*WIDTH*/
	:global(.grid-rows-1){
		grid-template-rows: 1fr;
	}
	:global(.grid-rows-2){
		grid-template-rows: repeat(2,1fr);
	}
	:global(.grid-rows-3){
		grid-template-rows: repeat(3,1fr);
	}
	:global(.grid-rows-4){
		grid-template-rows: repeat(4,1fr);
	}
	:global(.grid-rows-5){
		grid-template-rows: repeat(5,1fr);
	}
	:global(.grid-rows-6){
		grid-template-rows: repeat(6,1fr);
	}
	:global(.grid-rows-7){
		grid-template-rows: repeat(7,1fr);
	}
	:global(.grid-rows-8){
		grid-template-rows: repeat(8,1fr);
	}
	:global(.grid-rows-9){
		grid-template-rows: repeat(9,1fr);
	}
	:global(.grid-rows-10){
		grid-template-rows: repeat(10,1fr);
	}
	
	/*COL GAP*/
	:global(.grid-col-gap-1){
		column-gap: 1rem;
	}
	:global(.grid-col-gap-2){
		column-gap: 2rem;
	}
	:global(.grid-col-gap-3){
		column-gap: 3rem;
	}
	:global(.grid-col-gap-4){
		column-gap: 4rem;
	}
	:global(.grid-col-gap-5){
		column-gap: 5rem;
	}
	:global(.grid-col-gap-6){
		column-gap: 6rem;
	}
	:global(.grid-col-gap-7){
		column-gap: 7rem;
	}
	:global(.grid-col-gap-8){
		column-gap: 8rem;
	}
	:global(.grid-col-gap-9){
		column-gap: 9rem;
	}
	:global(.grid-col-gap-10){
		column-gap: 10rem;
	}

	/*ROW GAP*/
	:global(.grid-row-gap-1){
		row-gap: 1rem;
	}
	:global(.grid-row-gap-2){
		row-gap: 2rem;
	}
	:global(.grid-row-gap-3){
		row-gap: 3rem;
	}
	:global(.grid-row-gap-4){
		row-gap: 4rem;
	}
	:global(.grid-row-gap-5){
		row-gap: 5rem;
	}
	:global(.grid-row-gap-6){
		row-gap: 6rem;
	}
	:global(.grid-col-gap-7){
		row-gap: 7rem;
	}
	:global(.grid-row-gap-8){
		row-gap: 8rem;
	}
	:global(.grid-row-gap-9){
		row-gap: 9rem;
	}
	:global(.grid-row-gap-10){
		row-gap: 10rem;
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