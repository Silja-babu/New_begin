/*                function x(){
                    var i =1;
                    setTimeout(function(){
                        console.log(i)
                    },3000);
                    console.log("hiii")
                }
                x()*/
// I want to print 1 2 3 4 5 in one by one

/*
                    function x(){
                        for(var i=1; i<=5; i++){
                        function closure(i){
                            setTimeout (function(){
                                console.log(i)
                            
                            },i*1000)
                        }
                        closure(i)
                        }
                    
                    }
                    x()     */
//this can be done by the var...and 1,2,5 printing we should use the closure.this ca be done easily by the let....



/*

                    function x(){
                        for(let i=1; i<=5; i++){
                            setTimeout(function(){
                                console.log(i)
                            },i*1000)
                        }
                    }

                    x()                                          */


   /*             function outer(){
                    var a=10;
                function inner(){
                        console.log(a)
                    }
                    inner()
                return inner
                }
                outer();*/
 // i can also write this code as 
 
 

/*
                        function outer(){
                            var a= 10;
                            return function inner(){
                                console.log(a)
                            }
                        }
                        outer()()*/

function outer(b){
    function inner(){
        console.log(a,b)
    }
    let a=10;
    return inner;
}

var close = outer('Hllo world')
close();