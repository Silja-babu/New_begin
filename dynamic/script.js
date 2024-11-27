import { createButton } from "./widget.js";

createButton('Feature 1',()=>{
    alert('Clicked feature 1')
});
createButton('Feature 2',()=>{
    import("./feature2.js")
        .then((obj)=>{
            createButton('Start Disco',obj.changebg);
            createButton('Stop Disco',obj.stopChangebg)
        })
});
