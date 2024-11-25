/*                import {sayHi} from './sayHi.js';

                            console.log(sayHi);
                            sayHi('John');   */


 /*               import * as user from './sayHi.js';

                console.log(sayHi);
                sayHi('John');*/


  //              const name ="Jesse";

  //              const age =40;

//                export{name, age};



 /*   function sayHi (user){
        console.log(`Hello , ${user}!`);
    }
    function sayBye(user){
        console.log(`Bye ,${user}`)
    }

    export{sayHi, sayBye};*/

    export default class User{
        constructor(name){
            this.name=name
        }
    }