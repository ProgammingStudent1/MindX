function toDateString(time) {
let year = "";
let month = "";
let date = "";
let hour = "";
let minute = "";
let second = "";
let millisecond = "";
  if (time && time instanceof Date) {
    year = time.getFullYear()
    month = time.getMonth() + 1
    date = time.getDate() 
    hour = time.getHours()
    minute = time.getMinutes()
    second = time.getSeconds()
    millisecond = time.getMilliseconds()
  }
  if(month < 10){month = '0' + month} 
  if(date < 10){date = '0' + date} 
  if(hour < 10){hour = '0' + hour} 
  if(minute < 10){minute = '0' + minute} 
  if(second < 10){second = '0' + second}
  return `${date}-${month}-${year}, ${hour}:${minute}:${second}:${millisecond}` 
}

function open1(){
  window.open("aboutus.html")
}

function open2(){
  window.open("index.html")
}