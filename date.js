let now=new Date();
console.log(now)


let Jan01_1970=new Date(0);
console.log(Jan01_1970);
let Jan02_1970= new Date(24*3600*1000);
console.log(Jan02_1970)



               let Dec01_2000=new Date(2000,11,1);
                console.log(Dec01_2000);
                let Dec06_2000=new Date(1000*60*60*24*6)
                console.log(Dec06_2000)

         
         let date =new Date();
         console.log(date.getHours());
         console.log(date.getUTCHours())       

         let today= new Date();
         today.setHours(0);
         console.log(today);
         today.setHours(0,0,0,0);
         console.log(today)



         let dates= new Date(2000,11,1)
         dates.setDate(dates.getDate()+6);
         console.log(dates)



         let datee= new Date();
         date.setDate(date.getSeconds()+70);
         console.log(datee)



         let start= new Date();
         for(let i=0;i<100000; i++){
            let doSomething=i*i*i;

         }
         let end = new Date();
         console.log(`The loop took ${end - start} ms`)



         function diffSub(date1, date2){
            return date2 - date1;
         }
         //           function diffGet(date1,date2){
         //               return date2.getTime() - date1.getTIme()
         //           }
         console.log(diffSub())
         //console.log(diffGet())


         function diffSubstract(date1,date2){
            return date2 - date1
         }
         function diffGetTIme(date1,date2){
            return date2.getTime() -date1.getTime();
         }
         function bench(f){
            let date1= new Date(0);
            let date2=new Date();

            let start= Date.now();
            for (let i=0; i<100000; i++)f(date1,date2);
            return Date.now()- start;
         }
         console.log('Time of diffSubstract:' + bench(diffSubstract) +'ms')
         console.log('TIme of diffGetTIme: '+bench(diffGetTIme)+ 'ms')
         
