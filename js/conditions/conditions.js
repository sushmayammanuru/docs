function main(){
	console.log("main function is start");
	//ifTrue();
	//ifFalse();
	//ifTrueFalse();
	//elseIfLadder(6);
	//greeting(3);
	//switchCaseBreak1();
	//  switchCaseBreak2();
	switchCase();
	//switchGrade();
	console.log("main function end");
}
function ifTrue(){
	if (1==2){
		console.log("ifTrue true condition")
	}
}
function ifFalse() {
	if(1==2){
		console.log("False true condition");
	}
}
function ifTrueFalse(){
	if(1==2){
		console.log("ifTrueFalse condition");
	}
	else {
		console.log("ifTrueFalse false condition");
}
}
function applyForVoterCard(age){
	if(age>=18){
		console.log("you are eligible for applying voter card");
	}
else{
	console.log("you are not eligible for applying votercard");
	console.log("please apply after "+ (18-age) + "years");
   }
}
function elseIfLadder(cls){
	if(cls<=5){
			console.log("go to primary school");
		}
	else if(cls<=10){
		console.log("Go to high schoolll");
	}
	else if(cls<=12){
		console.log("Go to intermediate college");	
	}
	else if(cls<=15){
		console.log("Go to degree college");
	}
	else {
		console.log("Go to PG college");	
	}
}
//function for greeting(hour){
function greeting(hr){
	if(hr<=11.59){
		console.log("say good morning");
	}
	else if(hr<=16.00){
		console.log("say good afternoon");
	}
	else if(hr<=19.00){
		console.log("say good evening");
	}
	else if(hr<=24.00){
		console.log("say good night ");
	}
	else {
		console.log("No need to wish/greetings");
	}
	
}

function switchCaseBreak1(){
	const day = new Date().getDay();
	let greeting;
	switch (day){
			case 0:
				greeting = "Sunday";
				break;
			case 1:
				greeting = "monday";
				break;
			case 2:
				greeting = "tuesday";
				break;
			case 3:
				greeting = "wednesday";
				break;
			case 4:
				greeting = "Thursday";
				break;
			case 5:
				greeting = "Friday";
				break;
			case 6:
				greeting = "Saturday";
				break;
	}
	console.log(greeting);
				
	}
function switchCaseBreak2(){
	const hour = new Date().getHours();
	let greeting;
	switch(hour){
		case 0: 
			greeting = "good morning";
			break;
		case 1:
			greeting = "good morning";
			break;
		case 2:
			greeting = "good morning";
			break;
		case 3:
			greeting = "good morning";
			break;
		case 4:
			greeting = "good morning";
			break;
		case 5:
			greeting = "good morning";
			break;
		case 6:
			greeting = "good morning";
			break;
			
		case 7:
			greeting = "good morning";
			break;
		case 8:
			greeting = "good morning";
		break;
		case 9:
			greeting = "good morning";
		    break;
		case 10:
			greeting = "good morning";
			break;
		case 11:
			greeting = "good morning";
			break;
		case 12:
			greeting = "good morning";
			break;
		case 13:
			greeting = "Good Afternoon";
			break;
		case 14:
			greeting = "Good Afternoon";
			break;
		case 15:
			greeting = "Good Afternoon";
			break;
		case 16:
			greeting = "Good Afternoon";
			break;
		case 17:
			greeting = "Good Afternoon";
			break;
		case 18:
			greeting = "Good Evening";
			break;
		case 19:
			greeting = "Good Evening";
			break;
		case 20:
			greeting = "Good Night";
			break;	
		case 21:
			greeting = "Good night";
			break;	
		case 22:
			greeting = "Good night";
			break;	
		case 23:
			greeting = "Good night";
			break;	
		
}
	console.log("greeting");
	
}

function switchCase(){
	let i = 3;
	switch(i){
		case 0 :
		 console.log("i is zero");
		 break;
		case 1:
		 console.log("i is one");
		 break;
		case 2:
		 console.log("i is two");
		 break;
		case 3:
		 console.log("i is equal to three");
		 break;
		case 4:
		 console.log("i is four");
		 break;
		default:
			console.log("i is greater than two");
	}
}

function switchGrade(){
	let grade = 'A';
	let result;
	switch(grade){
    case 'A':
        result = "A (Excellent)";
        break;
    case 'B':
        result = "B (Average)";
        break;
    case 'C':
        result = "C (Below than average)";
        break;
    default:
        result = "No Grade";
}
console.log(result);
	}
