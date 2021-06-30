var colorArray = ["blue" , "yellow" , "green" , "red"];
var computerArray = [];
var playerArray =[];
var start=true ;
var level = 0;
let on;
var count = document.querySelectorAll(".counter")[0];
let i;
var keyElements = document.querySelectorAll(".key");
var event;


document.querySelectorAll(".counter")[0].addEventListener("click" , function(){
  if (start){
    start= false;
    count.classList.add("pressed");
    setTimeout(function(){
      count.classList.remove("pressed");
    },200);
    startGame();
}
})

function startGame(){
  on=false;
  setTimeout(function(){
    count.textContent=("computer Turn")
    nextSequence();
  },200);
}

function nextSequence(){
  playerArray=[];
  i=0;
  on=false;
  level++;
  var randomNum = Math.floor(Math.random()*4);
  var randomColor = colorArray[randomNum];
  count.textContent=("computer Turn")
  document.querySelector("h1").textContent=("Level " + level);
  computerArray.push(randomColor);
  sequenceAnimation(i)
}

function sequenceAnimation(i){
  if (i< computerArray.length){
    delay(i);
  } else{
    on=true;
    setTimeout(function(){
        count.textContent="Your Turn";
    },900);

  }
}

function delay(i){
  setTimeout(function(){
    fading(computerArray[i]);
    soundPlay(computerArray[i]);
    i++;
    sequenceAnimation(i)
  },900);
}

  for(i=0; i < keyElements.length; i++){
      keyElements[i].addEventListener("click", function(event){
          if (on==true){
        var eventTarget= event.target;
        var clickedColor = eventTarget.id;
        playerArray.push(clickedColor);
        pressedKeyAnimation(clickedColor);
        soundPlay(clickedColor);
        checkAnswer((playerArray.length)-1)};
      }) //end of addeventlistener func
    } //end of for loop


function checkAnswer(currentPlayerIndex){
  if (computerArray[currentPlayerIndex] === playerArray [currentPlayerIndex]){
    var l1=computerArray.length;
    var l2 =playerArray.length;
    if (l1=== l2){
      setTimeout(function(){
        document.querySelector("h1").textContent=("Computer Turn");
          nextSequence();
      },300)

  } }  else {
      soundPlay("wrong");
      document.querySelector("body").classList.add("wrong");
      setTimeout(function(){
        document.querySelector("body").classList.remove("wrong");
      },300);
      gameOver();
    }
}

function gameOver(){
  on=false;
  computerArray=[];
  playerArray=[];
  level=0;
  start=true;
  count.textContent="Restart Game";
  document.querySelector("h1").textContent="Game Over";
}



function pressedKeyAnimation(keyId){
  document.querySelector("#" + keyId).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("#" + keyId).classList.remove("pressed");
  },300); //end of setTimeoutFunction
}



function fading(color){
  setTimeout(function(){
    document.querySelector("#" + color).classList.add("fade-out");
    setTimeout(function() {
      document.querySelector("#" + color).classList.remove("fade-out");
    },400);
  },900);
}


function soundPlay(color){
  setTimeout(function(){
  var audio = new Audio ("sounds/" + color + ".mp3");
  audio.play()
    },900);
}
