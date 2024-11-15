//                    class Button{
//                        constructor(name){
//                            this.button=document.createElement('button');
//                            this.button.innerHTML=name;
//                            document.body.appendChild(this.button);
//                        }
//                        set width(width){
//                            this.button.style.width=width+'px'
//                        }
//                        set height(height){
//                            this.button.style.height=height+'px'
//                        }
//                    }
//                    var b1=new Button("Click me!")
//
//                    class Para{
//                        constructor(explain){
//                            this.p=document.createElement('h1');
//                            this.p.innerHTML=explain;
//                            document.body.appendChild(this.p)
//                        }
//                    }
//                    new Para("Are you ready for the game")
//                    b1.width=100
//                    b1.height=100
                    //////////z/zz/z/z/z/z/z/z/zz/z/////zzzzzz

  class Button{
    constructor(name){
        this.button=document.createElement('button')
        this.button.innerHTML=name;
        document.body.appendChild(this.button)
    }
    onclick(fn){
        this.button.onclick=fn;
    }
    
  }   
  
  class GreenButton extends Button{
   
    onclick(fn){
        super.onclick(function(){
            this.button.style.background='green';
            fn()
        }.bind(this));
    }
    
  }                 
  var b1= new GreenButton('My Button')
  b1.onclick(function(){
    console.log('Clicked')
  })
  //
                      //prototye
