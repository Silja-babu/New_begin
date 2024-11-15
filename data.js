let john={
    name:"John",
    sayHI:function(){
        console.log("HI buddy!")
    }
}
john.sayHI()

     //if i studied js verywell then i get the good opportunity
let str='hello mrs. silja'
console.log(str.toUpperCase())


let n=1.2345654656827489729847928789372987489739287489278948827884626863826487682647862876476287648200000929267836276
console.log(n.toFixed(20))
console.log(n.toFixed(5))
console.log(n.toFixed(2))


let zero=new Number(0);
if(zero){
    console.log("zero is truthy")
}
let billion=1000_000_000;
console.log(billion)
let e=1.23e9;
console.log(e)



console.log(1e-3)
console.log(1/1000)
console.log(1.23e-6)
console.log(1.23/1000000)
console.log(1234e-2)
console.log(1234/100)
console.log( 0xff )



let num=254;
console.log(num.toString(6))
console.log(num.toString(8))

console.log(num.toString(16))
console.log(num.toString(2))


let nums=1.23456;
console.log(Math.round(num*100)/100)


console.log(1e500)
console.log(0.1+0.2==0.3)
console.log(0.1+0.2)

console.log(0.1.toString(2))
console.log(0.2.toString(2))
console.log((0.1+0.2).toString(2))


console.log(isNaN(NaN))

console.log(parseInt('100px'))
console.log(parseFloat('12.5em'))
console.log(parseInt('12.3'))
console.log(parseFloat('12.3.4'))

console.log(Math.random()*10)


console.log(Math.max(3,5,-10,0,1))
console.log(Math.min(1,2,-1,-9))
  
console.log(Math.pow(10,2))

console.log(1.34.toFixed(1))


function readNumber(){
    let num4;
    do{
        num=0;

    }while(!isFinite(num));
    if(num===null || num==='')return null;
    return +num
}
console.log(`Read: ${readNumber()}`)


        let i=0;
        while(i<11){
            i+=0.2;
            if(i>9.8&&i<10.2)
                console.log(i)
        }
function random(min,max){
    return min+Math.random()*(max-min);
}    
console.log(random(1,5))


let guestlist=`Guest: 
* John 
* Pete
* Mary`;
console.log(guestlist)

let gues="Guest:\n * JOhn\'s\r * Pete\f*Mary"
console.log(gues)

console.log(`My name is silja\n`.length)

let str1=`HELLO`
console.log(str1[0])

console.log(str1[str1.length-1])


 let stp="HOOO"
stp='l'+stp[2]
console.log(stp)


