//            var button =document.getElementById('mybutton');
//            button.onclick =() =>{
//                console.log("get started")
//                var arr =[];
//            $.ajax({
//                url:"https://jsonplaceholder.typicode.com/todos/1'",
//                success:(data) =>{
//                    console.log("Ajax1 started")
//                    arr.push(data.title);
//                    console.log("ajax1 ended")
//                },
//                async:false
//            })
 //
 //           $.ajax({
 //               url:"https://jsonplaceholder.typicode.com/todos/1'",
 //               success:(data) =>{
 //                   console.log("Ajax2 started")
 //                   arr.push(data.title);
 //                   console.log("ajax2 ended")
 //               },
 //               async:false
 //           })
  //          document.getElementById('mytext').value=arr.join('\n')
   //             console.log("event ended")
    //        }                                                 
                // pRomises

console.log('started')
//            $.ajax({
//                type:'GET',
//                url:'https://jsonplaceholder.typicode.com/todos/1',
//                success:(msg) =>{
//                    console.log(msg);
//                },
//                error:(xhr,statusText) =>{
//                    console.log(statusText)
//                }
 //           })               
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((data) =>{
//  console.log(data)
//   })
//  console.log('ended')


async function fetchUsers() {
 const resp = await fetch('https://jsonplaceholder.typicode.com/users')
 const data = await resp.json()
 console.log(data)
}

fetchUsers()
 

bench(diffSubstract);
bench(diffGetTime);
for(let i=0; i<10; i++){
    time1+=bench(diffSubstract);
    time2+=bench(diffGetTime)
}