for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
  // What to do when a click is detected.
  var button=this.innerHTML;
  sound(button);
  animation(button);
});
}

document.addEventListener("keypress",function(event){
  // What to do when a key press is detected.
  sound(event.key);
  animation(event.key);
})

function sound(key){
  switch (key) {
    case "w":var audio = new Audio('sounds/tom-1.mp3');
                         audio.play();
      break;
    case "a":var audio = new Audio('sounds/tom-2.mp3');
                         audio.play();
      break;
    case "s":var audio = new Audio('sounds/tom-3.mp3');
                         audio.play();
      break;
    case "d":var audio = new Audio('sounds/tom-4.mp3');
                         audio.play();
      break;
    case "j":var audio = new Audio('sounds/snare.mp3');
                         audio.play();
      break;
    case "k":var audio = new Audio('sounds/crash.mp3');
                         audio.play();
      break;
    case "l":var audio = new Audio('sounds/kick-bass.mp3');
                         audio.play();
      break;
      default:console.log(key);
}
}

function animation(currKey){

  document.querySelector("." + currKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + currKey).classList.remove("pressed");
  },100)
}
