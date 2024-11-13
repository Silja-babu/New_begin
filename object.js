let message='hello'
message=12345;
let n=123;
n=12.345;
console.log(1/0);
console.log(-1/0)
//NaN represent a computational error. it is a result of an incorrect or undefined mathematical operation for instance.
console.log('not a number'/2)
let str='hello'
let str2='lello'
let phrase=`can embed another ${str}`
console.log(phrase)
//bacticks in $ operation

let s='good morning '
let t='nice to meeet you'
let u=`${s}and ${t}"."`
console.log(u)



let isG=5<4;
console.log(isG)


let user={
    name:"john",
    age:32,
    "likes birds":true,
};
console.log(user.name)

let use=new Object(
    name="john",
    age=32
)
console.log(use)
delete user.age
console.log(user)
user.isM=true;
user.DOB='06/12/2000';
console.log(user)


user["likes me"]=true;
console.log(user)

let fruit="apple";
let bag={
    [fruit]:5
};
console.log(bag.apple)

let fruits="apple"
let bags={

}
bags[fruits]=5;
console.log(bags)

let frui='apple';
let bage={
    [frui+"computer"]:5
}
console.log(frui)
console.log(bage)


function makeUser(name,age){
    return{
    name:name,
    age:age,
    }
}
let useing=makeUser("John",30)
console.log(useing)
console.log(useing.name)


let obj={
    0:"test"
};
console.log(obj["0"])
console.log(obj[0])


           //in//

 let nae={
    names:"steam mirky",
    age:100,
    place:"jordhan"
 }   
 let kiy="age"       
 console.log("age" in nae)
 console.log(kiy in nae)


    for (let key in nae){
        console.log(key);
        console.log(nae[key])
    }

let codes={
    "+100":"India",
    "+50":"Sweden",
    "+25":"malaysia",
    "+0" :"usa"
}    
for (let key in codes){
    console.log(codes[key])
    console.log(key)
}

 console.log(Math.trunc(Number(2.5)))

 for(let code in codes){
   
    console.log( +code )
    console.log(codes[code])
 }

 function isEmpty(object){
    for(let key in object){
        return false;
    }
    return true;
 }
 isEmpty()
 console.log(isEmpty)


 let salaries ={
    john:100,
    ann:160,
    pete:130
    
 }
 let sum=0;

 for(let key in salaries){
    sum+=salaries[key]
 }
 console.log(sum)


 let menu={
    width:200,
    height:300,
    title:"My Menu"
 }
 multiplyNUmeric(menu)


 function multiplyNUmeric(obj){
    for (let key in obj){
        if(typeof obj[key]=='numeric'){
            obj[key]*=2;
        }
    }
 }
 console.log(menu)

      //prototypal inheritance
 
let animal={
    eats:true,
    walk(){
        console.log("animal walk")
    }
}      
let rabbit={
    jumps:true,
    __proto__:animal
};


console.log(rabbit.walk)

 

let useit={
    name:"john",
    surname:"smith",

    set fullName(value){
        [this.name, this.surname]=value.split(" ");

    },
    get fullName(){
        return `${this.name} ${this.surname}`;
    }
 }
let admin={
    __proto__:user,
    isAdmin:true
};
console.log(admin.fullName);
admin.fullName="Alice Cooper";
console.log(admin.fullName);
console.log(useit.fullName);

let anial={
    walk(){
        if(!this.isSleeping){
            console.log(`i walk`)
        }
    },sleep(){
        this.isSleeping=true;
    }

}
let rabbits = {
    name:"White Rabbit",
    __proto__:anial

};
rabbits.sleep();
console.log(rabbits.isSleeping)
console.log(anial.isSleeping)

let ani={
    eats:true
};
let rabits ={
    jumps:true,
    __proto__:ani
};
for(let prop in rabits){
    let isOwn= rabbit.hasOwnProperty(prop);
    if(isOwn){
        console.log(`Our:${prop}`)
    }else{
        console.log(`inherited:${prop}`)
    }

}

let anima={
    jumps:null
};
let rabbi={
    __proto__:animal,
    jumps:true

}
console.log(rabbi.jumps)
delete rabbi.jumps;
console.log(rabbi.jumps)
delete anima.jumps;
console.log(rabbi.jumps)


let head={
    glasses:1
};
let table={
    pen:3
};
let bed={
    sheet:1,
    pillow:2
};
let pockets={
    money:2000
};


let hamster={
    stomach:[],
    eat(food){
        this.stomach.push(food);
    }
}
let speedy={
    __proto__:hamster,
};
let lazy={
    __proto__:hamster
};
speedy.eat("apple");
console.log(speedy.stomach);
console.log(lazy.stomach);



