/*Do not declare variables with nothing
 If you declare variables with nothing, we are missing the security
 */
 x = 1; //global variable
function main(){
	console.log("main function start");
	//redeclaration();
	//usageBeforeDeclaration();
	blockScope();	
	//reAssignment ();	
	console.log("main function end");
 }
function redeclaration(){
	 console.log("redeclaration method start");
	 let n1;
	// let n1; // identifier 'n1' has already been declared
	 console.log("redeclaration method end");
 }
function usageBeforeDeclaration(){
	 console.log("usageBeforeDeclaration method start");
//	 let n3 = n1 + n2; // expecting error here.
					// error : cannot access 'n1' before initialization.
	let n1 = 12;
	 let n2 = 13;
	let n3 = n1 + n2;
	console.log("value = "+n3);
	 console.log("type of = "+typeof n3);
	 console.log("usageBeforeDeclaration method end");
 }
 function declarationAndDefinationInMultipleLine () {
	 let n1 ; //declaration
	 let n2;
	 n1 = 12; //defination
	 n2 = 13;
}
function declarationAndDefinationInSingleLine () {
	let n1 = 12; //declaration + defination
	let n2 = 13; //declaration + defination
}

function reAssignment() {
	let n1 = 12; 
	n1 = 13 ;
	n1 = 14 ;
	n1 = 15;
	//let n1;
	console.log("n1 = "+n1);
}
function blockScope() {
	console.log("blockScope function start");
	var x = 2; // local to the function variable
	let z = 6;
	{
		let y = 5;
		let x = 3; // block variable
		console.log("x = "+x);
		console.log("z = "+z);
	}
	console.log("x = "+x);
	console.log("y = "+y);
	console.log("blockScope function end");
}
	
	

