let pyramidSizeEl=document.getElementById("pyramidSize")
let colours=document.getElementById("selectcolour")
let durationEl=document.getElementById("duration")
let startButton=document.getElementById("start")
let stopButton=document.getElementById("stop")
let pyramidContainer=document.getElementById("pyramidcontainer")

let pyramidSize=parseInt(pyramidSizeEl.value,5)
let blinkcolour=colours.value
let blinkduration=parseFloat(durationEl.value)*1000

let pyramid=[]
let currentrow=0
let blinkingInterval;

colours.addEventListener('input',(event)=>{
    blinkcolour=event.target.value
})


durationEl.addEventListener('input',(event)=>{
    blinkduration=parseFloat(event.targent.value)*1000

})



function generatePyramid(n){
    const container=document.getElementById('pyramidcontainer')
    
    container.innerHTML='';
    pyramid=[]
    for(let i=1;i<=n;i++){
        
        let spaces=''.repeat(n-i);
        let stars='<button class="circle"></button>'.repeat(2*i-1);
        
        let row=stars+spaces;
        pyramid.push(row)
    }
    container.innerHTML=pyramid.join('br')
}


function startBlinking(){
    start.disable=true;
    stop.disable=false;
    currentrow=0;
    generatePyramid(pyramidSize)
}
