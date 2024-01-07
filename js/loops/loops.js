function main() {
	console.log("main method start");
	//forLoop1();
	//forLoop2();
	//forLoop3();
	//forLoop4();
	//empSush();
	//triangle();
	//rightTraingle();
	//forIn();
	//forOf();
	// loopForRow();
	//loopForColumn()
	//nestedForLoop();
	//hallowSquare();
	//forIn1();
	reverseTriangle();
	console.log("main method end");
}

/*function forLoop1() {
	for (let i=0; i<10; i++) {
		console.log("getEmployee " +i);
	}
}*/

function forLoop1(){
	let i;
	for (i = 1; i <= 5; i++){
		getEmployee(i);
	}
	function getEmployee(Id){
	console.log("get an employee from database "+Id);
}
}


function forLoop2() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for (let i = 0; i <= employees.length; i+2) {
		console.log("Employee Name = "+ employees[i]);
	}
}
function forLoop3() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for (let i = (employees.length-0) ; i > 0; i--) {
		console.log("Employee Name = "+ employees[i]);
	}
}
function forLoop4() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for (let employee of employees) {
		console.log("Employee Name = "+ employee);
	}
}

function empSush(){
	let i ;
	for (i = 0; i<=5; i++){
	empSu(i);
function empSu(Id){
	console.log("get an employeefrom database by Id "+Id);
		
	}
	}
}
function loopForRow(){
	let i;
	let pattern = "";
	for ( i = 1; i <= 5; i++){
		pattern +=i;
	}
	console.log(pattern);
}
function loopForColumn(){
	let i;
	let pattern = "";
	for ( i = 1; i <= 5; i++){
		pattern +=i;
		pattern += "\n";
	}
	console.log(pattern);
}
function nestedForLoop(){
	let c;
	let r;
	let pattern = "";
	for ( c = 1; c <= 5; c++){
	for (r = 1; r <= 5; r++){
		pattern +=r;
	}
	pattern += "\n";
	}
	console.log(pattern);
}
function triangle(){
	let i;
	let j;
	let pattern = "";
	for (i = 1; i <= 5; i++){
		for (j = 1; j <= i; j++){
			pattern += j;
			
		}
		pattern += "\n"
			
	}
	console.log(pattern);
}
function rightTraingle(){
	let i;
	let j;
	pattern = "";
	for(i = 1; i <= 5; i++){
		for(j = 1; j <= 5; j++){
			if(j < 5 - (i - 1)){
				pattern += "";
			}
			else{
				pattern += j;
			}
		}
		pattern += "/n"
	}
	console.log(pattern);
}
function forIn(){
	let employee = {empId : "101",firstName : "sushma",lastName: "yammanuru" };
	let values = "\n";
	for (let property in employee){
		values += employee[property];
		values += "\n";
	}
	console.log(" values ="+ values);
}

function forOf(){
	let employees = ["sushma","Azhar","durga", "Salma"];
	let values = "\n";
	for (let employee of employees){
		values += employee;
		values += "\n";
	}
	console.log(" values = "+values);
}

function hallowSquare(){
let i ;
let j ;
string = '';
for(i=1; i<=5; i++){
  for(j=1; j<=5; j++){
    if(i==1 || i==5){
     string += '*';
    } else if(true){
     if(j == 1 || j == 5){
		string += '*';
		}else{
        string +=' ';
		}
	}
    }
	string += '\n';
  }
   console.log(string);
}
function forIn1(){
	let student = {id:102,name :"sushma"}
	values ="\n";
	for(let property in student){
		
		values =+ "\n";
	}
	console.log(student);
}
function reverseTriangle(){
	let i;
	let j;
	pattern = "";
	for(i = 1; i<=6; i++){
		for(j=1; j>=i-1; j++){
			pattern += i; 
		}
	pattern += "\n";
	}
	console.log(pattern);
}