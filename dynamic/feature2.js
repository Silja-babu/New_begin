let isGreen = true;
let handle = null;
export function changebg(){
    if(!handle){
        handle =  setInterval(()=>{
            document.body.style.background = isGreen ? 'green' : 'blue';
            isGreen = !isGreen
        },500)
    }
   
}

export function stopChangebg(){
    if(handle){
       
        clearInterval(handle);
        handle = null;
        document.body.style.background = 'none'
    }
}