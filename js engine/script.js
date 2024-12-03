//js caan run in everywhere....

//js engine is not a machine
//code will go throught step

//1.parsing
//2.compilation
//3.execution
    console.log('start') 
    
    setTimeout(function cb(){
        console.log('callback');
    },1000)

    console.log("end");


   /* let startDate = new Date().getTime();
    let enDate = startDate
    while(enDate < startDate +10000){
        enDate = new Date().getTime();
    }
    console.log("while expires")*/