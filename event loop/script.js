   /*             function a(){
                    console.log("a")
                }
                a();
                console.log("end")*/


//web apis=>  a not a part of js....


//1.settimeout()
//2.dom apis(document.----)
//3.fetch()
//4.localstorage
//5.console
//7.location


// window set up.....window.alert = alert;
/*


console.log("Start")
setTimeout(function a(){
    console.log("a")
},5000)//take some callback function ......
console.log('end')

//event loop and call back queue */

/*
console.log("Start")

document.getElementById('btn').addEventListener('click',function cb(){
    console.log('Callback')
});

console.log("end")  //here calllback is cb()
//event loop is  have a superpower        */

//fetch is another way as compared to other


console.log('start')
setTimeout(function cbt(){
    console.log('CB settimeout')
},5000)
fetch("http://127.0.0.1:5500/New_begin/Attributes/index.html")
.then(function cbf(){
    console.log("cb netflix")
});

console.log("end")
//microtask queue => similar to callback queue but it have higher priority....

//