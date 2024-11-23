        //object.keys,values,entries
 
let user={
    name:"john",
    age:32

}        
for(let value of Object.values(user)){
    console.log(value)
}


let prices={
    banana:1,
    orange:2,
    meat:4,
};
let doublePrices=Object.fromEntries(
    Object.entries(prices).map(entry =>[entry[0],entry[1]*3])

)
console.log("doublePrices.meat : "+doublePrices.orange)

let ranges={
    from:1,
    to:5
};
console.log(ranges)
ranges[Symbol.iterator] =function(){
    return {
        current:this.from,
        last:this.to,
        next(){
            if(this.current <= this.last){
                return {done:false, value:this.current++};
            }else{
                return{done:true}
            }
        }
    }
}
for(let num of ranges){
    console.log(num)
}
let range={
    from:6,
    to:15,
    
[Symbol.iterator](){
    this.current =this.from;
    return this;
},
next(){
    if(this.current<=this.to){
        return{done:false,value:this.current++};
    }else{
        return{done:true}
    }
}}
for(let num of range){
    console.log(num)
}

let str ="Hello";
let iterator= str[Symbol.iterator]();
while(true){
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value);
}

let arrayLike ={
    0:"Hello",
    1:"World",
    length:2
};
let arr =Array.from(arrayLike);
console.log(arr.pop());

function slice(str, start, end){
    return Array.from(str).slice(start,end).join('');

}
let strr = '𝒳😂𩷶';
console.log(slice(str,1,3));
console.log(strr.slice(1,3))


let map= new Map();
map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1')

let john={name:"John"};
let visitCountMap = new Map();
visitCountMap.set(john,123);
console.log(visitCountMap.get(john))



let johe ={name:"JOhn"};
let ben ={name:"Ben"};
let visitCountObj ={};
visitCountObj[ben]=234;
visitCountObj[johe]=123;
console.log(visitCountObj["[object Object]"])




 //                       let jop={name:"JOhnnni"};
 //                       let mape = new Map();
 //                       mape.set(john, "....");
 //                       jop=null;


 //                           let weakMap = new WeakMap();
 //                           let obj ={};
 //                           weakMap.set(obj, "ok");
 //                           weakMap.set("test","Whoops")



 //                                       let cache = new WeakMap();
 //                                       function process(obj){
 //                                           if(!cache.has(obj)){
 //                                               let result =obj;
 //                                               cache.set(obj,result);
 //                                               return result
 //                                           }
 //                                           return cache.get(obj);
 //                                       }
 //                                       let obj ={};
 //                                           let result1 = process(obj);
 //                                           let result2 = process(obj)
//
 //                                           obj=null




let start = new Date();
for (let i=0; i<1000000;i++){
    let doSomething = i*i*i*i;
}
let end = new Date();
console.log(`The loop took ${end - start} ms`)



let us1er={
    name:"John",
    age:30,
    tostring(){
        return `{name:"${this.name}", age: ${this.age}}`;
    }

}
console.log(us1er)


let student ={
    name:'John',
    age:30,
    isAdmin:false,
    courses:['html','css','js'],
    spouse:null
};
let json =JSON.stringify(student);
console.log(typeof json);
console.log(json);

let room ={
    number:23
};
let meetup={
    title:"Conference",
    participants:[{name:"John"},{name:"Alice"}],
    place:room
};
room.occpiedBy = meetup;
console.log(JSON.stringify(meetup,['title','participants','place','name','number']));

 //                                   let room ={
//                                        number:23
//                                    };
//                                    let meetup1={
//                                        title:"Conference",
////                                        participants:[{name:"John"},{name:"Alice"}],
 //                                       place:room
 //                                   };
 //                                   room.occpiedBy = meetup;
 //                                   console.log(JSON.stringify(meetup,function replacer(key,value){
 //                                       console.log(`${key}:${value}`);
 //                                       return(key=='occpiedBy')?undefined:value;
//
//                                    }))



let numbers="[0,1,2,3]";
numbers=JSON.parse(numbers);
console.log(numbers)


