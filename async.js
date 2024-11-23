//                                async function getValue(){
//                                    return 22;
//                                }
//                                const result= getValue();
//                                result.then((data)=>{
//                                    console.log(data)
//                                })
//asyn gives an promise function we can take to convert it by .then 


//                                async function getValue(){
//                                    return fetch("https://jsonplaceholder.typicode.com/todos/1")
//                                }

//                                const result= getValue();
//                                result.then((data)=>{
//                                    console.log(data)
//                                })


console.log('Started')
getValue();
console.log('Ended')


async function getValue(){
    const data=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonData = await data.json();
    console.log(jsonData);
    return jsonData;
}

