function randomPos(){
    var x = Math.random();
    var y = Math.random();
    var multiplier = Math.floor(Math.random()*101);
    console.log(multiplier)
    document.getElementById("button").style.left = `${x*multiplier}%`;
    document.getElementById("button").style.top = `${y*multiplier}%`;
}