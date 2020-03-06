

/*function adding(number1, number2){
	console.log(number1 + number2)
}

adding(2,289)*/
//secondsOrMinutes is an argument so it doesnt have to be defined
//output is an argument



function timeUnit(output, secondsOrMinutes){
	//we want it to take the current count
	//and then ad a zero to the front
	// and replace the current seconds value
	//find element called seconds
	//var seconds = document.getElementById("seconds")

	if(output < 10){
		secondsOrMinutes.innerHTML = "0" + output;
	}else {
		secondsOrMinutes.innerHTML = output;

	}
	//replace with output
	seconds.innerHTML = output;
}

//THIS IS A TIMER!!!!!!
//or function myRepeater(){
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


/*CLOCK!!!!!*/
var counter = 0;
var minuteCounter = 0;
var hourCounter = 0;
var milliseconds = document.getElementById("milliseconds");
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");
var day = document.getElementById("weekday");

var weekDays = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"]
var monthDay = document.getElementById("monthday")

function weekDay(dayIndex, dayELement){

	dayELement.innerHTML = weekDays[dayIndex] + "day"
}

function Clock(){

	var currentDate = new Date;

	timeUnit(currentDate.getHours(), hours)
	timeUnit(currentDate.getMinutes(), minutes)
	timeUnit(currentDate.getSeconds(), seconds)
	timeUnit(currentDate.getMilliseconds(), milliseconds)

	weekDay(currentDate.getDay(), day)

	monthDay.innerHTML = currentDate.getDate()

}

setInterval(Clock, 1000)

//setInterval(myRepeater , 5)

