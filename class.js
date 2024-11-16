  //              function printMinyob(...args){
  //                  var arr= args.map ((item => item.yob));
  //                  console.log(Math.min(...arr))
  //              }
class Student{
    name;
    yob;
    constructor(name,yob){
        this.name=name;
        this.yob=yob;
    }
    static printMinyob=function(...args){
        var arr=args.map((item => item.yob))
        console.log(Math.min(...args))
    }
    getage(){
        return new Date().getFullYear()-this.yob;
    }
    getName(){
        return this.name
    }

}

var student1=new Student('Silbi',1994)
var student2=new Student('Silja',2000)
var student3=new Student('Bilcy',2003);


Student.printMinyob(student1, student2, student3);

 //           console.log(student1, student1.getName(),student1.getage())
 //           console.log(student2, student2.getName(),student2.getage())
 //           console.log(student3, student3.getName(),student3.getage())


//

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //static Function
//printMinyob(student1.student2,student3)




let splicearray=["i","u can","can","buddy"]
//delete splicearray[1]
splicearray.splice(1,1)
console.log(splicearray)


let alphabets=['A','B','B1','C','E','F','G']
alphabets.splice(2,1)
console.log(alphabets)
alphabets.splice(3,0,"D")
console.log(alphabets) 

let numbb=[1,2,6]
numbb.splice(-1,0,3,4,5)
console.log(numbb)


let arrya=[1,2];
let arraylike={
    0:"something",
    [Symbol.isConcatSpreadable]:true,
    length:1
}
console.log(arrya.concat(arraylike))





let dislike=[1,2,3,4]
let likedis={
    0:"Something",
    1:"Better",
    2:"You can add",
    [Symbol.isConcatSpreadable]:true,
    length:3
}
console.log(dislike.concat(likedis))


  //          ["Bilbo","Gandol","Nangi"].forEach((item,index,array)=>{
//            console.log(`${item} is at index${index} in ${array}`)
  //          })

arrya.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });



  /////

  let users=[
    {
        id:1, name:"JOhn"
    },
    {
        id:2,name:"Pete"  
    },{
        id:3, name:"Mary"
    }
  ]
   let user=users.find(item => item.id==1);
   console.log(user.name)


   class User{
    id;
    name;
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
   }
   var user1=new User(1,"John")
   var user2=new User(2,"pete")
   var user3=new User(3,"Mary")
       


 let usedit=[
    {id:1,name:"John"},
    {id:2,name:"Pete"},
    {id:3, name:"Mary"},
    {id:4, name:"John"}
 ] ;
 console.log(usedit.findIndex(usedit=> usedit.name=='John'))
 


 let army={
    minAge:18,
    maxAge:27,
    canJoin(uit){
        return uit.age >= this.minAge && uit.age < this.maxAge;
    }
 }
 let uits=[
    {age:16},
    {age:20},
    {age:23},
    {age:30}
 ];
 let soldiers = uits.filter(army.canJoin,army);
 console.log(soldiers.length);
 console.log(soldiers[0].age);
 console.log(soldiers[1].age);


 let range={
    from:1,
    to:5
 };
 range[Symbol.iterator]=function(){
    return{
        current:this.from,
        last:this.to,

        next(){
            if(this.current <= this.last){
                return {done:false, value:this.current++}
            }else{
                return{done:true}
            }
        }
    }
 }
 for(let num of range){
    console.log(num)
 }

 let arrayLike={
    0:"Hello",
    1:"World",
    length:2
 };
 let arrs= Array.from(arrayLike);
 console.log(arrs.pop())


 let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2


  //                  let strr = '𝒳😂';

    //                let charss = []; // Array.from internally does the same loop
      //              for (let char of str) {
        //            charss.push(char);
          //          }

            //        alert(charss);

function slice(strs,start,end){
    return Array.from(strs).slice(start,end).join('');
}            
let strs='𝒳😂𩷶'
console.log(slice(strs,1,3));
console.log(strs.slice(1,3))



