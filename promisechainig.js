//                            console.log('Requesting 1');
//                            const pr = myFetch("https://jsonplaceholder.typicode.com/todos/1'");
//                            pr.then((data) => {
//                                console.log(data);
//                                console.log('Requesting 2')
//                                const pr =myfetch("https://jsonplaceholder.typicode.com/todos/2'")
//                                pr.then((data) =>{
//                                    console.log(data)
//                                    console.log('Requesting 3')
//                                    const pr=myFetch("https://jsonplaceholder.typicode.com/todos/3'")
//                                    pr.then((data) => {
//                                        console.log(data)
//                                    })
//                                });
//                            });

//                                console.log('Requesting 1');
//                                myFetch('https://jsonplaceholder.typicode.com/todos/1')
//                                            .then((data) => {
//                                                console.log(data);
//                                                console.log('Requesting 2')
//                                                return myFetch('https://jsonplaceholder.typicode.com/todos/2');
//                                            })
//                                            .then((data) =>{
//                                                console.log(data)
//                                                console.log('Requesting 3')
//                                                return myFetch('https://jsonplaceholder.typicode.com/todos/3');
//                                            })
//                                            .then((data) =>{
//                                                console.log(data)
//                                                console.log('Requesting 4')
//                                                return myFetch('https://jsonplaceholder.typicode.com/todos/4');
///                                            })
//                                            .then((data) =>{
//                                                console.log(data)
//                                            })



 //                                           console.log('Requesting 1');
 //                                           getJson('https://jsonplaceholder.typicode.com/todos/1')
 //                                                       .then((data)=>{
 //                                                           console.log(data)
 //                                                       
 //                                                       })
 //                                                       

//                        fetch('/article/promise-chaining/user.json')
//                          // Load it as json
//                          .then(response => response.json())
//                          // Make a request to GitHub
//                          .then(user => fetch(`https://api.github.com/users/${user.name}`))
//                          // Load the response as json
//                          .then(response => response.json())
//                          // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
//                          .then(githubUser => {
//                            let img = document.createElement('img');
//                            img.src = githubUser.avatar_url;
//                            img.className = "promise-avatar-example";
//                            document.body.append(img);
//
//                            setTimeout(() => img.remove(), 3000); // (*)
//                          });

                        /*This is promise chaining */
console.log("Requesting 1");
fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then((data)=>{
                 return(data.json())
                  
                })
                .then((data)=>{
                  console.log(data)
                  console.log("Requesting 2")
                  return fetch('https://jsonplaceholder.typicode.com/todos/2')
                })
                .then((data)=>{
                  return(data.json())
                   
                 })

                .then((data)=>{
                  console.log(data)
                  console.log("Requesting 3")
                  return fetch('https://jsonplaceholder.typicode.com/todos/3')
                })
                .then((data)=>{
                  return(data.json())
                   
                 })
                .then((data)=>{
                  console.log(data)
                })