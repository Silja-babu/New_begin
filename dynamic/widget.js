export function createButton(name,fn){
    const btn = document.createElement('button')
    btn.innerHTML=name;
    btn.onclick=fn;
    btn.style.margin ='5px'
    document.body.appendChild(btn);
}