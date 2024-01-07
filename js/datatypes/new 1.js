function main(){
		undefined1();
		null1();
		 number();
		string();
		boolean1();
		arrays();
		objects();
		bigint();
 }
 
function undefined1() 
{
	 let n1;
	 console.log(n1);
	 console.log("value of n1 = " + n1);
	 console.log(" The datatype of n1 = " +typeof n1);
}
function null1(){
	let n1 = null;
	 console.log(n1);
	 console.log("value of n1 = " + n1);
	 console.log(" The datatype of n1 = " + typeof n1);
}
function number(){
	let n1 = 253;
	console.log(n1);
	console.log("the value of n1 =" + n1);
	console.log("the datatype of n1 = " + typeof n1);
}
function string(){
	let n1 = "sushma";
	console.log(n1);
	console.log("the value of n1 =" + n1);
	console.log("the datatype of n1 = " + typeof n1);
}
function bigint(){
	let n1 = 900719925474091932n;
	console.log(n1);
	console.log("the value of n1 =" + n1);
	console.log("the datatype of n1 = " + typeof n1);
}
function arrays(){
	let a1 = [1,2];
	console.log(a1);
	console.log("the value of a1 =" + a1);
	console.log("the datatype of a1 = " + typeof a1);
}
function objects(){
	let o1 = {}
	console.log(o1);
	console.log("the value of o1 =" + o1);
	console.log("the datatype of o1 = " + typeof o1);
}
function boolean1(){
	let b1 = true;
	console.log(b1);
	console.log("the value of b1 =" + b1);
	console.log("the datatype of b1 = " + typeof b1);
}