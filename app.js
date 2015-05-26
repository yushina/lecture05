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

function backRate(){
  var player = document.querySelector("audio");
  player.playbackRate = 1;
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

function onBackRateButton(event){
  backRate();
  var label = 
  document.querySelector("#playback-rate-control > span"); label.textContent = "x " + 1;
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



function resetPlaybackRate(){
  showPlaybackRate = value;
  showPlaybackRate(value);
}



var skip15secButton = document.querySelector("#skip");
skip15secButton.addEventListener("click",  onSkip15secButtonClicked);

var rewind15secButton = document.querySelector("#rewind");
rewind15secButton.addEventListener("click",  onRewind15secButtonClicked);

var rewindToTopButton = document.querySelector("#rewindToTop");
rewindToTopButton.addEventListener("click",  onRewindToTopButtonClicked);

var enableLoopButton = document.querySelector("#enableLoop");
enableLoopButton.addEventListener("click",  onEnableLoopButtonClicked);

var backRateButton = document.querySelector("#backx1");
backRateButton.addEventListener("click", onBackRateButton);
/*
var backx1Button = document.querySelector("#backx1");
backx1Button.addEventListener("click",  onbackx1ButtonClicked);
*/

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
// 描画コンテキスト


function draw(){
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "rgb(192, 192, 192)";
ctx.fillRect(canvas.width / 2 - 5, canvas.height / 2 - 5,10, 10);
}



function draw(){
  ctx.fillStyle = "rgb(32, 32, 32)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var data = [20, 40, 50, 60, 30, 10, 20, 40, 70, 5, -1, -20, -5, -20, -7, -5, 5];
  ctx.fillStyle = "rgb(255, 255, 255)";

  var i = 0;
  var offset = 5;
  var width = (canvas.width - offset * (data.length + 1))/ data.length;
  while(i < data.length){
    var x = offset * (i + 1) + width * i;
      ctx.fillRect(x, canvas.height / 2 - data[i] * 4, 
                   width, data[i] * 4);
      i = i + 1;
  }
}
