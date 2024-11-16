console.log('started');
const pr =myFetch('https://jsonplaceholder.typicode.com/todos/1')

function buttonClick(){
    console.log('clicked')
    pr.then((data) => {
        console.log(data)
    });
}
console.log('ended')