//                getJson('https://jsonplaceholder.typicode.com/todos/1')
//                                .then((data)=>{
//                                    console.log(data)
//                                })
//                                .catch((data)=>{
//                                    console.log(data)
//                                })
//                                    Promise.all([
//                                        getJson('https://jsonplaceholder.typicode.com/todos/1'),
//                                        getJson('https://jsonplaceholder.typicode.com/todos/2'),
//                                        getJson('https://jsonplaceholder.typicode.com/todos/3')
//                                    ])
//                                    .then((data)=>{
//                                        console.log(data)
//                                    })



       Promise.race([
        getJson('https://jsonplaceholder.typicode.com/todos/1'),
        getJson('https://jsonplaceholder.typicode.com/todos/2'),
        getJson('https://jsonplaceholder.typicode.com/todos/3')
       ])
       .then((data)=>{
        console.log(data)
       })