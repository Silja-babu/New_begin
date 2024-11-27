const val1 = 5;
const val2 = 5;

result=val1===val2;
console.log(result)

const val3 = "COde malayalam"
const val4 = "COde malayalam"
console.log(val3===val4)

const val5 = ["COde" ,"malayalam"]
const val6 = ["COde" ,"malayalam"]


console.log(val5===val6)


const val7 = {name:"COde malayalam"}
const val8 = {name:"COde malayalam"}

console.log(val7===val8)


    //mutable and immutable



 var a ={
    name:'Code malayalam'
 };
 
 var b = a;
    b.name ='Code malayalam 2.0'
   

    console.log('a=',a)
    console.log('b=',b)




    var c=10
    var d = c;

    d= d+9;

    console.log('c=',c)
    console.log('d=',d)


    function juck(obj){
        obj.test = "Test";
        return obj;
    }

    const myObj = {
        name:'code malayalm'
    }

    var ret = juck(myObj)

    console.log(ret === myObj)

