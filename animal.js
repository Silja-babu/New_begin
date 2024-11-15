

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} hides!`)
    }
    stop(){
        setTimeout(()=>super.stop(),1000)
    }
}

let rabbitss= new Rabbit("White Rabbit");
rabbitss.run(5)
rabbitss.stop()
rabbitss.hide();
animal.stop();



class Human{
    constructor(name){
        this.bp=0;
        this.name=name;
    }
    flow(bp){
        this.bp=bp;
        console.log(`${this.name} blood flow with speed ${this.bp}`)
    }
    block(ht){
        this.bp=0;
        console.log(`${this.name} stand stills.`)

    }
}
let humanbeings= new Human("my gene")
class MOnkey extends Human{
    similar(){
        console.log(`${this.name} lots of similarities!`);
    }
}
let monkey=new MOnkey ("Gorila")
monkey.flow("345/ms")
monkey.similar();
humanbeings.block();


function f(pharse){
    return class{
        sayhi(){
            console.log(pharse);
        }
    }
}
class User extends f("Hello"){}
new User().sayhi()



class Animals {
    constructor(name){
        this.speed=0;
        this.name=name;
    }
}
class Rabbits extends Animals{
    constructor(name,earLenght){
        super(name);
        this.earLenght=earLenght;
    }
}
let rabbit =new Rabbits ("White Rabbit",10);
console.log(rabbit.name)
console.log(rabbit.earLenght)

class Humans{
    name='Silja';
    constructor(){
        console.log(this.name);
    }
}
class Gorilas extends Humans{
    name="Gorila"
}
new Humans();
new Gorilas();


class Vonnue{
    showName(){
        console.log("Software techonology")
    }
    constructor(){
        this.showName();
    }
}
class UGCNET extends Vonnue{
    showName(){
        console.log("Assistent proffessor")
    }
}
new Vonnue();
new UGCNET();


let lion={
    name:"Animal",
    eat(){
        console.log(`${this.name} eats.`)
    }
}
let tiger={
    __proto__:lion,
    name:"Tiger",
    eat(){
        this.__proto__.eat.call(this);
    }
}
tiger.eat()



let pet={
    name:"Dog",
    eat(){
        console.log(`${this.name} eats.`)
    }
}
let cat={
    __proto__:pet,
    name:"Cat",
    eat(){
        super.eat()
    }
}
let henChicken={
    __proto__:cat,
    name:"Hen",
    eat(){
        super.eat()
    }
}
henChicken.eat()


let me={
    sayit(){
        console.log(`I'am an me`)
    }
}
let miss={
    __proto__:me,
    sayit(){
        super.sayit()
    }
}
let plant={
    sayit(){
        console.log("I'am a plantman")
    }
}
let tree={
    __proto__:plant,
    sayit:miss.sayit
}
tree.sayit();



class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision = 1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
};

class Useree{
    static staticMethod(){
        console.log(this===Useree)
    }
}
Useree.staticMethod();


class classuser{}
    classuser.staticMethod=function(){
        console.log(this===classuser)
    }
    classuser.staticMethod();

class Article{
    constructor(title,date){
        this.title=title;
        this.title=date;
    }
    static compare(articleA, articleB){
        return articleA.date-articleB.date;
    }
    
}   
let article=[
    new Article("HTML",new Date(2019,1,1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];
article.sort(Article.compare);
console.log(article[1].title)

 class Man{
    static staticWay(){
        console.log(this===Man);
        
    }
 }
 Man.staticWay()

 class Manuser{}
 Manuser.staticWay=function(){
    console.log(this===Manuser)
 }
 Manuser.staticWay()



 class Birth{
    constructor(Name, DOB){
        this.Name=Name;
        this.DOB= DOB;
    }
    static compare(BirthA,BirthB){
        return BirthA.DOB - BirthB.DOB;
    }
 }
  let birth=[
    new Birth("Silbi" ,new Date(1994,3,18)),
    new Birth("Silja", new Date(2000,11,6)),
    new Birth("BIlcy",new Date(2003,11,14))
  ];
  birth.sort(Birth.compare)
  console.log(birth[0].Name)



  class Country{
    constructor(president,manudate){
        this.president=president;
        this.manudate=manudate;
    }
    static festivals(){
        return new this("OBAMA",new Date(1995))
    }
  }
  let country=Country.festivals();
  console.log(country.president)


  class jeevi{
    static planet="earth";
    constructor(name,speed){
        this.name=name;
        this.speed=speed
    }
    run(speed=0){
        this.speed+=speed;
        console.log(`${this.name} runs with speed ${this.speed}`);

    }
    static compare(jeeviA,jeeviB){
        return jeeviA.speed - jeeviB.speed;
    }
  }

  class Rat extends jeevi{
    hide(){
        console.log(`${this.name} hide when saw the cat and snake!`)
    }
  }
  let rat=[
    new Rat("White Rat",50),
    new Rat("Brown Rat",10),
   
    new Rat("Black Rat",1)
   
  ]
  rat.sort(Rat.compare);
  rat[0].run();
  console.log(Rat.planet)


class Sathru{}
class Friend extends Sathru{}
console.log(Friend.__proto__===Sathru);
console.log(Friend.prototype.__proto__===Sathru.prototype)

//Prototype inhertance in javascript
//js doesnot use classical inheritance instead it uses the phenomenon called prototype inheritance..




let smallanimal={
    eats:true,
}
let smallrabbit={
    jumps:true,
}
smallrabbit.__proto__=smallanimal;
console.log(smallrabbit.eats)
console.log(smallrabbit.jumps);



let babu={
    married:true,
}
let lissy={
    children:true,
}
lissy.__proto__=babu;
console.log(lissy.married)
console.log(lissy.children)



let Babu={
    married:true,
}
let Lissy={
    children:true,
}
Object.setPrototypeOf(Lissy,Babu);
console.log(Lissy.married);
console.log(Lissy.children);


class bffolo extends Object{
    constructor(name){
        super();
        this.name=name;
        

    }
}
let bffolos=new bffolo("rab")
console.log(bffolos.hasOwnProperty('name'))
console.log(bffolo.prototype.__proto__===Object.prototype);
console.log(bffolo.__proto__===Object)

       //private and protected proerties and methods

 
let userm={
    name:"John",
    age:30,

    toString(){
        return`{name:"${this.name}",age:${this.age}}`;
    }
}       
console.log(userm)


let student={
    name:"JOhn",
    age:30,
    isAdmin:false,
    courses:['html','css','js'],
    spouse:null
}
let json=JSON.stringify(student)
console.log(typeof json);
console.log(json);
console.log(JSON.stringify(1));
console.log(JSON.stringify('test'));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1,2,3]));
let useme={
    sayitby(){
        console.log("Hello")
    },
    [Symbol("id")]:123,
    something:undefined
}
console.log(JSON.stringify(useme))
let meetup={
    title:"Conference",
    room:{
        number:23,
        participants:["john","ann"]
    }
}
console.log(JSON.stringify(meetup.title))
let room={
    number:23
};
let meetupset={
    title:"Conference",
    participants:[{name:"John"},{name:"Alice"}],
    place:room
}
room.occupiedBy=meetupset;
console.log(JSON.stringify(meetupset,['title','participants','place','name','number']))


