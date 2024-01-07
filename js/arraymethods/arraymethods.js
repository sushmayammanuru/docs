// CRUD
function main(){
	 console.log("main method start");
	// arrayPrint();
	//arrayToString();
	 //arrayToStringWithSeparator()
	 //addLast();
	// deleteLast();
	// addFirst();
	// //deleteFirst();
	 //deleteSpecifiedValue();
	 //deleteSpecifiedValueAndPosition()
	 //addSpecifiedPosition();
	 //updateAtSpecifiedPosition();
	 subArray();
	 console.log("main method end");
}
function arrayPrint(){
	let employees = ["sudha","sush","suneel"];
	console.log(employees);
}
function arrayToString(){
	let employees = ["sudha","sush","suneel"];
	console.log(employees.toString());
}
function arrayToStringWithSeparator(){
	let employees = ["sudha","sush","suneel"];
	console.log(employees.join(" |"));
}
function addLast(){
	let employees = ["sudha","sush","suneel"];
	employees.push("Raj");
	console.log(employees.toString());
}
function deleteLast(){
	let employees = ["sudha","sush","suneel"];
	employees.pop();
	console.log(employees.toString());
}
function addFirst(){
	let employees = ["sudha","sush","suneel"];
	employees.unshift("Raj");
	console.log(employees.toString());
}
function deletefirst(){
	let employees = ["sudha","sush","suneel"];
	employee.shift();
	console.log(employees.toString());
}
function deleteSpecifiedValue(){
	let employees = ["sudha","sush","suneel"];
	delete employees[1];
	console.log(employees.toString());
}
function deleteSpecifiedValueAndPosition(){
	let employees = ["sudha","sush","suneel"];
	employees.splice(1,1);
	console.log(employees.toString());
}
function addSpecifiedPosition(){
	let employees = ["sudha","sush","suneel"];
	employees.splice(1,0,"Raj","Ram");
	console.log(employees.toString());
}
function updateAtSpecifiedPosition(){
	let employees = ["sudha","sush","suneel"];
	employees.splice(2,1,"Raj","Ram");
	console.log(employees.toString());
}
function subArray(){
	let employees = ["sudha","sush","suneel"];
	let subArray = employees.slice(1,3)
	console.log(subArray);
}