const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

const newYears = '1 jan 2022';
function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds =Math.abs(newYearDate-currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(days,hours,minutes , second);
    daysE1.innerHTML = formatTime(days);
    hoursE1.innerHTML = formatTime(hours);
    minutesE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);

    // console.log(diff);
    // console.log(diff.getdays());
    // console.log(diff.getHours());
    // console.log(diff.getMinutes());
    // console.log(diff.getSeconds());
}

function formatTime(time){
    //      ` text $ {t} ` is used to display the value of t with text
    
    return time<10 ? `0${time}` : time;
}
// initial call
// countdown();
setInterval(countdown,1000);
