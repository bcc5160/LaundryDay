function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// Time is passed in minutes
function countDown(time){
  
  var t = time * 60;
  console.log(t);
  for(i = t; i > 0; i--){
    setTimeout('', 1000);
    document.getElementById('time').innerHTML = i.toString();
  }

}

function timer(time){
var timeLabel = document.getElementById("time");
var counter = time * 60;
var newElement = document.createElement("p");
var id;

timeLabel.parentNode.replaceChild(newElement, timeLabel);

id = setInterval(function() {
    counter--;
    if(counter < 0) {
        newElement.parentNode.replaceChild(timeLabel, newElement);
        clearInterval(id);
    } else {
        newElement.innerHTML = "Time remaining: " + counter.toString() + " seconds.";
    }
}, 1000);
}
