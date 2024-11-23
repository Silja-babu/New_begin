//                                console.log('Started');
//                                const a= getVal1();
//                                const b= getVal2();
//
//                                const result =processValues(a,b);
//                                console.log(result)/;
//
//                                console.log('ended')





//                                function getVal1(){
//                                    return 12;
//                                }
//                                function getVal2(){
//                                    return 22;
//                                }
//                                function processValues(a,b){
//                                    return a+b;
//                                }
            

//above is normal code we want to try and catch when the error occured



  //                                      console.log("Get started");
  //                                      let a;
  //                                      try{
  //                                          a=getVal1();
  //                                      } catch(e){
  //                                          a=0
  //                                      }
  //                                      const b=getVal2();
  //                                      const result = processValues(a,b)
  //                                      console.log(result)
  //                                      console.log('Ended');

//
//                                        function getVal1(){
//                                            var obj = undefined
//                                            return obj.value;
//                                        }

  //                                      function getVal2(){
   //                                         return 22;
  //                                      }
  //                                      function processValues(a,b){
  //                                          return a+b;
  //                                      }



  console.log('Get Started when 2 try catch')

  let a;
  let b;
   
  try{
    a= getVal1();
    b= getVal2();
  }
  catch(e){
    a=0;
    b=32;
  }
  finally{
    console.log("result")
  }
  const result= processValues(a,b);
  console.log(result);
  console.log('ended')


  function getVal1(){
    console.log('val1')
    return 13;
  }
  function getVal2(){
    console.log('val2')
    juck();
    return 12;
    
    
  }
  function processValues(a,b){
    return a+b;
  }
