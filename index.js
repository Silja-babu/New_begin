//const jsonName=`["Babu","Lissy","Libin","Silbi","Rino","Silja","Bilcy","Anson"]`;
//const jsonPeople=   `[{"name":"Babu", "age":55, "isEmployed":true },
 //                      {"name":"Lissy","age":52,"isEmployed":true },
   //                    { "name":"Libin", "age":33, "isEmployed":true},
     //                  {"name":"Silbi", "age":30, "isEmployed":true},
       //                {"name":"Rino","age":27,"isEmployed":true },
         //              { "name":"Silja","age":23,"isEmployed":true},
           //            {"name":"Bilcy","age":21,"isEmployed":false},
             //          { "name":"Anson","age":7,"isEmployed":false}]`;

                       


//const parseData= JSON.parse(jsonPeople)
//console.log(parseData)



//fetch("people.json")
//.then(response=>response.json())
//.then(value=>console.log(value))


const arr= [{
    "name":"Babu",
    "age":55,
    "isEmployed":true
},
{
    "name":"Lissy",
    "age":52,
    "isEmployed":true
},{
    "name":"Libin",
    "age":33,
    "isEmployed":true
},
{
    "name":"Silbi",
    "age":30,
    "isEmployed":true
},{
    "name":"Rino",
    "age":27,
    "isEmployed":true
},{
    "name":"Silja",
    "age":23,
    "isEmployed":true
},{
    "name":"Bilcy",
    "age":21,
    "isEmployed":false
},{
    "name":"Anson",
    "age":7,
    "isEmployed":false
}
]
   //             let sum=0;
   //             arr.forEach((item)=>{
   //                 sum+=item.age
   //             }) 
   //             console.log(sum)

 let found= arr.map((item)=>{
    
    return {
        ...item,
        place:"pathar",
        country:"India"
    }
        

        

    
 })  
 console.log(found)

 let arr2=[
    ...arr,
    
    
]
let found2=arr2.map((item)=>{
    return {
        ...item,
        country:"America",
        place:"LOndon",
        love:true
        
    }
})
 console.log(arr)

 console.log(found2)

let array=[1,2,33,44,55,66,100,-200]
let a=Math.max(...array)
let b=Math.min(...array)
console.log(a)
console.log(b)





function myarray(){
    let [{name,...others},{name:name2,...a},{name:name3,...s},{name:name4},{name:name5},{name:name6},{name:name7},{name:name8},
    ]=found2
    console.log({name,...others},{name2,...a},{name3,...s},{name4},{name5},{name6},{name7},{name8})
}
myarray()

let value=arr.reduce((total,item) => {
    total.push(item.name)
    return total;

},[])
console.log(value)
                       
        

 //                                   const myobj={
//                                        a:1,
//                                        b:2,
//                                        c:function(){
//                                            console.log("hello")
//                                        }
//                                        
//                                   }
//    console.log(myobj)


                 
     //class is a document to specify the object without a class

                 
let student1={
    name:'Silja Babu',
    yob:2000,
    getAge: function(){
        return new Date().getFullYear()-this.yob;

    },
    getName:function(){
        return this.name;

    }
}
console.log(student1.getName(),student1.getAge())

let student2={
    name:"Rino Roy",
    yob:1998,
    getAge:function(){
        return new Date().getFullYear()-this.yob;
    },
    getName:function(){
        return this.name
    }
}
console.log(student2.getName(),student2.getAge())

let currentmilliseconds=Date.now();
console.log(currentmilliseconds)

let currenttime=new Date().getTime();
console.log(currenttime)


function addNames(a,b){
    return a+b;
}
console.log(addNames("Silja ","Babu"))

const values=Object.values(arr);
console.log(values)


let fruit=["Apple","Banana"];
switch(fruit){
    case "Apple":
        console.log("It's an apple")
        break;
    case "Banana":
        console.log("It's a banana")
        break;
    default:
        console.log("It's some fruits")
        break;        
}


let myElement=document.getElementById("myVersion");
console.log(myElement.innerText)