function main() {
	//concatenate1();
	//concatenate2();
	//addition();
	//addition2();
	//substraction();
    //multiplication();
	//division();
	//remainder();
	//increment();
	//decrement();
	append();
	//comparison();
	//increment1();
}

function concatenate(){
	let firstName = "Surya";
	let secondName = "Chandhra";
	let fullName = firstName + " " +secondName;
	console.log("fullName");
}
function concatenate2() {
	let firstName = "surya";
	let secondName = "Chandhra";
	firstName += secondName;
	console.log(firstName);
}
function addition(){
	let x = 2;
	let y = 3;
 //	x = x + y; 
  x +=y;
  console.log(x);
}
function addition2(){
	
	let x;
	let y;
	let z;
	let w;
	console.log(typeof x);
	x = 12;
	y = 13;
	z = 15;
	console.log(typeof x);
	console.log(typeof y);
	console.log(x + y);
	x = "12";
	y = 13;
	w = 16;
	let v = z + w;
	console.log(x + y);
	console.log(v);
	console.log(typeof v);
}

function substraction(){
	let x = 13;
	let y = 12;
	let z = x -y;
	console.log(z);
}
function multiplication(){
	let x = 13;
	let y = 12;
	let z = x * y;
	console.log(z);
}
function division(){
	let x = 13;
	let y = 12;
	let z = x/y;
	console.log(z);
}
function remainder(){
	let x = 13;
	let y = 12;
	let z = x%y;
	console.log(z);
}
function increment(){
	let x = 5;
	let y = 5;
	console.log(x);//5
	console.log(y);//5
	x = x++; //post
	y = ++y; //pre
	console.log(x); //5
	console.log(y);//6
	console.log(x++);//5
	console.log(++y);//7
}

function decrement(){
	let x = 5;
	let y = 5;
	console.log(x);
	console.log(y);
	let a = x--; //post
	let b = --y; //pre
	console.log(x); // 4
	console.log(y); //4
	console.log(a); //5
	console.log(b); //4
	z = 4
	c = z--
	console.log(z--);
}
function append(){
	let fn = "ravi";
	let ln = "kumar";
	let x = 11;
	let y = 12;
	let z = '13';
	let a = x + y + z;
	let b = z + y + x;
	console.log(a);//2313
	console.log(b);//131211
	console.log(fn + " " + ln);// ravi kumar
}
function comparison(){
	let x = 11;
	let y = 12;
	let z = 11;
	console.log(x==y);
	console.log(x==z);
	console.log(x!=y);
	console.log(x!=z);
}
function increment1(){
	x = 4;
	y = 5;
	x = x++
	console.log(x);//4
	y = ++y
	console.log(y);//6
	console.log(x);//4
	console.log(y);//6
	console.log(x++);//4
	console.log(++y);//7
}
/*
what is the overloaded operator in javascript and java?
	+ addition and append 
What is the difference between -- and --- operators?
what is ternary ? operator?
*/0