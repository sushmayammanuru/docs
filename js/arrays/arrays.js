function main(){
	console.log("main function start");
	//stringType();
	//arrayType();
	//emptyArrayWithSqaureBraces();
	//emptyArrayWithNewKeyword();
//arrayWithInitialIndex()
	//forOfArrayIndex();
	//arrayIndex1();
	//forOfArrayIndex();
	//arrayIterateWithFor();
	//arrayIterateWithForOf();
//	arrayIterateReverseDirection()
	//getFirstElement();
	getLastElement();
	console.log("main function end");
}
function stringType(){
	let employee = "Azhar";
	console.log("employess = "+ employee);
	console.log("employess = "+ typeof employee);
}
function arrayType(){
	let employees = ["Azhar","sushma"];
	console.log("employess = "+ employees);
	console.log("employess = "+ typeof employee);
	}
	function emptyArrayWithSqaureBraces(){
	let employee = [];
	console.log("employess = "+ employee);
	console.log("employess = "+ typeof employee);
	}
	function emptyArrayWithNewKeyword(){
	let employee = new Array();
	console.log("employess = "+ employee);
	console.log("employess = "+ typeof employee);
	}
	
	function stringType(){
	let employee = "Azhar";
	console.log("employess = "+ employee);
	console.log("employess = "+ typeof employee);
	}
	function arrayIndex(){
	let employee = ["Azhar","Durga","Sushma","Salma"];
	console.log("employess = "+ employee[0]);
	console.log("employess = "+ employee[1]);
	console.log("employess = "+ employee[2]);
	console.log("employess = "+ employee[3]);
	console.log("employess ="+ typeof employee);}
	
	function arrayWithInitialIndex(){
	let employee = new Array();
	employee[0] = "Sudha";
	employee[1] = "Pavan";
	console.log("employess = "+ employee[1]);
	console.log("employess = "+ employee[0]);
	console.log("employess = "+ employee[3]);
	console.log("employess = "+ typeof employee);}

	function arrayIndex1(){
		let employees = ["Azhar","Durga","Sushma","Salma"];
	for (let i = 0; i <employees.length; i++){
	console.log("employees = "+employees[i]);
	}
	}
	
	function forOfArrayIndex(){
		let employees =["Azhar","Durga","Sushma","Salma"];
		for (let employee of employees){
			console.log("employee Name = "+employees);
		}
	}
	function arrayIterateWithFor(){
		let employees = ["Azhar","Durga","Sushma","Salma"];
		for(let i =0; i<employees.length;i++){
			console.log("employees = "+employees[i]);
		}
	}
	function arrayIterateWithForOf(){
		let employees = ["Azhar","Durga","Sushma","Salma"];
		for(let emp of employees){
			console.log("employees = "+emp);
		}
	}
	function arrayIterateReverseDirection(){
		let employees = ["Azhar","Durga","Sushma","Salma"];
		for(let i =(employees.length-1); i>=0;i--){
			console.log("employees = "+employees[i]);
		}
	}
function getFirstElement(){
		let employees = ["Azhar","Durga","Sushma","Salma"];
		
	console.log("employees = "+employees[0]);
	}
function getLastElement(){
		let employees = ["Azhar","Durga","Sushma","Salma"];
		
	console.log("employees = "+employees[employees.length-1]);
	}
	
function updateElement(){
		let employee = ["Azhar","Sushma","Salma","sudha"];
		console.log("employees = "+ employee);
		employee[2] = "suneel";
		console.log("employees = "+ employee);
	}