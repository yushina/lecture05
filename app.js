function skip15sec(){
  var player  = document.querySelector("audio");
  player.currentTime = player.currentTime + 15;
}

function rewind15sec(){
  var player  = document.querySelector("audio");
  player.currentTime = player.currentTime - 15;
}

function rewindToTop(){
  var player = document.querySelector("audio");
  player.currentTime = 0;
}

function enableLoop(){
  var player = document.querySelector("audio");
  player.loop = true;
}

function onSkip15secButtonClicked(event){
  skip15sec();
}

function onRewind15secButtonClicked(event){
  rewind15sec();
}

function onRewindToTopButtonClicked(event){
  rewindToTop();
}

function onEnableLoopButtonClicked(event){
  enableLoop();
}


function onPlaybackRateChanged(event){ var rate = playbackRateControl.value; setPlaybackRate(rate);
};
var playbackRateControl = 
document.querySelector("#playback-rate-control > input"); playbackRateControl.addEventListener("change",
onPlaybackRateChanged);



function showPlaybackRate(value){ var label = 
document.querySelector("#playback-rate-control > span"); label.textContent = "x " + value;
}

function setPlaybackRate(value){
var player = document.querySelector("audio"); player.playbackRate = value; showPlaybackRate(value);
}









var skip15secButton = document.querySelector("#skip");
skip15secButton.addEventListener("click",  onSkip15secButtonClicked);

var rewind15secButton = document.querySelector("#rewind");
rewind15secButton.addEventListener("click",  onRewind15secButtonClicked);

var rewindToTopButton = document.querySelector("#rewindToTop");
rewindToTopButton.addEventListener("click",  onRewindToTopButtonClicked);

var enableLoopButton = document.querySelector("#enableLoop");
enableLoopButton.addEventListener("click",  onEnableLoopButtonClicked);

var backx1Button = document.querySelector("#backx1");
backx1Button.addEventListener("click",  onbackx1ButtonClicked);