function pow(x,n){
    let result=1;
    for (let i=0;i<n; i++){
        result*=x
    }
    return result
}
console.log(pow(2,3));

function powe(x,n){
    if(n==1){
        return x;

    }else{
        return x*powe(x,n-1);
    }
}
console.log(powe(2,3))


function poww(x,n){
    if(n==1){
        return x;
    }else{
        return x*poww(x,n-1);
    }
}
console.log(poww(3,6));


function poow(x,n){
    let result=1;
    for (let i=0; i<n; i++){
        result*=x;
    }
    return result;
}
console.log(poow(2,3));

function ppp(x,n){
    if(n==1){
        return x;
    }else{
        return x*ppp(x,n-1);
    }
}
console.log(ppp(2,3));


function f(){
    let showArg=()=>console.log(arguments[0]);
    showArg();
}
f(1);

let array=[3,5,1];
let arra2=[8,9,15];
let merged=[0,...array,2,...arra2];
console.log(merged);



let arrayy=[1,2,3];
let arrCopy=[...arrayy];
console.log(JSON.stringify(arrayy)===JSON.stringify(arrCopy));
console.log(arrayy===arrCopy);
arrayy.push(4);
console.log(arrayy);
console.log(arrCopy);




//                                    function loadScript(src){
//                                        let script=document.createElement('script');
//                                        script.src=src;
//                                        document.head.append(script)
//                                    }



let taget={};
let proxy = new Proxy(taget,{});
proxy.test=5;
console.log(taget.test);
console.log(proxy.test);
for(let key in proxy) console.log(key)




let numberi=[0,1,2];
numberi=new Proxy(numberi, {
    get(target,prop){
        if(prop in target){
            return target[prop];
        }else{
            return 0;
        }
    }
})    
console.log(numberi[1]);
console.log(numberi[123]);


let dictionary={
    'Hello':'Hola',
    'Bye':'Adios'
};
console.log(dictionary['Hello']);
console.log(dictionary['Welcome']);



let dictionaryy={
    'Hello':'Holoo',
    'Bye':'Adios'
};
dictionaryy = new Proxy(dictionaryy,{
    get(target,phrase){
        if(phrase in target){
            return target[phrase];
        }else{
            return phrase;
        }
    }
})

console.log(dictionary['Hello']);
console.log(dictionaryy['Welcome to Proxy'])




let numbere=[];
numbere=new Proxy(numbere,{
    set(target,prop,val){
        if(typeof val=='number'){
            target[prop]==val;
            return true;
        }else{
            return false;
        }
    }
})
numbere.push(1);
numbere.push(2);


let user4={
    name:"John",
    age:30,
    _password:"****"

};
user4=new Proxy(user,{
    ownKeys(target){
        return Object.keys(target).filter(key =>!key.startsWith('_'));
    }
})
for(let key in user4) console.log(key);
console.log(Object.keys(user4))
console.log(Object.values(user4))



let user5={};
user5=new Proxy(user5,{
    ownKeys(target){
        return ['a','b','c'];
    }
})
console.log(Object.keys(user5))


let user6={}
user6=new Proxy(user6,{
    ownKeys(target){
        return['a','b','c'];
    },
    getOwnPropertyDescriptor(target,prop){
        return{
            enumerable:true,
            configurable:true
        };
    }
});
console.log(Object.keys(user6));

let usedit={
    name:"John",
    _password:"secret"
};
console.log(usedit._password)


