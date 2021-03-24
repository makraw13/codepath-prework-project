// global constants
// const clueHoldTime = 300;//how long to hold each clue's light/sound
const cluePauseTime = 300; //how long to pause in between clues
const nextClueWaitTime = 900; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [1, 2, 5, 1, 2, 5, 6, 7, 6, 7, 6, 4, 3];
var songPatternLengths = [120, 120, 960, 120, 120, 960, 360, 120, 120, 120, 120, 120, 960];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 420;
var fullSongAccess = false; //can the player click on the full song?
var strikes = 0; //keep track of player mistakes


function startGame(){
  //initialize game variables
  strikes = 0; //set player strikes to 0
  updateStrikes()
  progress = 0;
  gamePlaying = true;
  fullSongAccess = false;
  // swap the Start and Stop buttons, hide the Hear Song button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("hearSongBtn").classList.add("hidden");
  document.getElementById("watchSongBtn").classList.add("hidden");
  clueHoldTime = 420;
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;  
  // swap the Start and Stop buttons, show the Hear Song button
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("hearSongBtn").classList.remove("hidden");
}
// Sound Synthesis Functions
const freqMap = {
  1: 587.33, //D
  2: 698.46, //F
  3: 880.00, //A
  4: 1046.50, //C
  5: 1174.66, //D
  6: 1318.51, //E
  7: 1396.91 //F
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 3;
  }
}

function playFullSong(){ //play the full Song of Storms. Sheet music location here: https://www.pinterest.com/pin/436708495097149427/
  let delay = 200;
  for(let i=0;i<pattern.length;i++){ //iterate through each note in the pattern
    let clueHoldTime = songPatternLengths[i]; //play specific note lengths
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playNote,delay,pattern[i], clueHoldTime) 
    delay += clueHoldTime; 
    delay += 120;
}}
function playNote(btn, clueHoldTime){
  if (fullSongAccess == true){
    lightButton(btn)
  }
    setTimeout(clearButton,clueHoldTime,btn);
    playTone(btn,clueHoldTime);
  }


function loseGame(){
  stopGame();
  alert("Oops-- wrong note. Better luck next time.");
}
function winGame(){
  stopGame();
  alert("Congratulations! Now you know the Song of Storms.");
  fullSongAccess = true;
  document.getElementById("hearSongBtn").classList.add("hidden"); //display the Play Song button
  document.getElementById("watchSongBtn").classList.remove("hidden"); //hide the Hear Song button
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence(guessCounter);
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect. Add a strike
    strikes++;
    updateStrikes()
    console.log("Player Strikes: " + strikes);
    if (strikes == 3){
      //GAME OVER: LOSE!
      setTimeout(loseGame, 200);
      }
    else{
      playClueSequence()
    }
  }
}     

function updateStrikes(){ //only display the current number of strikes
  if (strikes == 0){
    document.getElementById("0Strikes").classList.remove("hidden");
    document.getElementById("1Strikes").classList.add("hidden");
    document.getElementById("2Strikes").classList.add("hidden");
    document.getElementById("3Strikes").classList.add("hidden");
  }
  else if (strikes == 1){
    document.getElementById("0Strikes").classList.add("hidden");
    document.getElementById("1Strikes").classList.remove("hidden");
    document.getElementById("2Strikes").classList.add("hidden");
    document.getElementById("3Strikes").classList.add("hidden");
  }
  else if (strikes == 2){
    document.getElementById("0Strikes").classList.add("hidden");
    document.getElementById("1Strikes").classList.add("hidden");
    document.getElementById("2Strikes").classList.remove("hidden");
    document.getElementById("3Strikes").classList.add("hidden");
  }
  else if (strikes == 3){
    document.getElementById("0Strikes").classList.add("hidden");
    document.getElementById("1Strikes").classList.add("hidden");
    document.getElementById("2Strikes").classList.add("hidden");
    document.getElementById("3Strikes").classList.remove("hidden");
  }
}
