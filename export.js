console.log("Hello all");

export function addArray(arr){
    return arr.reduce((total,item) => total+item,0)
}