let usedout={
    name:"John",
    _password:"****"
};
let usedoutin={
    name:"John",
    _password:"****"

};
usedoutin=new Proxy(usedoutin,{
    get(target,prop){
        if(prop.startsWith('_')){
            throw new Error("Access denied");
        }
        let value = taget[prop];
            return(typeof value === 'function' )?value.bind(target): value;
        
    },
    set(target,prop,val){
        if(prop.startsWith('_')){
            throw new Error("Access denied");
        }else{
            target[prop] = val;
            return true;
        }
    },
    deleteProperty(target,prop){
        if(prop.startsWith('_')){
            throw new Error("Acess denied")
        }else{
            delete target[prop];
            return true;
        }
    },
    ownKeys(target){
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});
try{
    console.log(user._password);

}catch(e){console.log(e.message);}

try{
    usedoutin._password = "test";

}catch(e){console.log(e.message);}

try{
    delete usedoutin._password;
}catch(e){console.log(e.message)}

for(let key in usedoutin)console.log(key)


let rannge={
    start:1,
    end:10
};
rannge=new Proxy(rannge,{
    has(target,prop){
        return prop >= target.start && prop <= target.end
    }
});
console.log(5 in rannge);
console.log(11 in rannge);



function delay(f, ms){
    return function(){
        setTimeout(() =>f.apply(this,arguments),ms);
    };
}
function sayHi(ussedd){
    console.log(`Hello, ${ussedd}!`)
}
sayHi=delay(sayHi,3000);
sayHi("John")


function delays(f,ms){
    return function(){
        setTimeout(() =>f.apply(this.arguments),ms);
    };
}
function sayHi(usssed){
    console.log(`Hello, ${usssed}!`);

}
console.log(sayHi.length);
sayHi=delay(sayHi,3000);
console.log(sayHi.length)


function delay(f,ms){
    return new Proxy(f, {
        apply(target, thisArg, args){
            setTimeout(()=>target.apply(thisArg,args),ms);
        }
    })
}
function sayHiii(usssedd){
    console.log(`Hello, ${usssedd}!`);
}
sayHiii=delay(sayHiii,3000);
console.log(sayHiii.length);
sayHiii('joooppan');


let uuued={};
Reflect.set(uuued,'name','John');
console.log(uuued.name)



let usedused ={
    name:"John"
};
usedused=new Proxy(usedused,{
    get(target,prop,receiver){
        console.log(`GET ${prop}`)
        return Reflect.get(target,prop,receiver);
    },
    set(target,prop,val,receiver){
        console.log(`SET ${prop} = ${val}`)
        return Reflect.set(target, prop, val, receiver);
    }
});

let name = usedused.name;
usedused.name ="Pete";



let userus={
    _name:"Guest",
    get name(){
        return this._name;
    }
};
let userProxy = new Proxy(userus,{
    get(target,prop,receiver){
        return target[prop]
    }
})

console.log(userProxy.name);



let udser={
    _name:"Guest",
    get name(){
        return this._name;
    }
};

let userrProxy=new Proxy(udser,{
    get(target,prop,receiver){
        return Reflect.get(target,prop,receiver)
    }
});

let admin={
    __proto__:userrProxy,
    _name:"Admin"
};
console.log(admin.name)

let mapr = new Map();
let proxy1 = new Proxy(mapr,{
    get(target,prop,receiver){
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target)   : value
    }
})

proxy1.set('test',1);
console.log(proxy1.get('test'))


// Error..........//Error.................


//                                        class Uied{
//                                            #name="Guest";
//
//                                            getName(){
//                                                return this.#name;
//                                            }
//                                        }
//                                        let userr = new Uied();
//                                        userr=new Proxy(userr, {});
//                                        console.log(userr.getName())




class Auser{
    #name="Guest";
    getNamee(){
        return this.#name;
    }
}
let uusser = new Auser();
uusser = new Proxy(uusser,{
    get(target,prop,receiver){
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target) : value;
    }
})
console.log(uusser.getNamee());



let allUser = new Set();
class Luser{
    constructor(name){
        this.name = name;
        allUser.add(this)
    }
}
let luser = new Luser("John");
console.log(allUser.has(luser));

luser = new Proxy(luser,{});
console.log(allUser.has(luser));
//                                function makeObservable(target){
//                                }
//                                let userrrrr={};
//                                userrrrr=makeObservable(userrrrr);
//                                userrrrr.observe((key, value) =>{
//                                    console.log(`SET ${key} = ${value}`)
//                                })
//                                userrrrr.name = "John";


let code='console.log("Hello")';
eval(code);


let value = eval('1+1');
console.log(value);

let values = eval("let i=0; ++i");
console.log(values)

let a=1;
function f(){
    let a=2;
    eval('console.log(a)')
}
f();

