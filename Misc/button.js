function randomPos(){
    var x = Math.random();
    var y = Math.random();
    var multiplier = Math.floor(Math.random()*101);
    console.log(multiplier)
    document.getElementById("button").style.left = `${x*multiplier}%`;
    document.getElementById("button").style.top = `${y*multiplier}%`;
}

function congrats(){
    alert("Chúc mừng b đã ấn đc nút b giỏi gê")
}