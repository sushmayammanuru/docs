function main() {
	console.log("main function start");
	//undefined1();
	null1();
	//number();
	//number1();
	//bigint();
	//string();
	//dynamic();
	arrays();
	objects();
	console.log("main function end");
}
function undefined1(){
	let n1;
	console.log("the value of n1 =" + n1);
	console.log("the datatype of n1 = " + typeof n1);
}
function null1(){
	let n1 = null;
	console.log("the value of n1 =" + n1);
	console.log("the datatype of n1 = " + typeof n1);
}
function number(){
	let n1 = 10;
	console.log("the value of n1 =" + n1);
	console.log("the datatype of n1 = " + typeof n1);
}
function number1(){
	let n1 = 9007199254740999;;
	console.log(n1);
	console.log("the value of n1 =" + n1);
	console.log("the datatype of n1 = " + typeof n1);
}
function bigint(){
	let n1 = 9007199254740999n;
	console.log(n1);
	console.log("the value of n1 = " + n1);
	console.log("the datatype of  n1 = "+typeof n1 );
}
function string(){
	let s1 = "surya";
	console.log(s1);
	console.log("the value of s1 = " + s1);
	console.log("the datatype of  s1 = "+typeof s1 );
}
function boolean1(){
	let isManager= True;
	console.log("the value of isManager = " + isManager);
	console.log("the datatype of isManager = "+typeof isManager );
	let isEmployee = "true";
	console.log("the value of isManager = " + isManager);
	console.log("the datatype of isManager = "+typeof isManager );
	let x = 2;
	let y = 3;
	let z = 2;
	console.log("value is = " + (x==y));
	console.log("datatype is = "+ typeof(x==y));
	console.log("value is = " + (x==z));
	console.log("datatype is = "+typeof(x==z));
}
function dynamic(){
	let n1 ;
	console.log(n1);
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
	n1 = 9007199254740999;;
	console.log(n1);
	console.log("the value of n1 =" + n1);
	console.log("the datatype of n1 = " + typeof n1);
	 n1 = 9007199254740999n;
	console.log(n1);
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
	n1 = "9007199254740999";
	console.log(n1);
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
	n1 = true;
	console.log(n1);
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
}
function arrays(){
	let a1 = [];
	console.log("the value of a1 " + a1);
	console.log("the datatype of a1 = " + typeof a1);
}
function objects(){
	let o1 = {};
	console.log("the value of o1 " + o1);
	console.log("the datatype of o1 = " + typeof o1);
}

