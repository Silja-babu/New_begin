


function rows(n){
    n=prompt("enter a size of the pyramind")
    for (let i = 0; i <n; i++) {
        var output = '';
        for (let j =0; j < n - i; j++){ output += '<div></div> ';
        for (let k = 0; k <= i; k++) {output += ' <div class="buildingBlock"></div>';
        
    } 

}
}
rows()

}

