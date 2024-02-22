function main (){
	noHoisting();
	hoisting();
}
	// Bad way of writing program
function noHoisting(){
	//variable usage
	var c = a + b;
	console.log(c);
	//variable defination
	a = 5;
	b = 6;
	//variable declaration
	var a;
	var b;
}
// good way of writing program
function hoisting (){
	// variable declaration
	 a = 5;
	 b = 6;
	 //variable usage
	 c = a + b;
	 console.log(c);
	l
}