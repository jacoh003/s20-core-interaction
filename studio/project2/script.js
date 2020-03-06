

/*var d = new Date();

document.getElementById("timedate").innerHTML = d;*/

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


document.getElementById("timedate").innerHTML = n+" "+n1+","+" "+n2;

var counter = 0;

var myRepeater = function(){

	counter = counter + 1;	

	if (counter === 24){
//when counter hits 60 reset counter to 0 and add 1 to minuteCounter
		counter = 0;
	}
	console.log(counter)
	}



/*function Clock(){

	var currentDate = new Date;

	timeUnit(currentDate.getMinutes(), minutes)
	timeUnit(currentDate.getSeconds(), seconds)
	timeUnit(currentDate.getMilliseconds(), milliseconds)

	weekDay(currentDate.getDay(), day)

	monthDay.innerHTML = currentDate.getDate()
}

setInterval(Clock, 1000)

var myRepeater = function(){

	//console.log(counter)
	timeUnit(counter, seconds)
	counter = counter + 1;	

	if (counter === 60){
//when counter hits 60 reset counter to 0 and add 1 to minuteCounter
		counter = 0;
		minuteCounter = minuteCounter + 1;
		timeUnit(minuteCounter, minutes);

		if(minuteCounter === 60){

		minuteCounter = 0;
		hourCounter = hourCounter + 1;
		timeUnit(hourCounter, hours);
		}

	}

	}
*/