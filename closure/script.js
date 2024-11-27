    /*                function x(){
                        var a=6;
                    function y(){
                            console.log(a)
                        }
                        a=100;
                        return y;
                    }

                    var z=x();//this is closure is......
                    console.log(z)
                    z()                */



function z(){
    var b=900;
    function x(){
        var a=6;
    function y(){
            console.log(a,b)
        }
        y()
    }
    x()
}   
z()    
                 