let seconds =0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval= null;

let status = "stopped";

function stopWatch(){
    seconds++;
        if(seconds / 60 === 1){
            seconds =0;
            minutes++;
            if(minnutes / 60 === 1){
                minutes = 0;
                hours++;
            }
        }
        if(seconds < 10){
            displaySeconds = "0" + seconds.toString();
        }
        else{
            displaySeconds = seconds;
        }

        if(minutes < 10){
            displayMinutes = "0" + minutes.toString();
        }
        else{
            displayMinutes = minutes;
        }

        if(hours < 10){
            displayHours = "0" + hours.toString();
        }
        else{
            displayHours = hours;
        }
        document.getElementById("show-time").innerText =  displayHours +" "+ ":" +" "+ displayMinutes +" "+ ":" +" "+ displaySeconds;
}
    

function startWatch(){
    if(status === "stopped"){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("start-pause").innerHTML = "Pause";
        status = "started";

    }
    else{
        window.clearInterval(interval);
        document.getElementById("start-pause").innerHTML = "Resume";
        status = "stopped";
    }
}
function resetWatch(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("show-time").innerHTML = "00 : 00 : 00";
    document.getElementById("start-pause").innerHTML = "Start";
}