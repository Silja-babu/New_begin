//                var n=2;
//                function square(num){
//                    var ans=num*num;
//                    return ans;

//                }
//                var square2 =square(n);
//                var square4 =square(4);
//                //memory and code execution
//                //sqaure(n) here the execution context is begin
//                console.log('')


//        getName();
//        console.log(x)
//            var x= 7;
//            function getName(){
//                console.log("Namaste Javascript")
//            }

//undefined and not defined


  //                  var x=1;
  //                  a();
  //                  b();
  //                  console.log(x);
  //                  function a(){
  //                      var x= 10;
  //                      console.log(x);
  //                  }
  //                  function b(){
  //                      var x=100
  //                      console.log(x)
  //                  }

 //                   var a=10;
 //                   function b(){
 //                       var x=10;
 //                   }
//
//                    console.log(window.a);
//                    console.log(a);
 //                   console.log(this.a);

 //               console.log(a)
  //              var a=7;
  //              //undefined and defined 

  //              if(a===undefined){
   //                 console.log("undefined a")
  //              }
  //              else{
  //                  console.log("not undefined a")
  //              }
  //                  var b;
 //                   console.log(b);    
//                    b=10;
//                    console.log(b)      ;
//                    b="hello world";
//
//                    console.log(b);
//                    b=undefined;
//                    console.log(b)                            
                //scope chain scope& lexical envirnonment
       function a(){
        var b=10
        c();       
       
        function c(){
            
        }

       }
       var b=2
       console.log(b);
       a();         //scope which means that where the access of the number can done....
       