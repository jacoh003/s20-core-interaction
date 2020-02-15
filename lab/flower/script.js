var stem = document.getElementById("stem");

console.log(stem)

stem.style.borderBottom = "solid 1rem lightgreen";


var stemHeight = 1;

setInterval(function(){

	stem.style.borderBottom = "solid " + stemHeight + "rem lightgreen";
	stemHeight = stemHeight + 1;

}, 1000)