let use1={
    name:"John",
    age:30,
    sayHi(){
        console.log(this.name)

    }
}
use1.sayHi();
console.log(use1);


  //              let us={
  //                  firstName:"Ilya",
  //                  sayH(){
  //                      let arrow=()=>console.log(this.firstName);
   //                     arrow();
     //               }
       //         }
         //       user.sayH();
           //     console.log(us)
//
//
  //              function makeUser1(){
    //                return{
      //                  name:"John",
        //                ref:this
          //          };
            //    }
              //  let user1=makeUser1();
                //console.log(user1.ref.name)
//
  //              function makeUser(){
    //                return{
      //                  name:"John",
        //                ref:this
          //          }
            //    }
              //  let user=makeUser();
                //console.log(user.ref.name)


//                let usermain={
//                    firstName:"Ilya",
//                    sayit(){
//                        let arrow=()=> console.log(this.firstName);
//                        arrow()
//                    }
//                }
//                usermain.sayit();

   //                                                             let ladder={
     //                                                               step:0,
       //                                                             up(){
         //                                                               this.step++;
           //                                                         },
             //                                                       down(){
               ////                                                         this.step--;
                   //                                                 },
                     //                                               showStep:function(){
                       //                                                 console.log(this.step)
                         //                                           }
                           //
                           //                                     }
                             //                                   console.log(ladder)
///
   //                                                             function User(name){
     //                                                               this.name=name;
       //                                                             this.isAdmin=false;
         //                                                       }
           //                                                     let user=new User("Jack");
             //                                                   console.log(user.name)
               //                                                 console.log(user.isAdmin);
   let baby={
    name:"cris",
    age:"1 day"
   };
   baby.hostipal=function(){
    console.log("hello baby, welcome to earth");
   }
   baby.hostipal()
   console.log(baby.name)

   let baby2={
    name:"cris",
    age:"2 day"
   }
   function hospi(){
    console.log("Hello baby2, how's the earth")

   }
   baby2.hospi=hospi;
   baby2.hospi();

   baby3={
    hospi1:function(){
        console.log("hello baby")
    }
   }
   

   let baby4={
    name:"aaa",
    age:1/2,

    pediatrician(){
        console.log(this.name);
    }
   }
   baby4.pediatrician();


//                            let baby5={
  //                              name:"alice",
    //                            age:2,
      //                          pedia(){
        //                            console.log(this.name)
          //                      }
            //                }
              //              let admin=baby5;
                //            baby5=null;
                  //          admin.pedia();

   let babyuser={name:"JOhn'son"};
   let babyadmin={name:"Admin"}
   function hiii(){
    console.log(this.name);
   }
   babyuser.f=hiii;
   babyadmin.f=hiii
   babyuser.f();
   babyadmin.f();
   babyadmin['f']();
   babyuser['f']();
      
                 //ARROW FUNCTION

let baby6={
    firstName:"Anson",
    callMe(){
        let arrow=() => console.log(this.firstName)
        arrow();

    }
}               
baby6.callMe()  

let group1={
    title:"Our groupone",
    students:["AS","DF","GH","JK"],
    showList(){
        this.students.forEach(
            students=>console.log(this.title+':'+students)
        )
    }
}
group1.showList()


let music={
    singer:"V.S.Chitra",
    songs:["race","beautyman","kathosukathoram","mummy and me"],
    showList(){
        this.songs.forEach(
            song=>console.log(this.singer+": "+ song)
        )
    }
}
music.showList();


let Dance={
    Dancer:["Jijo","Dulker","Lal","Mamooty","Kalidas"],
    artist:"Artist in malayalam",
    
    showList(){
       this.Dancer.forEach(
           dance=>console.log(dance+" = "+this.artist)
       )
    }
}
Dance.showList();


function defer(f,ms){
    return function(){
        setTimeout(()=>f.apply(this, arguments),ms);
    }
}
function sayHi(who){
    console.log('hello,' + who)
}
let sayHiDeferred=defer(sayHi, 2000);
sayHiDeferred("Joohn")


function deffer(f,ms){
    return function(){
        setTimeout(()=>f.apply(this,arguments),ms)
    }
}
function sayHi(who){
    console.log('hello,' + who)
}
let sayHiDefferred=deffer(sayHi, 2000);
sayHiDefferred("Jooooooohn")
   

function deer(f,ms){
    return function(...args){
        let ctx=this;
        setTimeout(function(){
            return f.apply(ctx,args)
        },ms)
    }
}
function sayHi(who){
    console.log('hello,' + who)
}
let sayHiDeerred=deer(sayHi, 2000);
sayHiDeerred("Jooooooohn")
   


class wildanimal{
    constructor(name){
        this.speed=0;
        this.name=name;

    }
    run(speed){
        this.speed=speed;
        console(`${this.name} runs with speeed ${this.speed}.`);
    }
    stop(){
        this.speed=0
        console(`${this.name} stands stills.`)
    }
    
}
let wild =new wildanimal("My Animal")
console.log(wild)