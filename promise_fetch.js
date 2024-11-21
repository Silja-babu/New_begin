//                        function myFetch(url){
//                            return new Promise((res, rej) =>{
//                                $.ajax({
//                                    type: "GET",
//                                    url: url,
//                                    success:function(msg){
//                                        res(msg);
//                                    },
//                                    error:function(xhr, statusText){
//                                        rej(statusText)
//                                    },
//                                });
//                            });
//                        }


//                            function getJson(url){
//                                return fetch(url)
//                                    .then((data)=>{
//                                        return data.json();
//                                    })
//                            }



function getJson(url){
    return fetch(url)
        .then((data)=>{
            return data.json();
        })
}