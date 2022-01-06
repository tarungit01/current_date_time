let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let d = new Date();
let day = d.getDay();
let dayName = weekdays[day]
document.getElementById('day_time').innerHTML = 'Today is: ' + dayName;
let hours = d.getHours();
if(hours > 12){
	hours = hours - 12;
	hours = hours + ' PM';
	hours = '0' + hours
	}
if(hours < 12){
	hours = hours + ' AM'
	}
let minutes = d.getMinutes();
if(minutes < 10){
	minutes = '0' + minutes;
	}
let seconds = d.getSeconds();
if(seconds < 10){
	seconds = '0' + seconds;
	}
let time = hours + " : " + minutes + " : " + seconds;
document.getElementById('time').innerHTML = 'Current Time is : ' + time;
