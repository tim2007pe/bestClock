window.addEventListener('load' ,calculateTime);
function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];



    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;

    setTimeout(calculateTime, 200)
}