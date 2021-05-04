var start = document.getElementById("start-btn");
var finished = document.getElementById("finished-btn");
var hour = document.getElementById("hour-cdt");
var minute = document.getElementById("minute-cdt");
var second = document.getElementById("second-cdt");
var startTimer = null;
var endTime;
function timer()
{
    let currentTime =   Date.now();
    currentTime = Math.floor(currentTime / 1000);
    let timeLeft = endTime - currentTime;
    if(timeLeft <= 0){
        hour.value = "";
        minute.value = "";
        second.value= "";
        stopInterval();
    }
    else{
        hour.value = Math.floor(timeLeft / 3600);
        minute.value = Math.floor((timeLeft % 3600) / 60);
        second.value = Math.floor(timeLeft %60);
    }
}
start.addEventListener("click", function(){
    function startInterval(){
        hour.value = hour.value || 0;
        minute.value = minute.value || 0;
        second.value = second.value || 0;

        endTime = Date.now();
        endTime= Math.floor(endTime / 1000);
        endTime += parseInt(hour.value) * 3600;
        endTime += parseInt(minute.value) * 60;
        endTime += parseInt(second.value);
        startTimer = setInterval(function(){
            timer();
        },1000);
    }
    startInterval();
})
function stopInterval(){
    clearInterval(startTimer);
}
finished.addEventListener("click" , function(){
    hour.value = "";
    minute.value = "";
    second.value = "";
    stopInterval();
})