let rooms={
    number:23
};
let meet={
    title:rooms,
    participants:[{name:"Isek"}]
}
rooms.occupiedBy=meet;
console.log(JSON.stringify(meet,['title','participants']))

let setroom={
    num:23
};
let meetupseet = {
    title:"Conference",
    participants:[{name:"John"},{name:"Alice"}],
    place:setroom
}
room.occupiedBy=meetupseet
console.log(JSON.stringify(meetup,function replacer(key, value){
    console.log(`${key}:${value}`)
    return(key=='occupiedBy')? undefined:value;
}))

let uswer={
    name:"John",
    age:25,
    roles:{
        isAdmin:false,
        isEditor:true
    }

}
console.log(JSON.stringify(uswer,null,2))

let roomse={
    number:23
};
let meetserious={
    title:"Conference",
    date: new Date(Date.UTC(2017,0,1)),
    roomse
}
console.log(JSON.stringify(meetserious))


let number={
    number:23,
    toJSON(){
        return this.number;
    }
}
let meetserious234={
    title:"Conference",
    number

}
console.log(JSON.stringify(number))
console.log(JSON.stringify(meetserious234))


let setnum="[0,1,2,3]";
setnum=JSON.parse(setnum)
console.log(setnum[3]);

let userdata='{"name":"John","age":35,"isAdmin":false,"friends":[0,1,2,3,4,5]}';
let userrr=JSON.parse(userdata);
console.log(userrr.name)

let str=`{"title":"Conference","date":"2017-11-30T12:00:00.000z"}`;
let metup=JSON.parse(str,function(key,value){
    if(key=='date')return new Date(value);
    return value;
});
console.log(metup.date.getDate());

let user={
    name:"John Smith",
    age:35

};
let user2=JSON.parse(JSON.stringify(user))


let person={name:'Peter'};
let administrator=person;
administrator.name='meter'
console.log(person.name);


let john={
    name:'john',
    age:30,
};
let clone={};
for(let key in john){
    clone[key]=john[key]

}
clone.name='pete'
console.log(john.name)
console.log(clone)
          //object assign
 let usered={name:"John"};
 let permission1={canView:true};
 let permission2={canEdit:true};
 Object.assign(usered,permission1,permission2)
 console.log(usered.name)
 console.log(usered.canEdit)
 console.log(usered.canView);  
 
 

 let namechane={name:"Silja"};
 Object.assign(namechane,{name:"Silja Babu"});
 console.log(namechane.name);


 let nextuser={
    name:"John",
    sizes:{
        height:182,
        width:50
    }
 }
 nextuser.sizes.width=60;
 console.log(nextuser.sizes.width)




 let classical={
    name:"kuchupidi",
    stages:{
        stage1:"left aud",
        stage2:"right aud"
    }
 }
 let compare=Object.assign({},classical);
 console.log(classical.stages===compare.stages)
 classical.stages.stage1="west aud"
 console.log(compare.stages.stage1)


//                let nanodinirtham={
 //                   name:"anashora",
 //                   other:{
 //                       mrng:"kuchupidi",
 //                       evng:"monoact"
 //                   }
 //               }
 //               let opponants=structuredClone(nanodinirtham)
 //               console.log(nanodinirtham.other===opponants.other)
 //               nanodinirtham.other.evng="canceled";
 //               console.log(opponants.other.evng)
 //               console.log(nanodinirtham.other)



//                    let suser={}
//                    suser.me=suser
//                    let sclone=structuredClone(suser)
//                    console.log(sclone.me===sclone)

                    
                       //Garbage collection
//cc/c/c/c/c/c/c/c/c/c/c/c/c/c/c//c/c/c/c/cc/c/c/


                       //   OPTIONAL CHAINING
  
                       
//javascript is invented by Brendan Eich