/*Global Scope variable start 1*/
g1 = 1; // global scope undeclared type variable.
var g2 = 2; //Global Scope let type variable.
let g3 = 3; //Global Scope let type variable.
/* Global scope variables end 1*/
console.log("g1 value = "+ g1+ "and type of"+typeof g1);
console.log("g2 value = "+ g2+ "and type of"+typeof g2);
console.log("g3 value = "+ g3+ "and type of"+typeof g3);

function functionScope(){
	/* function scope variables */
	f1 = 4; // function scope undeclared type variable
	//Bad syntax , use let instead of undeclared
	// f1 is Global scope, even if you are assigning value to the variable
	//function scope  var type variable.
	var f2 = 5;
	//Bad syntax, use let  instead of var
	// f2 is Global scope, even if you are assigning value to the variable.
	let f3 = 6; // function Scope let type variable
	// Good practice
	// we can access function scope variable in block scope
console.log("f1 value = "+f1+ "and type of"+typeof f1);
console.log("f2 value = "+f2+ "and type of"+typeof f2);
console.log("f3 value = "+f3+ "and type of"+typeof f3);
// we can access global scope variables in function.
console.log("g1 value = "+ g1+ "and typeof"+typeof g1);
console.log("g2 value = "+ g2+ "and type of"+typeof g2);
console.log("g3 value = "+ g3+ "and type of"+typeof g3);
{
	/*block scope variable*/
	/* block scope undeclared type variable*/
	b1 = 7;
	//bad syntax use let instead of var
	// b1 is global scope , even if you are assigning value to the variable.
	//let b1 = 7; //Good syntax
	
	/* block Scope var type variable*/
	var b2 = 8;//Bad syntax, use let instead of var.
	//let b2 = 8;//Good syntax
	
	/*block scope let type variable*/
	let b3 = 9;//Good syntax
	/*Block Scope variable end*/
	}
// we can acces block scope variables in function scope.
//console.log("b1 value = "+b1+ "and type of"+typeof b1);
//console.log("b2 value = "+b2+ "and type of"+typeof b2);
//console.log("b3 value = "+b3+ "and type of"+typeof b3);

/*function scope variables end*/
}
functionScope();
//we cant access block scope variables in a function scope
console.log("b1 value = "+b1+ "and type of"+typeof b1);
//console.log("b2 value = "+b2+ "and type of"+typeof b2);
console.log("b3 value = "+b3+ "and type of"+typeof b3);
