
   /*         for(let i=1; i<=9; i++){
                document.body.style.background='red'
                setTimeout(()=>document.body.style.background = "",1000)
            }*/

                function startBlink(){
                    window.blinker = setInterval(function(){
                        if(window.blink){
                           $('.blink').css('color','blue');
                           window.blink=false;
                         }
                        else{
                            $('.blink').css('color','white');
                            window.blink = true;
                        }
                    },500);
                  }
                
                  function stopBlink(){
                    if(window.blinker) clearInterval(window.blinker);
                  } 
