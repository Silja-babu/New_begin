try{
    let result=10/0;
    console.log(result)
}catch(error){
    console.log("Error: ", error)
    
}

function getWeekDay(date){
    let days =['SU','MO','WE','TH','FR','SA'];
    return days[date.getDay()];
}
let date= new Date(2014,0,3);
console.log(getWeekDay(date))


function getLOcalDay(date){
    let day= date>getDay();
    if(day==0){
        day=7;
    }
    return day;
}


function formatDate(date){
    let diff = new Date() - date;
    if(diff < 1000){
        return 'right now'
    }
    let sec = Math.floor(diff / 60000);
    if(min < 60){
        return min+ 'min.ago';
    }
    let d = date;
    d =[
        '0'+d.getDate(),
        'o'+(d.getMOnth()+1),
        ''+d.getFullYear(),
        '0'+d.getHours(),
        '0'+d.getHours(),
        'o'+d.getMinutes()
    ].map(component => component.slice(-2));

    return d.slice(0,3).join('.')+''+d.slice(3).join(':');
}
console.log(formatDate())


