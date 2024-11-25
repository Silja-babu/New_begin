
import { test1 } from "./exportsyn1.js";

const name = "My array Library";

 const option ={
    version:'1.1',
    author:'Code Malyalam'
}

function addAll(arr=[]){
    log('addAll');
    return arr.reduce((total,item) => total+item ,0)
}
 function findMax (arr=[]){
    log('findMax');
    return Math.max(...arr);
}

function log(val){
    console.log('INSIDE', val)
}
export default()=>{
    console.log("Iam the default export");
}
export{
    name,
    option,
    addAll,
    findMax,
    test1
};