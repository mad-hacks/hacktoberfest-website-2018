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
    document.getElementById("demo").innerHTML = days + " " + '<img src="static/images/3CountDown Divider.png" style="width: 0.1vw; height: 5vw;">' + " " + hours + " " + '<img src="static/images/3CountDown Divider.png" style="width: 0.1vw; height: 5vw;">' + " " + minutes + " " + '<img src="static/images/3CountDown Divider.png" style="width: 0.1vw; height: 5vw;">' + " " + seconds;
    document.getElementById("demo1").innerHTML ="Days"+"&emsp;&emsp;&emsp;&ensp;"+"Hours"+"&emsp;&emsp;&emsp;"+"Minutes"+"&emsp;&emsp;"+"Seconds";
    // When the count down is over
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "00 00 00 00";
    }
}, 1000);

document.getElementById("fb").addEventListener("mouseover", function(){document.getElementById("fb").src="static/images/fbb2.png";})
document.getElementById("fb").addEventListener("mouseout", function(){document.getElementById("fb").src="static/images/fbb.png";})

document.getElementById("twit").addEventListener("mouseover", function(){document.getElementById("twit").src="static/images/twitter2.png";})
document.getElementById("twit").addEventListener("mouseout", function(){document.getElementById("twit").src="static/images/twitter.png";})

document.getElementById("lin").addEventListener("mouseover", function(){document.getElementById("lin").src="static/images/lin2.png";})
document.getElementById("lin").addEventListener("mouseout", function(){document.getElementById("lin").src="static/images/lin.png";})

