//                                        const cache ={
//                                            name:'Code malayalam',
//                                        }
function getJson(url){
//                                    if(cache){
//                                        return converToPromise(cache);
//                                    }
//                                        if(cache){
//                                            return Promise.reject(cache)
//                                        }
    return fetch(url)
            .then((data)=>{
                return data.json();
            })
}
//                                    function converToPromise(data){
//                                        return new Promise((res,rej) =>{
//                                            res(data);
//                                        })
//                                    }