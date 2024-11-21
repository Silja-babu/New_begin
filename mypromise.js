//                let promise = new Promise((res,rej)=>{
//                    res('Hello JavaScript !')

//                });
                //            promise.then((result)=>{
                //                console.log(result)
                //            })

//                promise.then(function (result1){
//                    console.log(result1);
//                    return new Promise((res,rej) => {
//                        res("GFG is aweome");
//                    })
//                    .then((result2) =>{
//                        console.log(result2)
//                    })
//                })

//                let promise = new Promise(function(res,rej){
//                    setTimeout(()=>res(10),1000)
//                });
//                promise.then(function(result){
//                    console.log(result)
//                    return result*2;
//                });
//                promise.then(function(result){
//                    console.log(result);
//                    return result*2;
//                });
//                promise.then(function(result){
//                    console.log(result);
//                    return result*2
//                });


//                    new Promise(function(res,rej){
//                        setTimeout(()=>res(1),1000);
//                    }).then(function(result){
//                        console.log(result);
//                        return new Promise((res,rej) =>{
//                            setTimeout(() => res(result*2),1000)
//                        });
//                    }).then(function(result){
//                        console.log(result)
//                        return new Promise ((res,rej) =>{
//                            setTimeout(() => res(result*2),1000)
//                            
//                        })
//                    }).then(function(result){
//                        console.log(result)
//                    })


//                            loadScript("/article/promise-chaining/one.js")
//                            .then(function(script){
//                                return loadScript("/article/promise-chaining/two.js")
//                            })
//                            .then(function(script){
//                                return loadScript("/article/promise-chaining/three.js")
//                            })
//                            .then(function(script){
//                                one();
//                                two();
//                                three();
//                            })
                            

//                                    class Thenable{
//                                        constructor(num){
//                                            this.num = num;
//                                        }
//                                        then(res,rej){
//                                            console.log(res)
//                                            setTimeout(() => res(this.num*2),1000);
//                                        }
//                                    }
//                                    new Promise(res => res(1))
//                                        .then(result => {
//                                            return new Thenable(result);
//                                        })
//                                        .then(console.log())

//                                            fetch("/article/promise-chaining/user.json")
//                                            .then(function(response){
//
//                                                return response.text();
//                                            })
//                                            .then(function(text){
//                                                console.log(text)
//                                            })


function loadJson(url){
    return fetch(url)
    .then(response => response.json())
}
function loadGithubUser(name){
    return loadJson(`https://api.github.com/users/${name}`)
}
function showAvatar(githubUser){
    return new Promise(function(resolve,reject){
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-examle";
        document.body.append(img);
        setTimeout(() =>{
            img.remove();
            resolve(githubUser);
        },3000)
    })
}
loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => console.log(`Finished showing ${githubUser.name}`))

    