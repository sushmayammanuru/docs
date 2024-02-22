/*Do not declare variables with nothing
 If you declare variables with nothing, we are missing the security
 */
 function main(){
	console.log("main function start");
	//nothing();
	//var1();
	//nan();
	nan2();
	//redeclaration();
 // usageBeforeDeclaration();
	sushma();
	//blockScope();
	console.log("main function end");
 }
 function nothing(){
	console.log("nothing function is start");
	employeeId = 101;
	firstName = "Ravi";
	console.log("employeeId = "+employeeId);
	console.log("typeof employeeId = "+typeof employeeId);
	console.log("firstName = "+firstName);
	console.log("typeof firstName ="+typeof firstName);
	console.log("nothing function is end");
 }
 function var1(){
console.log("var1 function start");	 
var employeeId;
var firstName;
	console.log("value = "+employeeId);
	console.log("typeof = "+typeof employeeId);
	console.log("firstName = "+firstName);
	console.log("typeof firstname= "+typeof firstName);
	employeeId = 101;
	firstName = "surya";
	var lastName ;
	console.log("value id = "+employeeId);
	console.log("typeof id = "+typeof employeeId);
	console.log("value = "+firstName);
	console.log("typeof = "+typeof firstName);
	console.log("var method end");
 }
 function nan() {
	 var n1;
	 var n2 = 12;
	 var n3 = n1 + n2;
	 console.log("value of n3 = "+n3);
	 console.log("type of n3 = "+typeof n3);
	 console.log("nan method end");
 }
 function redeclaration(){
	 console.log("redeclaration method start");
	 var n1 = 13;
	 var n1 = 14; // expecting error here
	 var n1 = 23;
	console.log("value of n1 = "+n1);
	console.log("redeclaration method end");
 }
 function usageBeforeDeclaration() {
	 console.log("usageBeforeDeclaration method start");
	 var n3 = n1 + n2 // expecting error here //
	 var n1 = "12";
	 var n2 = "13";
	 console.log("value n3 = "+n3);
	 console.log("type of n3 = "+typeof n3);
	 console.log("usageBeforeDeclaration method end");
 }
function sushma() {
let	n1 = 12;
let	n2 = 13;
let n2 = 15;
var	n3 = n1 + n2;
console.log("value n3 = "+ n3);
	 
	var m3 = m1 + m2 ;
	var m1 = 14 ;
	var m2 = 15;
	console.log("value = "+m3);
}	
	function blockScope() {
	console.log("blockScope function start");
	var x = 2; // local to the function variable
	{
		var x = 3; // block variable
		console.log("x = "+x);
	}
	console.log("x = "+x);
	console.log("blockScope function end");
	}
	
 function nan2() {
	 console.log("nan function start");
	 var m1;
	 var m2 = "sushma";
	 var m3 = m1 + m2;
	 console.log("value of m3 = "+m3);
	 console.log("type of m3 = "+typeof m3);
	// console.log("nan method end");
		console.log("type of m1 = "+typeof m1);
		console.log("type of m2 = "+typeof m2);
	console.log("nan method end");
 }