function main(){
	console.log("this is main");
	
	addition1(12,13);
	
	let d = addition2(13,14);
	console.log(d);
}
function addition1(a , b){
	let c = a + b;
	console.log(c);
}
function addition2(a , b){
	return a + b;
}
let e = function(){
	console.log(16 + 17);
}
let d =function(){
	console.log(16 * 13);
}
();
