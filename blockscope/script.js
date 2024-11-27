//block is {}..it will group  that will turns into a single statement

//lock is used to situated multiple line



//if(true) true //sigle statment
/*
            if (true){
                var a= 100
                console.log(a)
            }// {} is used to make multiple statement*/

  /*  {
        const a= 20;
        let b = 30;
        var c= 40;
    }  // let  and const is not accessible in outside the curly brace   */
      
    


    
   /* {
        var a= 10
        let b =20;
        const c=100;
        console.log(a)
        console.log(b)
        console.log(c)
    }
    var b =10000;
    console.log(b)// this is shows the bblock scope*/


    //the  sthe shadowing


var re=90

function set(){
    var re=10
    console.log(re)
}
set();
console.log(re)
