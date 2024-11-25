let number=[0,1,2];
number = new Proxy(number, {
    get(target, prop){
        if(prop in target){
            return target[prop];
        }else{
            return 0
        }
    }
})

console.log(number[1]);
console.log(number[123]);