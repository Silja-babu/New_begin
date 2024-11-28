// function statement
a()
console.log(b)
function a(){
    console.log("a called")
}


//function expression

 var b= function (){
    console.log('b called')
 }

           /*    var b = function xyz(){
                console.log('b called')
               }
               a();//a called
               b();//b called
               xyz();//this line will get an error we cannot acces this */





 //function declaration

//it is same as the function statement


//Anonymous Function = doesnot have any identity = it is used as functions are used as value

// difference b/w parameters and arguments?


var b= function(param1, param2){
    console.log('b called')
    
}

a()
b(1,2)


//ability to used as value and it willl passed as an arguments is called as 1st class function....