var buttonColours = ["red", "green", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level=0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
    });
    
    $(".btn").click(function(){
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playsound(userChosenColour);
        animatepress(userChosenColour);
        
        checkanswer(userClickedPattern.length-1);
    
        
    });


    function checkanswer(currlevel){
        if(gamePattern[currlevel]===userClickedPattern[currlevel]){
            
                if(userClickedPattern.length===gamePattern.length){
                    setTimeout(function () {
                        nextSequence();
                        
                      }, 1000);
                }
                
            
        }
        else{
                    
            playsound("wrong");
            $("body").addClass("game-over");
           
            $("#level-title").text("Game Over, Press Any Key to Restart");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);
            startover();
        }
    }

    function nextSequence(){
        userClickedPattern=[];
        level++;
        $("#level-title").text("Level " + level);
        var randomNumber = Math.floor(Math.random()*4);
        
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
    
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
        playsound(randomChosenColour);
    }
    
    
    function animatepress(currcolor){
        $("#"+currcolor).addClass("pressed");
        setTimeout(function () {
            $("#" + currcolor).removeClass("pressed");
          }, 100);
    }
    

function playsound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();

}




function startover(){
    level=0;
    gamePattern=[];
    started=false;

}






