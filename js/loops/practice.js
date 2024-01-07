function main(){
 //forloopForTraingle();
 //leftTriangle();
 // leftTriangle1();
 //leftTriangle2();
	reverseTriangle();
}
function forloopForTraingle(){
	let i;
	let j;
	let string = "";
	for (let i = 1; i <= 5; i++){
		for( let j = 1; j <= i; j++){
			string += j;
			
		}
		string += "\n";
	}
	console.log(string);
}
function leftTriangle(){
	let i;
	let j;
	pattern = "";
	for(i = 1; i<=6; i++){
		for(j=1; j<=i; j++){
			pattern += j; 
		}
	pattern += "\n";
	}
	console.log(pattern);
}
function leftTriangle1(){
	let i;
	let j;
	pattern = "";
	for(i = 1; i<=6; i++){
		for(j=1; j<=i; j++){
			pattern += i; 
		}
	pattern += "\n";
	}
	console.log(pattern);
}
function leftTriangle2(){
	let n = 4;
	let string = "";
	 let count = 1;
	 //external loop
	for(let i = 1; i<=n; i++){
		//internal loop
		for(let j=1; j<=i; j++){
			string += count;
		count++;
		}
	string += "\n";
	}
	console.log(string);
}

function reverseTriangle(){
	let i;
	let j;
	pattern = "";
	for(i = 1; i<=6; i++){
		for(j=1; j>=i-1; j++){
			pattern += i; 
		}
	pattern += "\n";
	}
	console.log(pattern);
}