let x=5;
eval("x=10");
console.log(x)

eval("let x=5; function f() {}");
console.log(typeof x);


let x1=1;
{
    let x1=5;
    eval("console.log(x1)")
}


//                        let f = new Function('a','console.log(a)')
//                        f(5);



//                            export let config={};
//                            export function sayHiiiii(){
//                                console.log(`Ready to serve, ${config.user}!`)
//                            }



let animal={
    eats:true
};
let rabbit = Object.create(animal);
console.log(rabbit.eats);
console.log(Object.getPrototypeOf(rabbit)===animal);
Object.setPrototypeOf(rabbit,{});


let animall={
    eats:true
};
let rabbitt=Object.create(animal,{
    jumps:{
        value:true
    }
})
console.log(rabbitt.jumps)



let chineseDictionary = Object.create(null);
chineseDictionary.hello="你好";
chineseDictionary.bye="再见";
console.log(Object.keys(chineseDictionary))




let dictionaryyi = Object.create(null);
dictionaryyi.apple="Apple";
dictionaryyi.__proto__="test";

for(let key in dictionaryyi){
    console.log(key);
}

console.log(dictionaryyi);


//                        function Rabbitte(name){
//                            this.name=name;
//                        }
//                        Rabbitte.prototype.sayHi= function(){
//                            console.log(this.name);
//                        };
//                        let Rabbitte = new Rabbitte("Rabbit");



//                    fetch('/article/promise-chaining/user.json')
//                        .then(response => response.json())
//                        .then(user => fetch(`https://api.github.com/users/ ${user.name}`) )
//                        .then(response => response.json())
//                        .then(githubUser => new Promise((resolve,reject) =>{
//                            let img = document.createElement('img');
//                            img.src= githubUser.avatar_url;
//                            img.className="promise-avatar-example";
//                            document.body.append(img);
///                            setTimeout(()=>{
 //                               img.remove();
 //                               resolve(githubUser);
//                            },3000)
//                        }))
//                        .catch(error => console.log(error.message))

//                            new Promise((resolve,reject) =>{
//                                throw new Error("Whoops");

//                            }).catch()


new Promise((resolve,reject) =>{
    throw new Error("Whoops!");
}).catch(function(error){
    console.log("The error is handled, continue normally");
}).then(()=>console.log("Next successful handler runs"))

new Promise((resolve,reject) =>{
    throw new Error("Whoops!");
}).catch(function(error){
    if(error instanceof URIError){

    }else{
        console.log("Can't handle such error");
        throw error;
    }
}).then(function(){

}).catch(error =>{
    console.log(`The unknown error has occurred: ${error}`);
})

new Promise(function(){
    noSuchFunction();
})
    .then(() =>{

    })
//                                window.addEventListener('unhandledrejection',function(event){
//                                    console.log(event.promise);
//                                    console.log(event.reason);
//                                });
//                                new Promise(function(){
//                                    throw new Error("Whoops!");
//                                });



//                                        function curry(f){
//                                            return function(a){
//                                                return function(b){
//                                                    return f(a,b)
//                                                }
//                                            }
//                                        }
//
//                                        function sum(a,b){
//                                            return a+b;
//
//                                        }
//                                        let curriedSum = curry(sum);
//                                        console.log(curriedSum(1)(2));


//                                    export let months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec']

//                                    export const MODULES_BECAME_STANDARD_YEAR = 2015;

//                                    export class Usserr{
//                                        constructor(name){
//                                        this.name = name;
//                                    }}


//                                    import {sayHo, sayByi} from './say.js';

//                                    sayHo('John'); // Hello, John!
//                                    sayByi('John');



//                                        const namme ="Jesse";
//                                        const age=40;
//                                        export {namme,age}

//                                            const message =()=>{
//                                                const name = "Jesse";
//                                                const age=40;
//                                               return name+'is '+age+' Years old.'
//                                            };
//                                            export default message;


function myFirst(){
    myDisplayer("Hello");
}
function mySecond(){
    myDisplayer("Goodbye")
}
myFirst();
mySecond();