//  Map is a collection of keyed data items, just like an object. BUt the main difference is that map allow keys of any type


let map= new Map();
map.set('1',"str1");
map.set(1,"num1");
map.set(true, "bool1")
console.log(map.get(1))
console.log(map.get('1'))
console.log(map.size)



let recipemap= new Map([
    ['cucumber',500],
    ['tomatoes',350],
    ['onion',50]

])
for(let vegetable of recipemap.keys()){
    console.log(vegetable)
}
for (let amount of recipemap.values()){
    console.log(amount)
}
for(let entry of recipemap){
    console.log(entry)
}

recipemap.forEach((value,key,map) => {
    console.log(`${key} :${value}`)
})



let maps=new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true,'bool1']
])
console.log(map.get('1'))


let obj={
    name:"John",
    age:30
}
let mapi=new Map(Object.entries(obj))
console.log(mapi.get('name'))

let prices=Object.fromEntries([
    ['banana',1],
    ['orange',2],
    ['meat',4]
])
console.log(prices.orange)


let idNumber=Object.fromEntries([
    ['Ente pathoomayude aadu',"1024e"],
    ['ente uppupayik oru aana ondayirunu',"12345de"],
    ['kathalan','12345t'],
    ['enu ninte mooyitheen','3456we'],
    ['kakka kulichal kokku akumo','345609wd5']

])
console.log(idNumber.kathalan)

  let mapes=new Map();
  mapes.set('barbie',10);
  mapes.set('Rock n roll',26);
  mapes.set('meet me to me',1);

  let obj2=Object.fromEntries(mapes.entries());
  console.log(obj2.barbie)

  let set =new Set();
  let john={name:"John"};
  let pete={name:"Pete"};
  let mary={name:"Mary"};
  set.add(john)
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);
  console.log(set.size)
  for(let usered of set){
    console.log(usered.name)
  }
  


let setvalue=new Set(['orangigano','pizza','smoothie']);
for (let value of setvalue) console.log(value)
    setvalue.forEach((value,valueAgaine,setvalue) => {
console.log(value)
})  


function unique(arr){
    return Array.from(new Set(arr))
}
let johns={name:"JOhn"};
let visitCountmap=new Map();
visitCountmap.set(john,123);
console.log(visitCountmap.get(john))


let recipe= new Map([
    ['Chicken',250],
    ['chilly',4],
    ['tomato',1],
    ['curd',2],
    ['gingergarlic paste',2],
    ['Rice',2],
    ['nuts',5],
    ['water',2]
])
for (let items of recipe.keys()){
    console.log(`The required items for the biriyani are ${items}`)
}
for(let amount of recipe.values()){
    console.log(`Required amount of items ${amount}`)
}
for (let total of recipe){
    console.log(`Total amount of required item ${total}`)
}


let recipe2= new Map([
    ['chicken','2kg'],
    ['chilly',4 ],
    ['tomato','1 big'],
    ['curd','2 cups'],
    ['gingergarlic paste','2 spoons'],
    ['Rice','2 person'],
    ['nuts','5 pinch'],
    ['water','2 cups']
])
console.log(recipe2.get('chicken'))
for (let vegetable of recipe2.keys()){
    console.log(`required things ${vegetable}`)
}
for (let total of recipe2.values()){
    console.log(`total wanted item for buying ${total} `)
}

let  obj3={
     name:"Johnsee",
     age:30   
}
let map1 = new Map(Object.entries(obj3))
console.log(map1.get('name'));


let permission = Object.fromEntries([
    ['banana',2],
    ['Orange',5],
    ['Meat',4]
])
console.log(permission.Orange)


let set1= new Set();
let johni={name:"JOhn"};
let Petee={name:"Pete"};
let maryy={name:"Mary"};

set .add(johni);
set.add(Petee);



let set3 =new Set(["oranges","apples","banana","pineapple"])
for(let value of set) console.log(value)
set3.forEach((value,valueAgain,set3) =>{
    console.log(value)
})
