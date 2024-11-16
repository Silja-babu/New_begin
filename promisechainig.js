console.log('Requesting 1');
const pr = myFetch("https://jsonplaceholder.typicode.com/todos/1'");
pr.then((data) => {
    console.log(data);
})

