document.onload=diagram()
let m


//random strum generator function
function strums()
{let array=[]; let x=document.getElementById("input").value;
x=Number(x);
let y;
let num
let timing=document.getElementById("timing").value
timing=timing[0]
timing=Number(timing)*4

for(i=1;i<x+1;i++){

function create(){y=Math.floor(Math.random()*10);
num=Math.floor(Math.random()*10+1)

if(y>=5){num=num+10}
else{num=num}

if(array.includes(num)==false && num<=timing){array.push(num)}
else{create()}
}

create()}

let xy

//refreshes output
for (i=1;i<=timing;i++){document.getElementById(i.toString()).style.color="black";
document.getElementById(i.toString()).style.backgroundColor="white"}

//new output
for (let ele of array){m=ele.toString(); document.getElementById(m).style.backgroundColor="#c76f04";}
}









//add visuals
function diagram(){let time=document.getElementById("timing").value;
if(time[0]=="3"){diagram2()}
else{diagram1()}
}



//sets 4/4 time
function diagram1()
{document.getElementById("hold").innerHTML=""
let array=["hold","1","e","&","a","2","e","&","a","3","e","&","a","4","e","&","a"];


for(i=1;i<=16;i++){document.getElementById("hold").innerHTML+="<div class='holder2' id="+i.toString()+">"+array[i]+"</div>"}

let timing=document.getElementById("timing").value
timing=timing[0]
timing=Number(timing)*4

for (i=1;i<=timing;i++){

if(i==1 || (i-1)%4==0){document.getElementById(i.toString()).style="background-color:white; color:black; height:35px; font-weight:800"}

else if((i-3)%4==0){document.getElementById(i.toString()).style="background-color:white; color:black; height:25px"}

else {document.getElementById(i.toString()).style="background-color:white; color:black; height:20px"}}

}

//sets 3/4 time
function diagram2()
{document.getElementById("hold").innerHTML=""
let array=["hold","1","&","a","2","&","a","3","&","a","4","&","a"];

for(i=1;i<=12;i++){document.getElementById("hold").innerHTML+="<div class=holder id='"+i.toString()+"'>"+array[i]+"</div>"}
let timing=document.getElementById("timing").value
timing=timing[0]
timing=Number(timing)*4

for (i=1;i<=timing;i++){

if(i==1 || (i-1)%3==0){document.getElementById(i.toString()).style="background-color:white; color:black; height:30px; font-weight:800"}

else if(i==2 || (i-2)%3==0){document.getElementById(i.toString()).style="background-color:white; color:black; height:20px"}

else {document.getElementById(i.toString()).style="background-color:white; color:black; height:20px"}}
}


//METRONOME

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = new AudioContext();
var curTime = 0.0
var clock = document.getElementById("clock");
var nextNote = document.getElementById("nextNote");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var timerID;
let prevBPM;
let bpmInput=document.getElementById("bpm")
let timer
let truth;

function playSound(time) {

  var osc = audioContext.createOscillator();
  osc.connect(audioContext.destination);
  osc.frequency.value = 500;
  osc.start(time);
  osc.stop(time + 0.1);};

function scheduler() {
clearTimeout(timer)
while(curTime < audioContext.currentTime + 0.1) {

 playSound(curTime);
updateTime()
    }
timer=window.setTimeout(scheduler, 10)
}

function updateTime(){curTime+=(60/Number(bpmInput.value))}



startBtn.addEventListener('click', function(){scheduler();curTime=audioContext.currentTime}, false);

stopBtn.addEventListener('click', function() {clearTimeout(timer);}, false);

bpmInput.addEventListener('click', function(){clearTimeout(timer);}, false);

if(audioContext.state === 'suspended'){audioContext.resume();
};


//make metronome collapsable
var coll=document.getElementsByClassName("collapsible");


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.querySelector("#metronome");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
