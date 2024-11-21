//                        class Button{
//                            constructor(name){
//                                this.button=document.createElement('button')
//                                this.button.innerHTML=name
//                                document.body.appendChild(this.button)
//                            }
//                            onclick(fn){
//                                this.button.onclick=fn
//                            }
//                        }
//                        var b1=new Button('Hello')
//                        console.log(b1)
//                        function MYBUtton(){
//
//                        }
//                        var b2=new MYBUtton()
//                        console.log(b2)


//                function myButton(name){
//                    this.button=document.createElement('button')
//                    this.button.innerHTML=name
//                    document.body.appendChild(this.button)
//                }
//                myButton.prototype.onclick=function(fn){
 //                   this.button.onclick=fn
 //               }
 //               function mygreenbutton(name){
 //                   myButton.call(this,name);
//
//                }
//                mygreenbutton.prototype= Object.create(myButton.prototype)
//                var b2=new mygreenbutton('HloooOO')
//                b2.onclick(function(){
//                    console.log("Clicked")
//                })
//                console.dir(mygreenbutton)
//                console.dir(b2)

function sayHibye(firstname,lastname){
    function getFullname(){
        return firstname+ ""+lastname;

    }
    getFullname()
    console.log("Hello, "+ getFullname())
    console.log("Bye, "+getFullname())
    

}
sayHibye()

function makecounter(){
    let count =0;
    return function(){
        return count++;
    }
}
let counter = makecounter();
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
function f(){
    let value =123;
    return function(){
        console.log(value)
    }
}
let g=f();
function f(){
    lee=Math.random();
    return function(){
        console.log(value)
    }
}
let arr=[f(),f(),f()]


function f(){
    let value =123;
    return function(){
        console.log(value);
    }
}
let g2 = f();
g2=null
console.log(g())
