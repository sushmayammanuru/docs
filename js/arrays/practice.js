function main(){
	//stringType();
	//createArray();
	//emptyArrayWithSquareBraces();
	//emptyArrayWithNewKeyword();
	//arrayValuesWithNewKeyword();
//	updateArray()
	//arrayWithIntialIndex();
	//getFirstElement();
	//getLirstElement();
	//forOfArray();
	//printArray();
	//	arrayToStringWithSeparator();
	//arrayToRemoveLastElement();
	//arrayToAddLastElement();
	//arrayToDeleteFirstElement();
	//lengthOfArray();
	//usingdelete();
	//spliceAddFirstElement();
	sliceAddFirstElement();
	
}
	
function stringType(){
	let x = "Sudha";
	console.log(x);
}

function createArray(){
	let x = ["Sudha","Sushma","Suneel","Pavan"];
	console.log(x);
}

function emptyArrayWithSquareBraces(){
	let emp = [];
	console.log("emp =" +emp);
}
function emptyArrayWithNewKeyword(){
	let employee = new Array();
	console.log("employess = "+ employee);
	console.log("employess = "+ typeof employee);
	}
function ArrayValuesWithSquareBraces(){
	let emp = ["Sudha","Sushma","Suneel","Pavan"];
	console.log("emp =" +emp);
}
function arrayValuesWithNewKeyword(){
	let employee = new Array();
	employee[0] = "Ammu";
	employee [1] = "chinnu";
	console.log("employee = "+ employee);
}
function updateArray(){
	let emp = ["Sudha","Sushma","Suneel","Pavan"];
	emp[3] = "Chinna";
	console.log("new emp = " +emp);
}
function getFirstElement(){
	let emp = ["Sudha","Sushma","Suneel","Pavan"];
	
	console.log("emp =" +emp[1]);
}
 function getLirstElement(){
	let emp = ["Sudha","Sushma","Suneel","Pavan"];
	for(i = (emp.length-1); i>=0; i++){
	console.log("emp =" +emp);
	}
}
function forOfArray(){
	let x = ["Sudha","Sushma","Suneel","Pavan"];
	for(let names of x){
	console.log("names = "+x);
	}
}
 
 
 //here we are practicing arrayMethods;
 function printArray(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 console.log("Student Details = " + student);
 }
function toStringArray(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 console.log("Student Details = " + student.toString());
	 console.log("type of student = "+ typeof student);
 }
function  arrayToStringWithSeparator(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 console.log( student.join(" * "));
}

function  arrayToRemoveLastElement(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 student.pop();
	 console.log( student);
}
function  arrayToAddLastElement(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 student.push("Ammu");
	 console.log( student);
}
function  arrayToDeleteFirstElement(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 student.shift();
	 console.log( student);
}
 function  arrayToAddFirstElement(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 student.unshift("Chinna");
	 console.log( student);
}
 function lengthOfArray(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 console.log( student.length);
 }
function  usingdelete(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 delete student[3];
	 console.log( student);
}
function  usingSplice(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 delete student[3];
	 console.log( student);
}
function  spliceAddFirstElement(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 student.splice(1,2,"ammu","nagesh");
	 console.log( student.toString());
}
function  sliceAddFirstElement(){
	 student = ["Sudha","Sushma","Suneel","Pavan"];
	 let subArray = student.slice(1,4)
	 console.log(subArray);
}