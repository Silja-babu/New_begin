//"call back function"

/*

            setTimeout(function (){
                console.log('timer')
            },5000)
            function x(y){
                console.log('x')
                y()
            }
            x(function y(){
                console.log("y")
            })
*/


function closure(){
    let count =0;
    document.getElementById('clickMe')
    .addEventListener('click', function(){
    console.log ("Button-clicked", ++count)
})
}
closure()

//remove eventlisener as we doesnot need that make an memory full

//browser is the most invention


