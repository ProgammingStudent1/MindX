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
  return `${date}-${month}-${year}, ${hour}:${minute}:${second}:${millisecond}`
}