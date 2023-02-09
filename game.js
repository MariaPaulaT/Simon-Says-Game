
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern =[];

var level =0;

var toggle = false;

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");

   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatedPress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
});


$(document).keypress(function(){
    if(toggle === false){
        $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
}); 

function nextSequence(){

      //Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  
  
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){
  
          //5. Call nextSequence() after a 1000 millisecond delay.
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
  
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout (function(){
            $("body").removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, press Any Key to Restart");
        startOver();
    }  

}

function animatedPress(currentColor){

    $("#"+currentColor).addClass("pressed");
    
    setTimeout ( function(){$("#"+currentColor).removeClass("pressed");}, 100);
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function  startOver(){
    gamePattern = [];
     toggle = false;
     level =0;
}