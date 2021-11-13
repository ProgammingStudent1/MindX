function randomPos(){
    var x = Math.random();
    var y = Math.random();
    var multiplier = Math.floor(Math.random()*101);
    var leftSave = `${document.getElementById("button").style.left}%`
    var topSave = `${document.getElementById("button").style.top}%`
    var leftNew = x*multiplier
    var topNew = y*multiplier
    console.log(leftSave, topSave)
    console.log(leftNew, topNew)
    if(leftSave <= 50 && leftNew > 50){
        leftSave = `${leftNew}%`;
        if(topSave <= 50 && topNew > 50){
            topSave = `${topNew}%`
        } else if(topSave > 50 && topNew < 50){
            topSave = `${topNew}%`
        }
    } else if(leftSave > 50 && leftNew < 50){
        leftSave = `${leftNew}%`;
        if(topSave <= 50 && topNew > 50){
            topSave = `${topNew}%`
        } else if(topSave > 50 && topNew < 50){
            topSave = `${topNew}%`
        }
    }
}
function congrats(){
    alert("Chúc mừng b đã ấn đc nút b giỏi gê")
}

