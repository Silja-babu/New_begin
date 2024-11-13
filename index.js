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





function showPrimes(n){
    nextPrime:
    for(let i=2;i<n;i++){
        for(let j=2;j<i;j++){
            if(i%j==0)continue nextPrime
        }
        console.log(i)
    }
   }
function showPrimes(n){
    for(let i=2;i<n; i++){
        if(n%i==0) return false
    }
    return true;
}
for(let i=0;i<10;i++){
    let drop=getWhiskey();
    smell(drop);
    add(drop,glass);
}
for(let t=0;t<3;t++){
    let tomato=getTomato();
    examine(tomato);
    let juice=press(tomato);
    add(juice,glass);
}
addWhiskey(glass);
addJuice(glass);
function addWhiskey(container){
    for(let i=0;i<10;i++){
        let drop=getWhiskey();
    }
}
function addJuice(container){
    for(let t=0;t<3;t++){
        let tomato=getTomato();
    }
}
let user=authenticateUser();
function render(){
    let user=anotherValue();
    
}

describe("pow",function(){
    it("raises to n-th power",function(){
        assert.equal(pow(2,3),8);
    })
    it("3 raised to power 4 is 81",function(){
        assert.equal(pow(3,4),81);
    })
})
function pow(x,n){
    let result=1;
    for(let i=0;i<n;i++){
        result*=x;
    }
    return result;
}

describe("pow",function(){
    function makeTest(x){
        let expected=x*x*x;
        it(`${x} in the power 3 is ${expected}`,function(){
            assert.equal(pow(x,3),expected);
        })
    }
    for(let x=1;x<=5;x++){
        makeTest(x)
    }
})

describe("pow",function(){
    describe("raises x to power 3",function(){
        let expected =x*x*x;
        it(`${x} in the power 3 is ${expected}`,function(){
            assert.equal(pow(x,3),expected);

        })
    })
    for (let x=1;x<=5;x++){
        makeTest(x)
    }
})


describe("test",function(){
    before(()=>console.log("Testing started-before all tests"))
    after(()=>console.log("Testing finished-after all tests"))
    beforeEach(()=>console.log("Before a test-enter a test"))
    afterEach(()=>console.log("after a test-exit a test"))
    it('test 1',()=>console.log(1))
    it('test 2',()=>console.log(2))
})
function pow(x,n){
    if(n<0) return NaN;
    if(Math.round(n)!=n) return NaN;
    let result=1;
    for(let i=0;i<n;i++){
        result*=x;
    }
    return results;

}


it("Raises x to the power n",function(){
    let x=5;
    let result=x;
    assert.equal(pow(x,1),result);
    result*=x;
    assert.equal(pow(x,2),result);
    result*=x;
    assert.equal(pow(x,3),result)
})

if(!Math.trunc){
    Math.trunc=function(number){
        return number<0?Math.ceil(number):Math.floor(number)
    };
};
