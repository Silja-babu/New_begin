console.log("Requesting 1");
fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then((data)=>{
                    return (data.json())
                })
                .then((data)=>{
                    console.log(data);
                    console.log('Requesting 2')
                    return fetch("https://jsonplacehoolder.typicode.com/todos/2")
                })
                .then((data)=>{
                    return (data.json())
                })
               
                .then((data)=>{
                    console.log(data);
                    console.log("Requesting 3");
                    return fetch('https://jsonplaceholder.typicode.com/todos/3')
                })
                .then((data)=>{
                    return (data.json())
                })
                .then((data)=>{
                    console.log(data)
                })
                .catch((err)=>{
                    console.log('Error',console.error())
                    return {}
                });

                