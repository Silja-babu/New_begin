function add(){
    let x =10;
    let y=20;
    let z= x+y;
    console.log(z)
}
add();
function sub(){
    let a=10;
    let b=20
    let c=a-b;
    console.log(c)
}

sub()
let petNmae='Rocky'
myfuntion()
function myfuntion(){
    fruit='apple';
    console.log(typeof petNmae + '-'+'My pet name is ' + petNmae)
}
console.log(typeof petNmae+'-'+'my pet name is '+petNmae+' fruit name is '+ fruit)



myudefunction();
anotherfunction();
let petname;
function myudefunction(){

    let petname="Sizzer"
    console.log(petname)
}
function anotherfunction(){
    let petname ="Tom";
    console.log(petname);
}
console.log(petname)

{
    let num =10;
    console.log(num)
}
//                        let x0
//                        x0=12;
//                        console.log(x0)


if (true){
    const y12 =190;
    console.log(y12);

}



const arr1=["Prinyanka","chopra","ali"];
console.log(arr1.toString())
arr1[2]="swiliha";
console.log(arr1.toString())


const person={
    first_name:"Pankaj",
    last_name:"Singh",
    Age:20,
    About:"Web Developer and Competitive Programmer"
};
console.log(person);
person.first_name="Aryan";
person.last_name="Yadav";
person.Age=22;
person.About="Commerce undergraduate";
console.log(person)


var test =12
function foo(){
    console.log(test);
}
foo();

var test1=12,
test2=14,
test3=16
function foos(){
    console.log(test1,test2,test3)
}
foos();

var test5=12;
var test5=100;
console.log(test5)


var ttest=12;
function foou(){
    var ttest=100;
    console.log(ttest);
}
foou();
console.log(ttest);

'use strict';
var tesst=12;
delete(tesst);
console.log(tesst)

/*Arithmetic Operators
            1.addition(+)
            2.substraction(-)
            3.multiplication(*)
            4.division(/)
            5.modulus(%)
            6.exponentiation(**)
            7.increment(++)
            8.decrement(-)
            9.unary(+)
            10.negation(-)
*/
     

let e,f,g;
e=2;
f=3;
g=e+f;
console.log("The value of g is "+ g+".")


let age=19;
if(age>18)
    console.log("Congratulation, you are eligile to drive")

let i=10;
if(i<15)
    console.log("i is less than 15");
else
    console.log("I am Not in if")


let is =10;
if(is==10){
    if(is<15){
        console.log("is is smaller than 15");
        if(is<12)
            console.log("is is smaller than 12 too")
        else
            console.log("is is greater than 15")
    }
}


let j=20;
if(j==10)
    console.log("j is 10");
else if(j==15)
    console.log("j is 15");
else if(j==20)
    console.log("j is 20");
else
    console.log("j is not present");


let day =3;
let dayName;
switch(day){
    case 1:
        dayName="MOnday";
        break;
    case 2:
        dayName="Tuesday";
        break;
    case 3:
        dayName="Wednesday";
        break;
    case 4:
        dayName="Thursday";
        break;
    case 5:
        dayName="Friday";
        break;
    case 6:
        dayName="Saturday";
        break;
    case 7:
        dayName="Sunday";
        break;
    default:
        dayName="Invalid day"                            
}    
console.log(dayName)

let grade='B';
let result;
switch(grade){
    case 'A':
        result ="A (Excellent)";
        break;
    case 'B':
        result ="B (Average)";
        break;
    case 'C':
        result="C (Below than average)";
    default:
        result="No Grade"            
}
console.log(result)

let grades ='A'
let results;
switch(grades){
    case 'A':
        result="Grade is excellent"
        break;
    case 'B':
        result="Grade is good"
        break;
    case 'C':
        result="Grade is Average"
        break;
    case 'D':
        result ="Grade is Poor"
        break;
    default:
        text="No grades achieved"                
}
console.log(result)




const fruitii ="Mango";
switch(fruitii){
    case "Apple":
        console.log("Apple is healthy.")
        break;
    case "Mango":
        console.log("Mango is delicious.")
        break;
    default:
        console.log("NO fruit chosen.")    

}
const fruitee="Apple";
switch(fruitee){
    case "Apple":
        console.log("Apple is healthy.");
    case "Mango":
        console.log("Mango is delicious.")
        break   ;
    default:
        console.log("No fruit chosen.")         
}

for (let a=1; a<6; a++){
    if(a==4) break;
    console.log(a)
}


