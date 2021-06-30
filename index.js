

const buttonColour = ["green" , "red" , "yellow" , "blue"]
let gamePattern = [];
let userClickPattern= [];
let level=0;
let started= false;
let start=true;
let win;


$(".counter").click(startGame);


function startGame(){

  if (start || win ){
    $(".counter").text("Level " + level);
    randomNum()

  }
  // $(".key").click(function(e){
  //   userClick (e.target);
  // });
}





function userClick (x){

  var userClicking= x.id;

  // soundPlay(userClicking);
  animatePress(userClicking);
  userClickPattern.push(userClicking);
  soundPlay(userClicking);
  //
  // checkAnswer(userClickPattern);

  checkAnswer(userClickPattern.length-1);

}




// function checkAnswer(user){
//   console.log(user.length);
//   for (i=0; i < (user.length); i++){
//
//     if (user[i] == gamePattern[i]){
//       setTimeout(function() {
//         randomNum();
//     }, 800);
//
//   } else{
//           $("h1").text("GAME OVER!");
//           level=0;
//           $(".counter").text("Restart")
//           var audio = new Audio ("sounds/wrong.mp3");
//           audio.play();
//       }
//
// }
// }


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
      if (userClickPattern.length === gamePattern.length){
        setTimeout(function () {
          randomNum();
        }, 1000);
      }
    } else {
      soundPlay("wrong");
      // $("body").addClass("game-over");
      $("h1").text("Game Over");
       $(".counter").text("Restart")
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

function randomNum(){
  userClickPattern= [];


  level++;
  $(".counter").text("Level " + level);
  var ranNum=Math.floor((Math.random())*4);
  var randomChosenColor = buttonColour[ranNum];
  gamePattern.push(randomChosenColor);
  soundPlay( randomChosenColor );
  $("#" + randomChosenColor ).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  }


function soundPlay(name){
  var audio=new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function() {

    $("#"+currentColor).removeClass("pressed");
}, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickPattern=[];
  startGame()

}


// function buttons(inputs){
//   if (inputs != "press"){
//     $(".button1").text("1");
//     $(".key").click(function(){
//       $(".button1").text("2");
//       console.log(($(this).hasClass(".key")));
//       if (($(this.target).hasClass(".button1")==true)) {
//         $(".button3").text("3");
//         var audio=new Audio("sounds/green.mp3");
//         audio.play();
//         console.log($(this.target).hasClass(".button1"))
//       }
//
//     })
//
//   }
// }
