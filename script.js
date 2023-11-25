var buttonColors=['red','blue','green','yellow'];
var gamePattern=[];
var blue= new Audio('sounds/blue.mp3');
var green = new Audio('sounds/green.mp3');
var red = new Audio('sounds/red.mp3');
var yellow =new Audio('sounds/yellow.mp3');
var wrong= new Audio('sounds/wrong.mp3');
var randomChosenColor;;
var started=false;
var level=0;
function compareArrays(a, b){
  if (a.length !== b.length) {
    
  }
  else {
    // Comparing each element of your array
    if (a[a.length-1]===b[b.length-1]){
        return true;
    }
    else{
        return false;
    }
  }
};
function playSound(name){
    switch(name){
        case 'red':
            red.play();
            break;
        case 'blue':
            blue.play();
            break;
        case 'green':
            green.play();
            break;
        case 'yellow':
            yellow.play();
            break;
        default:
            console.log(name);
    }
}
function nextSequence(){
    level++;
  $("#level-title").text("Level " + level);
    var randomNumber=Math.random();
    randomNumber=Math.floor(4*randomNumber);
    console.log(randomNumber);
    randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
}
$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
  
   
  
});
// nextSequence() $("#level-title").text("Level " + level);


// console.log(randomChosenColor);

 
var userChosenColor;
var usrPatterlog =[];
$('.btn').click(function(event){
    userChosenColor=event.target.id;
    // console.log(userChosenColor);
    usrPatterlog.push(userChosenColor);
    console.log(usrPatterlog);
    console.log(gamePattern);
    playSound(userChosenColor);
    $(`#${userChosenColor}`).addClass("pressed");
    setTimeout(function(){
        $(`#${userChosenColor}`).removeClass("pressed");
    },100);
    checkAnswer();
    
    
})

function checkAnswer(){
    if (compareArrays(usrPatterlog,gamePattern)){
        setTimeout(function(){
            nextSequence();
        },1000)
        usrPatterlog=[];
    }
    else if (compareArrays(usrPatterlog,gamePattern)==null){
            console.log('select more tiles');
    }
    else{
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        },200);   
        $('#level-title').text('Game Over, Press Any Key to Restart');
        wrong.play();
        level=0;
        gamePattern=[];
        usrPatterlog=[];
        started=false;
    }

}

function startOver(){

}