function bulbOn() {
	console.log("bulbon");
	document.getElementById("img1").src="bulbon.gif";
	document.getElementById("p1").innerHTML = "Bulb ON";
	document.getElementById("p1").style.color = "yellow";
	document.getElementById("p2").style.display = "initialy";
}

function bulbOff() {
	console.log("bulboff");
	document.getElementById("p1").innerHTML = "Bulb OFF";
	document.getElementById("img1").src = "bulboff.gif";
	document.getElementById("p1").style.color = "gray";
	document.getElementById("p2").style.display = "none";
}
function change(){
	document.getElementById("last-name").innerHTML = "kumar";
}


