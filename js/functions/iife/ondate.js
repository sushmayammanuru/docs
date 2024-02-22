(function (){
let day = new Date().getDay();
if(day == 0){
	day = "Sunday";
}
else if (day == 1){
	day = "monday";
}
else if(day ==2){
	day = "Tuesday";
}
else if (day == 3){
	day = "wednesday";
}
else if (day == 4){
	day =  " thutsday";
}
else if( day == 5){
	day = "friday";
}
else if (day == 6){
	day = "saturday";
}
console.log("today day is " + day);
})
();
