var gamePattern =[randomChosenColour];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour= buttonColours[randomNumber];
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    
}

var name ="#"+randomChosenColour; 
$("#"+randomChosenColour).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });

$(".green").click(function() {
    var audio = new Audio('blue.mp3');
    audio.play();
  });