//local scope


       //             function fn1(){
       //                 var number =12;
       //                 console.log(number)
       //             }
       //             function fn2(){
       //                 console.log(number)
       //             }

//                    fn1();
 //                   fn2();





 //Global scope it can access in all js



       //                 var number=12;
       //                 function fn1(){
       //                     console.log(number)
       //                 }
       //                 function fn2(){
       //                     console.log(number)
       //                 }
        //                fn1();
        //                fn2();

(function(){
    var button =document.getElementById('hello');
    button.style.background='green';
    button.onclick=()=>{
    console.log(button.innerHTML)
}
})();


        