let t=1;
while(t<=5){
    console.log(t);
    if(t===3){
        break
    }
    t++;
}
let y=1;
do{
    console.log(y);
    if(y===3){
        break;
    }
    y++;
}while(y<=5);



//                                    for(let s=0; s<3; s++){
//                                        for(let e=0; e<3; e++){
//                                            if(s===1 && e===1){
//                                                break outerLoop;
//                                            }
//                                            console.log(`s:${e},e:${s}`)
//                                        }
//                                    }

for (let l=0; l<10; l++){
    if(l%2==0)continue;
    console.log(l)
}

let p =0;
while(p<11){
    p++;
    if(p % 2==0)continue;
    console.log(p)
}


function Product(a,b){
    return a*b
}
console.log(Product(6,10))


function language(){
    let first='HTML',
        second='CSS',
        third='Javascript'
    return{
        first,
        second,
        third
    }    
}
let{first, second, third}= language();
console.log(first);
console.log(second);
console.log(third);


for (let x=0; x<5; x++){
    console.log("Hello World!");
}



let x;
for(x=2; x<=4; x++){
    console.log("Value of x: "+x);
}


let val=1;
while(val < 6){
    console.log(val);
    val+=1;
}

let testes =1;
do{
    console.log(testes);
    testes++
}while(testes <= 5)



let myObj={x:1, y:2, z:3};
for(let key in myObj){
    console.log(key, myObj[key])
}    


let arr=[1,2,3,4,5];
for(let value of arr){
    console.log(value)
}

let sum =0, a=1;
outerloop: while(true){
    a=1;
    innerloop:while(a<3){
        sum +=a;
        if(sum >12){
            break outerloop;
        }
        console.log("sum = "+sum);
        a++
    }



}

for(let i=1; i<6; i++){
    if(i==4)
        break;
    console.log(i)
}

//                for (let rx=0; rx<11; rx++){
//                    if(rx % == 0)
//                        continue;
//                    console.log("rx: "+rx);
//                }

//                    for(let i=5; i!=0;i-=2){
//                        console.log(i)
//                    }
//                    let x1= 5;
//                    while(x1==5){
//                        console.log("In the loop")
//                    }
//
//                    for(let x=2; x<=4; x++){
//                        console.log("Value of x: "+x);
//                    }

let a1rr=[10,20,30,40];
for(let i=0; i<a1rr.length; i++){
    console.log(a1rr[i])
}
let x9=2;
for(;;x9++){
    console.log("Value of x9: "+x9)
    break;
}
const subject=['Maths','Science','Polity','History'];
let i2=0;
let len = subject.length;
let gfg='';
for(; i2<len;){
    gfg+=subject[i2];
    i2++
}
console.log(gfg)

let count=1;
while(count <=5){
    console.log(count)
    count++;
}

let arrr=[10,20,30,40];
let ie=0;
while(ie<arrr.length){
    console.log(arrr[ie])
    ie++
}

let counti =1;
do{
    console.log(counti);
    counti++;
}while(counti <=5)

const car={
    make:"Toyota",
    model:"Corolla",
    year:2020
};
for(let key in car){
    console.log(`${key}: ${car[key]}`)
}    
const ay=[1,23,3,4,5];
for(const iy in ay){
    console.log(ay[iy])
}

const arrayy=[1,2,3,4,50];
for(const item of arrayy){
    console.log(item)
}
const str="Hello";
for(const char of str){
    console.log(char)
}

const map=new Map([
    ["name","Akash"],
    ["age",25],
    ["city","noida"]
])
for(let [key,value] of map){
    console.log(`${key} : ${value}`)
}

let set = new Set([1,2,3,4,5]);
for(let value of set){
    console.log(value)
}

let tre=1;
do{
    console.log(tre);
    tre++;

}while(tre<=5)


    let tert=1;
    do{
        console.log(tert);
    }while(tert<1)
        while(tert<1){
            console.log(tert)
        
        }
 let Animals=["Tiger","Giraffe","Horse","Deer"]
 Animals.push("Zebra")
 console.log(Animals)
 let Animales=["Tiger","Giraffe","Horse","Deer"];
 Animales.pop();
 console.log(Animales)
 let Animels=["Tiger","Giraffe","Horse","Deer"];
 Animels.shift();
 console.log(Animels)
 Animels.unshift("Lion")
 console.log(Animels);
 let Organization = Object.create({
    init:function(name){
        this.name=name;
    },
    do: function (callback){
        callback.apply(this);
    }
 });
 let geeksforgeeks=new Organization('geeksforgeeks');
 geeksforgeeks.do(function(){
    console.log(this.name)
 })