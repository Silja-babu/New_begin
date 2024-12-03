function hide(){
    let event = new CustomEvent("hide",{
        cancelable:true
    });

    if(!rabbit.dispatchEvent(event)){
        console.log('The action was prevented by a handler');
    }else{
        rabbit.hidden = true;
    }
}

rabbit.addEventListener('hide', function(event) {
    if (confirm("Call preventDefault?")) {
      event.preventDefault();
    }
  });