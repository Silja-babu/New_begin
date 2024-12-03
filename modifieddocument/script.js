let div = document.createElement('div')
div.className='alert';
div.innerHTML= "<strong>Hi there! </strong> you've read an important message.";

document.body.append(div);
setTimeout(()=>div.remove(),5000)

ol.before('Some list');
ol.after('after');

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst);;


let liLast = document.createElement('li');
liLast.innerHTML ='appending'
ol.append(liLast);


div.insertAdjacentHTML('beforebegin','<p>Hello</p>');
div.insertAdjacentHTML('afterend','<p>Bye</p>')

let div2 = div.cloneNode(true);
div2.querySelector('strong').innerHTML ='Bye there!';
div.after(div2)


function getListContent(){
    let fragment = new DocumentFragment()
}