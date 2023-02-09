
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern =[];

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");

   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
 
  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

