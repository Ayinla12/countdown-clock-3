// set variables
const items=document.querySelectorAll(".time");
let futureDate=new Date(2022,11,31,15,30,0);
//find time in ms
const futureTime=futureDate.getTime();
//console.log(futureTime);
//1sec=1000
//1min=60*1000
//1hr=60*60*1000
//1day=24*60*60*1000

function getRemainingTime(){
    let today=new Date();
    const todayTime=today.getTime();
   // console.log(today);
   const showTime=futureTime-todayTime;
  //console.log(showTime);
  const oneDay=24*60*60*1000;
  const oneHour=60*60*1000;
  const oneMin=60*1000;
  const oneSec=1000;

  const days=Math.floor(showTime/oneDay);
 // console.log(days)
 const hours=Math.floor((showTime%oneDay)/oneHour);
 const minutes=Math.floor((showTime%oneHour)/oneMin);
 const seconds=Math.floor((showTime%oneMin)/1000);

 function format(item){
    if(item<10){
        return item=`0${item}`
    }
    return item
 }
//set variables value
const value=[days,hours,minutes,seconds]
items.forEach(function(item,index){
    item.innerHTML=format(value[index])
})

}
//set interval
setInterval(getRemainingTime,1000)
getRemainingTime();