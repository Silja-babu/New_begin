let code = 'console.log("Hello")';
eval(code);


let value = eval('1+1');
console.log(value)


let value1 = eval('let i =5; ++i');
console.log(value1)

let a=1;
function f(){
    let a =2;

    eval('console.log(a)')
}
f();
console.log(a)


let x = 5;
eval("x = 10");
console.log(x)


eval("let x =5; function f() {}")
console.log(typeof x)


{
    let x= 45;
    eval('console.log(x)');
}

let f2 = new Function('a' ,' console.log(a)')
f2(12);


function curry(f){
    return function(a){
        return function(b){
            return f(a,b)
        }
    }
}

function sum(a,b){
    return a+b;
}

let curriedSum = curry(sum);

console.log(curriedSum(10)(2));
