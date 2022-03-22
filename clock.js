setInterval(setclock, 1000);

let hourhand = document.querySelector('[data-hour-hand]')
let minutehand = document.querySelector('[data-minute-hand]')
let secoundhand = document.querySelector('[data-secound-hand]')

function setclock(){
    let currentdate = new Date();
    let secoundratio= currentdate.getSeconds() /60;
    let minuteratio= (secoundratio +currentdate.getMinutes()) /60 ;
    let hourratio=  (minuteratio + currentdate.getHours() )/12;

    setrotation(secoundhand , secoundratio);
    setrotation(minutehand , minuteratio);
    setrotation(hourhand , hourratio);
   

   
   
    
   
}
function setrotation(event, rotation){
    event.style.setProperty('--rotation' , rotation * 360)
}

