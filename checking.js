$("input[name='options']").on('change',function(){
    if($(this).attr('id') == 'option1'){ 
        $('#myDiv').show();
    }else{
        $('#myDiv').hide();
    }
})

function generatePyramid(n) {
    for (let i = 1; i <= n; i++) {
        // Calculate spaces for the current row
        let spaces = ' '.repeat(n - i);
        
        // Calculate stars for the current row
        let stars = '*'.repeat(2 * i - 1);
        
        // Combine spaces and stars and print the current row
        console.log(spaces + stars);
    }
}

// Call the function with the desired number of rows (e.g., 5 rows)
generatePyramid(5);



