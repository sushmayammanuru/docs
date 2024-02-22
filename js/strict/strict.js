 "use strict"
 // the "use strict" directive is only recognized  at the beginning of a script.
 // or a function
 function main(){
	 useStrict();
	
 }
 function useStrict(){
	// x=5;
	 //referenceError: x is not defined
	 let x = 5;
 console.log(x);
	// y = add(123,234);
	 //referenceError : y is not defined
	 let y = (123 + 234);
	 console.log(y);
 }
 //function add(p1,p1){
	 //duplicate parameter name not allowed in this context
	//function add(p1,p1){
		// 	return = p1 + p1
	//}
	
 
 