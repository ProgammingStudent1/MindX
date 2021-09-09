var count = 1;
function hide() {
  if (count == 1) {
    document.getElementById(`layer${count}`).style.transition = "left 10s";
    document.getElementById(`layer${count}`).style.left = "-10000px";
    console.log(`layer${count}`);
  }
  if (count == 2) {
    document.getElementById(`layer${count}`).style.transition = "top 10s";
    document.getElementById(`layer${count}`).style.top = "-10000px";
    console.log(`layer${count}`);
  }
  if (count == 3) {
    document.getElementById(`layer${count}`).style.transition = "left 10s";
    document.getElementById(`layer${count}`).style.left = "10000px";
    console.log(`layer${count}`);
  }
  if (count == 4) {
    document.getElementById(`layer${count}`).style.transition = "top 10s";
    document.getElementById(`layer${count}`).style.top = "10000px";
    console.log(`layer${count}`);
  }
  count++;
}
