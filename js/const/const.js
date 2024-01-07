function main() {
	redeclaration();
	usageBeforeDeclaration();
	//declarationAndDefinationInSingleLine();
	//declarationAndDefinationInMultipleLine();   
    //declarationAndDefination();  
	// reassignment();
	//blockScope();
    // hoisting();
	//redeclarationAndBlockScope();
}

function redeclaration() {
	const x = 1;
//	const x = 2; //error : Identifier 'x' has already been declared
}
function usageBeforeDeclaration(){
//	const z = x + y; //error : cannot access 'x' before intialization
	const x = 1;
	const y = 2;
	const z = x + y;
	console.log("z = "+z);
}
function declarationAndDefinationInMultipleLine(){
//const x ; //declaration
	//SyntaxError:missing initializer in const declaration
//	 x = 2;//defination
}
function declarationAndDefinationInSingleLine(){
	const n1 = 2; //declaration + initialization
	//const n1 = 13; //declaration + initialization
}

function declarationAndDefination(){
	//const x ; //declaration //Syntax Error: missing initializer in const.
	//x = 2; //defination
	const x = 2;
	console.log(x);
}

function reassignment(){
	const num1 = 2; //declaration + defination	
  // num1 = 4; // typerror : Assignment to constant variable.
	const university = "JNTU"; //declaration + defination
	 university = "HCU"; // TypeError: Assignment to constant variable.
}

function blockScope(){
console.log("functionScope method start");
	const a = 2;
	{
		console.log("blockScope start");
		var x = 1;
		const y = 2;
		console.log(y);
		console.log("blockScope end");
	}
	console.log(a);
	console.log(x); // x can be used here.
	console.log(y); // ReferenceError: y  is not defined.
}

function hoisting() {
	//const z = x + y;
	//ReferenceError:cannot access 'x' before initialization.
	const x = 1;
	const y = 2;
	const z = x + y;
	console.log(z);
}

function redeclarationAndBlockScope(){
	var x = 1;
	const y = 2;
	console.log(x);
	console.log(y);
	{
		var x = 3;
		const y = 4;
		console.log(x);
		console.log(y);
	}
	console.log(x);
	console.log(y);
}
var x;
//let x;
//   	const x;