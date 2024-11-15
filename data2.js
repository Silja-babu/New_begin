function random(min,max){
    return min+Math.random()*(max-min);
}    
console.log(random(1,5))

let str = 'Hooo';

str = str[0]+'l'+str.slice(1) // replace the string

console.log( str ); // Hloo


let sti='Widget with id';
console.log(sti.indexOf('Widget'))
console.log(sti.indexOf('widget'))
console.log(str.indexOf("id"))
if(sti.indexOf("with")!=-1){
    console.log("We found it")
}


let stn="Hello world"
let result=stn.indexOf("world");
console.log(result)

console.log("Widget".includes("gt"))


let stp="Coffee THripthi"
console.log(stp.slice(0))
console.log(stp.slice(2,4))
console.log(stp.slice(5,6))
console.log(stp.substr(2,4))
console.log(stp.substr(-4,2))
console.log(stp.substring(1,6))
console.log(stp.substring(6,1))

  

let dtp="As sly as a fox, as strong as an ox"
let target="as";
let pos=-1;
while((pos=dtp.indexOf(target,pos+1))!=-1){
    console.log(pos)
}


let std="As sly as a fox, as strong as an ox"
let targe="as"
let pose=0
while(true){
    let foundpos= std.indexOf(targe,pose)
    if(foundpos==-1)break
    console.log(`Found at ${foundpos}`)
    pose=foundpos+1
}


let stdlist=["Ammu","Anu","Abilash","Anu","seban","Appu","Anu vilson"]
let tag="Anu"
let posi=-1
while((posi=stdlist.indexOf(tag,posi+1))!=-1){
    console.log(`Found given name as position ${posi}`)
}


let codepoiint='';
for(let i=65;i<=220;i++){
    codepoiint+= String.fromCodePoint(i)
}
console.log(codepoiint)

               //Arrays

let fruit=["Apple","Orange","Plum"]
console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])               

fruit[2]='Pear';
fruit[3]='Lemon';
console.log(fruit[3])
console.log(fruit[2])
console.log(fruit.length)

let array=['Apple',{name:'John'},true,function(){console.log('hello');}]
console.log(array[1].name)
array[3]()

let frits=[
    "Apple",
    "Orange",
    "Plum"
]
console.log(frits[1])

console.log(frits.pop())
console.log(frits)

frits.push("Pear")
console.log(frits)
console.log(frits.shift())
console.log(frits)
console.log(frits.unshift('Plum'))
console.log(frits)


let fruits=["Banana"]
let arr=fruits;
console.log(arr===fruits)
arr.push("Pear")
console.log(fruits)


let arrs=["Apple","Orange","Pear"];
for(let i=0;i<arrs.length;i++){
    console.log(arrs[i])
}

let arrfruits=["Apple","Orange","Plum"]
for(let fruiti of arrfruits){
    console.log(fruiti)
}


let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
    
]
console.log(matrix[0][1])
console.log(matrix[0][0])
console.log(matrix[2][2])

let styles=["Jazz","Blues"];
console.log(styles)
styles.push("Rock-n-roll")
console.log(styles)
styles[Math.floor((styles.length-1)/2)]="Classics"
console.log(styles)
console.log(styles.shift())
styles.unshift("Rap","Reggae")
console.log(styles)

