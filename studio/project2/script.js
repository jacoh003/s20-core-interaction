

var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
var n1 = d.getDate();
var n2 = d.getFullYear();

var hr24 = document.getElementById("hr24");
var am7pm7 = document.getElementById("am7pm7");
var am6pm5 = document.getElementById("am6pm5");
var am7pm8 = document.getElementById("am7pm8");
var am8pm11 = document.getElementById("am8pm11");
var am12pm11 = document.getElementById("am12pm11");
var pm10am5 = document.getElementById("pm10am5");
var pm12am4 = document.getElementById("pm12am4");

document.getElementById("timedate").innerHTML = n+" "+n1+","+" "+n2;

var counter = 0;

var myRepeater = function(){
//insert these in the html
	
	d = new Date();
	var hours = d.getHours()
	var minutes = d.getMinutes()
	var seconds = d.getSeconds()
	var milliseconds = d.getMilliseconds()

	
//counter doesnt really matter this is for 24 seconds
	counter = counter + 1;	

document.getElementById("timedate").innerHTML = 
n+" "+n1+","+" "+n2+" "+"_:"+minutes+":" + seconds+ "<br></br> Manhattan New York,NY 40.7831° N, 73.9712° W";

	if("counter" < 6 || "counter" > 18){
		am7pm7.style.opacity = 0;

	}else{
		am7pm7.style.opacity = "";		
	}

	if(counter < 5 || counter > 16){
		am6pm5.style.opacity = 0;

	}else{
		am6pm5.style.opacity = "";		
	}

	if(counter < 6 || counter > 19){
		am7pm8.style.opacity = 0;

	}else{
		am7pm8.style.opacity = "";		
	}

	if(counter < 7 || counter > 22){
		am8pm11.style.opacity = 0;

	}else{
		am8pm11.style.opacity = "";		
	}

	if(counter < 11 || counter > 22){
		pm12pm11.style.opacity = 0;

	}else{
		pm12pm11.style.opacity = "";		
	}

	if(counter < 21 || counter > 4){
		pm10am5.style.opacity = 0;

	}else{
		pm10am5.style.opacity = "";		
	}

	if(counter < 11 || counter > 3){
		pm12am4.style.opacity = 0;

	}else{
		pm12am4.style.opacity = "";		
	}


	if (counter === 24){

		counter = 0;
	}
	console.log(counter)
}

setInterval(myRepeater, 1000);








