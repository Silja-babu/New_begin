const firstDiv = document.getElementById("firstdiv");
const secondDiv = document.getElementById("seconddiv");
const colours = document.getElementById("selectcolour")
const durationEl=document.getElementById("duration")
const startButton=document.getElementById("start")
const stopButton=document.getElementById("stop")

let selectcolour=colours.value;
let duration=parseInt(durationEl.value)
colours.addEventListener('input',(event)=>{
    selectcolour=event.target.value;
})
durationEl.addEventListener('input',(event)=>{
    duration=parseInt(event.target.value);
    console.log("selected duration:",duration)
});
let blinkingInterval;
let isFirstDivActive=true;

function startBlinking(){
    startButton.disabled=true;
    stopButton.disabled=false;
    blinkingInterval=setInterval(()=>{
        if(isFirstDivActive){
            firstDiv.style.background=selectcolour;
            secondDiv.style.background="transparent"
        }
        else{
            secondDiv.style.background=selectcolour;
            firstDiv.style.background="transparent"
        }
        isFirstDivActive = !isFirstDivActive;
    }, duration * 1000);
    
}
function stopBlinking(){
    clearInterval(blinkingInterval);
    
    startButton.disabled=false;
    stopButton.disabled=true
}
startButton.addEventListener('click',startBlinking)
stopButton.addEventListener('click',stopBlinking)
















