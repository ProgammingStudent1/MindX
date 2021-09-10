var w = window.innerWidth;
var h = window.innerHeight;
console.log(w)
console.log(h)


var count = 1;
function hide() {
  if (count == 1) {
    document.getElementById(`layer${count}`).style.transition = "left 7.5s, opacity 2.5s";
    document.getElementById(`layer${count}`).style.left = "-1000px";
    document.getElementById(`layer${count}`).style.opacity = "0";
    document.getElementById("background").style.opacity = "0.4";
    console.log(`layer${count}`);
  }
  if (count == 2) {
    document.getElementById(`layer${count}`).style.transition = "top 8s, opacity 2.5s";
    document.getElementById(`layer${count}`).style.top = "-1000px";
    document.getElementById(`layer${count}`).style.opacity = "0";
    document.getElementById("background").style.opacity = "0.6";
    console.log(`layer${count}`);
  }
  if (count == 3) {
    document.getElementById(`layer${count}`).style.transition =
      "top 7s, left 7s, opacity 2.5s";
    document.getElementById(`layer${count}`).style.left = "-1000px";
    document.getElementById(`layer${count}`).style.top = "-600px";
    document.getElementById(`layer${count}`).style.opacity = "0";
    document.getElementById("background").style.opacity = "0.8";
    console.log(`layer${count}`);
  }
  if (count == 4) {
    document.getElementById(`layer${count}`).style.transition =
      "top 8.5s, left 7s, opacity 2.5s";
    document.getElementById(`layer${count}`).style.top = "-1000px";
    document.getElementById(`layer${count}`).style.left = "-1000px";
    document.getElementById(`layer${count}`).style.opacity = "0";
    document.getElementById("background").style.opacity = "1";
    console.log(`layer${count}`);
  }
  count++;
}

function randomPos(){
  var x = Math.random();
  var y = Math.random();
  var multiplier = Math.floor(Math.random()*101);
  console.log(multiplier)
  document.getElementById("No").style.left = `${x*multiplier}%`;
  document.getElementById("No").style.top = `${y*multiplier}%`;
};

function Yes(){
  alert("thế mai mình qua nhà đón cậu đi chơi nhéeeee ><")
  location.reload();
  return false;
}
