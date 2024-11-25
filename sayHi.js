//                export function sayHi(user){
//                    console.log(`Hello , ${user}!`)
//                }


/*                let months = ['Jan' ,'Feb' ,'Mar', 'Apr' ,'Aug' ,'Sept' , 'Oct', 'Nov','Dec'];
                const MODULES_BECAME_STANDARD_YEAR = 2015;

                class User{
                    constructor(name){
                        this.name = name;
                    }
                }*/

   //                 import { sayBye,sayHi } from "./main.js";
   //                 
   //                 sayHi('JOhn');
   //                 sayBye('Johny')


/*
                        import * as say from "./main.js";
                        say.sayHi("john")
                        say.sayBye("John")


                            import { sayHi as hi, sayBye as bye } from "./main.js";
                            hi('JOhn');
                            bye('john')                        */


 import User from "./main.js";

 new User('John');

 console.log(User.name)