function myDisplayer(some){
    document.getElementById("demo").innerHTML=some;
}
function myCalculator(num1,num2){
    let sum = num1+num2;
}
let result = myCalculator(5,5);
myDisplayer(result)


function myDisplayer(some){
    document.getElementById('demo').innerHTML = some;
}
function myCalculator(num1, num2){
    let sum = num1+ num2;
    myDisplayer(sum)
}
myCalculator(5,5);

function myDisplayer(some){
    document.getElementById("demo").innerHTML=some;
}
function myCalculator(num1, num2, mycallback){
    let sum = num1+ num2;
    mycallback(sum);
}
myCalculator(5,5,myDisplayer)


const myNumbers= [4,1,-20,-7,5,9,-6]
const posNumbers = removeNeg(myNumbers,(x) => x>=0);
document.getElementById("demo").innerHTML=posNumbers;
function removeNeg(numbers,callback){
    const myArray=[];
    for (const x of numbers){
        if(callback(x)){
            myArray.push(x);
        }
    }
    return myArray;
}


function myDisplayer(something){
    document.getElementById("demo").innerHTML=something;
}
function myCalculator(num1, num2, mycallback){
    let sum= num1+ num2;
    myCalculator(sum)
}
myCalculator(5,5,myDisplayer);


setInterval(myFunction,1000);
function myFunction(){
    let d = new Date();
    document.getElementById("demo").innerHTML=
    d.getHours()+":"+
    d.getMinutes()+":"+
    d.getSeconds();
}


let myPromise = new Promise(function(myResolve,myReject){
    myResolve();
    myReject();
});
myPromise.then(
    function(value){},
    function(error){}
)

function myDisplayer(some){
    document.getElementById("demo").innerHTML=some;
}
let myPromises =new Promise(function(myResolve, myReject){
    let x=0;
    if(x==0){
        myResolve("OK");

    }else{
        myReject("Error");
    }

});
myPromise.then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
);

setTimeout(function(){
    myFunction("I love you!");
},3000);
function myFunction(value){
    document.getElementById("demo").innerHTML=value;
}

let myPromiise = new Promise(function(myResolve, myReject){
    setTimeout(function(){
        myResolve("I love you!!");
    },3000);

});
myPromiise.then(function(value){
    document.getElementById("demo").innerHTML= value;
})


function getFile(mycallback){
    let req = new XMLHttpRequest();
    req.open('GET',"mycar.html");
    req.onload = function(){
        if(req.status == 200){
            mycallback(req.responseText);
        }else{
            mycallback("Error: "+ req.status);
        }
    }
    req.send();
}
getFile(myDisplayer)


let myProomise = new Promise(function(myResolve,myReject){
    let req = new XMLHttpRequest();
    req.open('GET',"mycar.html");
    req.onload = function(){
        if(req.status==200){
            myResolve(req.response);
        }else{
            myReject("File not Found")
        }
    };
    req.send();
});
myProomise.then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
)

async function myFunction(){
    return "Hello";
}
function myFunction(){
    return Promise.resolve("Hello")
}

myFunction().then(
    function(value){},
    function(error){}
);


async function myFunction(){
    return "Hello";

}
myFunction().then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
);

async function myFunction(){
    return "Hello";

}
myFunction().then(
    function(value){myDisplayer(value)}
)

async function myDisplay(){
    let myPromiisee = new Promise(function(resolve,reject){
        resolve("I love you!!");
    });
    document.getElementById("demo").innerHTML=await myPromiisee
}
myDisplay();


async function myDisplay(){
    let myPromise = new Promise(function(resolve){
        resolve("I love you!!");
    });
    document.getElementById("demo").innerHTML=await myPromise;
}
myDisplay();

async function getFile(){
    let myPromise = new Promise(function(resolve){
        let req = new XMLHttpRequest();
        req.open('GET',"mycar.html");
        req.onload=function(){
            if(req.status==200){
                resolve(req.response);
            }else{
                resolve("File not found");
            }
        };
        req.send();
    });
    document.getElementById("demo").innerHTML=await myPromise;
}

getFile();

