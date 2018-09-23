

// Count Down Date
var countDownDate = new Date("Oct 1, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (days < 10) {
        Str = days.toString();
        days = Str.padStart(2, "0");
    }
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
        Str = hours.toString();
        hours = Str.padStart(2, "0");
    }
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) {
        Str = minutes.toString();
        minutes = Str.padStart(2, "0");
    }
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);   
    if (seconds < 10) {
        Str = seconds.toString();
        seconds = Str.padStart(2, "0");
    }
    
    // Output the result
    document.getElementById("demo").innerHTML = days + " " + '<img src="static/images/3CountDown Divider.png" width = 4px>' + " " + hours + " " + '<img src="static/images/3CountDown Divider.png" width = 4px>' + " " + minutes + " " + '<img src="static/images/3CountDown Divider.png" width = 4px>' + " " + seconds;
    document.getElementById("demo1").innerHTML ="DAYS"+"&emsp;&emsp;&emsp;&emsp;&ensp;"+"HOURS"+"&emsp;&emsp;&emsp;&ensp;&nbsp"+"MINUTES"+"&emsp;&emsp;&emsp;"+"SECONDS";
    // When the count down is over
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "00 00 00 00";
    }
}, 1000);

