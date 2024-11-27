/*const var1 ="code malayalam is't good"
const var2='code malayalam is\'t good '
const var3= "code malayalam is\"t good"
const var4=`code malayam is't good`*/

     /*           document.body.innerHTML =`
                <div className = "item">
                            <h4>Product Name</h4>
                            <div>Price : 00</div>
                </div>`*/


     const produnctName ="pen";
     const  price = 12 
     
     const value =` the ${produnctName} is ${price}Rs`;

     const msg =`The product is ${price >10 ? 'costly' :'cheap'}`
     console.log(value)
     console.log(msg)





     const products=[
        {produnctName:'Pen',
            price:10
        },
        {
            produnctName:'Book',
            price:80
        }
     ];
     document.body.innerHTML = products.map((item)=>{
        return`
        <div className = "item">
                            <h4>${item.produnctName}</h4>
                            <div>Price : ${item.price}</div>
        </div> `
     })