// Calling showTime function at every second

let dat=document.getElementById("day");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
dat.innerHTML = day;

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date2 = new Date();
let name = months[d.getMonth()];

let date = new Date();
	let day1 = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();

  let currentDate =
		day1 +
		" " +
		name + 
		" " +
		year ;


    document.getElementById("date").innerHTML=currentDate;

setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
	// Getting current time and date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	// Setting time for 12 Hrs format
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec ;
    
		

	// Displaying the time
	document.getElementById(
		"time"
	).innerHTML = currentTime;

  document.getElementById(
		"am"
	).innerHTML = am_pm;


}


showTime();


let greet = new Date();
var time = greet.getHours();

if (time < 12) {
	document.getElementById("greetings").innerText="Good Morning !";
}
else if(time <17){
	document.getElementById("greetings").innerText="Good  Afternoon !";
	
	
}


else if (time == 12) {
  document.getElementById("greetings").innerText="Get a lunch";
}else{
	
	document.getElementById("greetings").innerText="Good Evening !";
	
}


