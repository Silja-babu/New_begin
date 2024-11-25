/*import  myprint, { addAll,name ,findMax} from "./exportsyn.js";
console.log(myprint())
const val = addAll([1,3,5]);
const max= findMax([200,234,567,666])
console.log(val);
console.log(name)
console.log(max)

/* this is import of all default and name export */

        import * as libObj from "./exportsyn.js";
        console.log(libObj);

        const max = libObj.findMax([200,234,567,666]);
        console.log(max)
 