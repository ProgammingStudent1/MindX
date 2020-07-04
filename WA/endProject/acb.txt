var save_src = "";
var save_id = "";
var check = 0 ;
var count = 0;
var turn = 1;
var first = true;
var boardChess=[
    [2,3,4,5,6,4,3,2],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-2,-3,-4,-5,-6,-4,-3,-2]
]
function return_backgroundcolor(){
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var sum = i+j;
            var ss = document.getElementById('div'+i+"_"+j);
            if(sum%2==0){
               ss.style.backgroundColor = "rgb(236, 236, 236)";
            }
            else{
                ss.style.backgroundColor = "rgb(134, 134, 134)";
            }
        }
    }
}
function return_game(){
    document.getElementById("win").style.display = "none"
    boardChess = [
        [2,3,4,5,6,4,3,2],
        [1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [-1,-1,-1,-1,-1,-1,-1,-1],
        [-2,-3,-4,-5,-6,-4,-3,-2]
    ];
    for(var i = 0 ; i < 8; i ++){
        for(var j = 0; j < 8 ; j++){
            var cc = document.getElementById("div"+i+j);
            if(boardChess[i][j] == 1){
                cc.src =  "img/bPawn.png";
            }
            else if(boardChess[i][j] == -1){
                cc.src = "img/wPawn.png"
            }
            else if(boardChess[i][j] == 2){
                cc.src = "img/bRook.png"
            }
            else if(boardChess[i][j] == -2){
                cc.src = "img/wRook.png"
            }
            else if(boardChess[i][j] == 3){
                cc.src = "img/bKnight.png"
            }
            else if(boardChess[i][j] == -3){
                cc.src = "img/wKnight.png"
            }
            else if(boardChess[i][j] == 4){
                cc.src ="img/bBishop.png";
            }
            else if(boardChess[i][j] == -4){
                cc.src ="img/wBishop.png";
            }
            else if(boardChess[i][j] == 5){
                cc.src = "img/bQueen.png";
            }
            else if(boardChess[i][j] == -5){
                cc.src = "img/wQueen.png";
            }
            else if(boardChess[i][j] == 6){
                cc.src = "img/bKing.png";
            }
            else if(boardChess[i][j] == -6){
                cc.src = "img/wKing.png"
            }
            else{
                cc.src = "";
            }
        }
    }
    save_src = "";
    save_id = "";
    check = 0 ;
    count = 0;
    turn = 1;
    document.getElementById('bPawnLost').textContent = '0';
    document.getElementById('bRookLost').textContent = '0';
    document.getElementById('bKnightLost').textContent = '0';
    document.getElementById('bBishopLost').textContent = '0';
    document.getElementById('bQueenLost').textContent = '0';
    document.getElementById('bKingLost').textContent = '0';
    document.getElementById('wPawnLost').textContent = '0';
    document.getElementById('wRookLost').textContent = '0';
    document.getElementById('wKnightLost').textContent = '0';
    document.getElementById('wBishopLost').textContent = '0';
    document.getElementById('wQueenLost').textContent = '0';
    document.getElementById('wKingLost').textContent = '0';
}
var proQueen = document.getElementById('proQueen')
var proKnight = document.getElementById('proKnight')
var proRook = document.getElementById('proRook')
var proBishop = document.getElementById('proBishop')
function play_1(n){
    var abc = document.getElementById("menu")
    abc.style.left = "-580px"
    abc.style.opacity = 0;
    abc.style.transition = "all 1.5s"; 
    if(n == 1){
        return_game();
    }
}
function returnMenu(){
    document.getElementById("win").style.display = "none";
    var abc = document.getElementById("menu");
    abc.style.left = "195px"
    abc.style.opacity = 1;
    abc.style.transition ="all 1.5s"
    if(first){
       // function check_first(){
              document.getElementById("con").style.display = "block";
              first = false;
        }
        //setTimeout(check_first, 3000);
}
function Promotion() {
    for (var index = 0; index < 8; index++) {
        if(boardChess[7][index]==1){
            document.getElementById('promotion').style.display='block'
            proQueen.src='img/bQueen.png'
            proKnight.src='img/bKnight.png'
            proRook.src='img/bRook.png'
            proBishop.src='img/bBishop.png'
            prm_x = 7;
            prm_y = index;
            prm_turn = "black";
            break;
        }
        else if(boardChess[0][index]==-1){
            document.getElementById('promotion').style.display='block'
            proQueen.src='img/wQueen.png'
            proKnight.src='img/wKnight.png'
            proRook.src='img/wRook.png'
            proBishop.src='img/wBishop.png'
            prm_x = 0;
            prm_y = index;
            prm_turn = "white";
            break;
        }
    }
}
setInterval(Promotion,10);
function prmQueen(){
    if (prm_turn == "black") {
        boardChess[7][prm_y]=5;
        document.getElementById('div'+7+prm_y).src='img/bQueen.png'
        document.getElementById('promotion').style.display="none";
    }
    else{
        boardChess[0][prm_y]=-5;
        document.getElementById('div'+0+prm_y).src='img/wQueen.png'
        document.getElementById('promotion').style.display="none";
    }
}
function prmKnight(){
    if (prm_turn == "black") {
        boardChess[7][prm_y]=3;
        document.getElementById('div'+7+prm_y).src='img/bKnight.png'
        document.getElementById('promotion').style.display="none";
    }
    else{
        boardChess[0][prm_y]=-3;
        document.getElementById('div'+0+prm_y).src='img/wKnight.png'
        document.getElementById('promotion').style.display="none";
    }
}
function prmRook(){
    if (prm_turn == "black") {
        boardChess[7][prm_y]=2;
        document.getElementById('div'+7+prm_y).src='img/bRook.png'
        document.getElementById('promotion').style.display="none";
    }
    else{
        boardChess[0][prm_y]=-2;
        document.getElementById('div'+0+prm_y).src='img/wRook.png'
        document.getElementById('promotion').style.display="none";
    }
}
function prmBishop(){
    if (prm_turn == "black") {
        boardChess[7][prm_y]=4;
        document.getElementById('div'+7+prm_y).src='img/bBishop.png'
        document.getElementById('promotion').style.display="none";
    }
    else{
        boardChess[0][prm_y]=-4;
        document.getElementById('div'+0+prm_y).src='img/wBishop.png'
        document.getElementById('promotion').style.display="none";
    }
}
var checkPawn=false
var checkPawnClick=false
var pawnY=-1;
var pawnX=-1;
function bPawn(x,y){
    if(boardChess[x][y]>0){
        if(x==1){
            if(boardChess[x+1][y] == 0){
              if (boardChess[x+1][y]==0) {document.getElementById("div"+(x+1)+"_"+y).style.backgroundColor = "green";}
              if (boardChess[x+2][y]==0) {document.getElementById("div"+(x+2)+"_"+y).style.backgroundColor = "green";}
              count++
              checkPawnClick=true
            }
        }
        else if(x+1<8 && boardChess[x+1][y]==0){
            document.getElementById("div"+(x+1)+"_"+y).style.backgroundColor = "green";
            count += 1;
        }
        var num = boardChess[x][y];
        if(boardChess[x+1][y+1]*num<0){
            document.getElementById("div"+(x+1)+"_"+(y+1)).style.backgroundColor = "green";
            count++
        }
        if(boardChess[x+1][y-1]*num<0){
            document.getElementById("div"+(x+1)+"_"+(y-1)).style.backgroundColor = "green";
            count++
        }
        if (checkPawn==true){
            if(x==pawnX && y+1==pawnY){
            document.getElementById("div"+(x+1)+"_"+(y+1)).style.backgroundColor = "green";
            count++
            checkPawnClick=false
            }
            if(x==pawnX && y-1==pawnY){
            document.getElementById("div"+(x+1)+"_"+(y-1)).style.backgroundColor = "green";
            count++
            checkPawnClick=false
            }
        }
    }
}
function wPawn(x,y){
    if(boardChess[x][y]<0){
        if(x==6){
            if(boardChess[x - 1][y] == 0){
               if (boardChess[x-1][y]==0) {document.getElementById("div"+(x-1)+"_"+y).style.backgroundColor = "green"}
               if (boardChess[x-2][y]==0) {document.getElementById("div"+(x-2)+"_"+y).style.backgroundColor = "green"}
               count++
               checkPawnClick=true
            }
        }
        else if(x-1>=0 && boardChess[x-1][y]==0){
            document.getElementById("div"+(x-1)+"_"+y).style.backgroundColor = "green";
            count+=1;
        }
        var num = boardChess[x][y];
        if(boardChess[x-1][y+1]*num<0){
            document.getElementById("div"+(x-1)+"_"+(y+1)).style.backgroundColor = "green";
            count++
        }
        if(boardChess[x-1][y-1]*num<0){
            document.getElementById("div"+(x-1)+"_"+(y-1)).style.backgroundColor = "green";
            count++
        }
        if (checkPawn==true){
            if(x==pawnX && y+1==pawnY){
            document.getElementById("div"+(x-1)+"_"+(y+1)).style.backgroundColor = "green";
            count++
            checkPawnClick=false
            }
            if(x==pawnX && y-1==pawnY){
            document.getElementById("div"+(x-1)+"_"+(y-1)).style.backgroundColor = "green";
            count++
            checkPawnClick=false
            }
        }
    }
}
function knight(x,y){
    var curPos = boardChess[x][y]
    if(x+1<8 && y+2<8 && curPos*boardChess[x+1][y+2]<=0){
        document.getElementById("div"+(x+1)+"_"+(y+2)).style.backgroundColor = "green";
        count += 1;
    }
    if(x+1<8 && y-2>=0 && curPos*boardChess[x+1][y-2]<=0){
        document.getElementById("div"+(x+1)+"_"+(y-2)).style.backgroundColor = "green";
        count += 1;
    }
    if(x+2<8 && y+1<8 && curPos*boardChess[x+2][y+1]<=0){
        document.getElementById("div"+(x+2)+"_"+(y+1)).style.backgroundColor = "green";
        count += 1;
    }
    if(x+2<8 && y-1>=0 && curPos*boardChess[x+2][y-1]<=0){
        document.getElementById("div"+(x+2)+"_"+(y-1)).style.backgroundColor = "green";
        count += 1;
    }
    if(x-1>=0 && y+2<8 && curPos*boardChess[x-1][y+2]<=0){
        document.getElementById("div"+(x-1)+"_"+(y+2)).style.backgroundColor = "green";
        count += 1;
    }
    if(x-1>=0 && y-2>=0 && curPos*boardChess[x-1][y-2]<=0){
        document.getElementById("div"+(x-1)+"_"+(y-2)).style.backgroundColor = "green";
        count += 1;
    }
    if(x-2>=0 && y+1<8&& curPos*boardChess[x-2][y+1]<=0){
        document.getElementById("div"+(x-2)+"_"+(y+1)).style.backgroundColor = "green";
        count += 1;
    }
    if(x-2>=0 && y-1>=0 & curPos*boardChess[x-2][y-1]<=0){
        document.getElementById("div"+(x-2)+"_"+(y-1)).style.backgroundColor = "green";
        count += 1;
    }
}
var y_save = y;
function king(x,y) {
        var curpos = boardChess[x][y];
        if(y+1<8 && curpos*boardChess[x][y+1]<=0){
            document.getElementById("div"+x+"_"+(y+1)).style.backgroundColor = "green";
            count += 1;
        }
        if(y-1>=0 && curpos*boardChess[x][y-1]<=0){
            document.getElementById("div"+x+"_"+(y-1)).style.backgroundColor = "green";
            count += 1;
        }
        if(x+1<8 && curpos*boardChess[x+1][y]<=0){
            document.getElementById("div"+(x+1)+"_"+y).style.backgroundColor = "green";
            count += 1;
        }
        if(x+1<8 && y+1<8 && curpos*boardChess[x+1][y+1]<=0){
            document.getElementById("div"+(x+1)+"_"+(y+1)).style.backgroundColor = "green";
            count += 1;
        }
        if(x+1<8 && y-1>=0 && curpos*boardChess[x+1][y-1]<=0){
            document.getElementById("div"+(x+1)+"_"+(y-1)).style.backgroundColor = "green";
            count += 1;
        }
        if(x-1>=0 &&  curpos*boardChess[x-1][y]<=0){
            document.getElementById("div"+(x-1)+"_"+y).style.backgroundColor = "green";
            count += 1;
        }
        if(x-1>=0 && y+1<8 && curpos*boardChess[x-1][y+1]<=0){
            document.getElementById("div"+(x-1)+"_"+(y+1)).style.backgroundColor = "green";
            count += 1;
        }
        if(x-1>=0 && y-1>=0 && curpos*boardChess[x-1][y-1]<=0){
            document.getElementById("div"+(x-1)+"_"+(y-1)).style.backgroundColor = "green";
            count += 1;
        }
}
function bishop(x,y){
    var x_save = x;
    var y_save = y;
    x = x_save+1;
    y = y_save+1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x++;
            y++;
            count++;
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    x = x_save+1;
    y = y_save-1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x++
            y-=1
            count++
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    x = x_save-1;
    y = y_save-1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x-=1
            y-=1
            count++
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    } 
    x = x_save-1;
    y = y_save+1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x-=1
            y++
            count++
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
}
function rook(x,y){
    var x_save = x;
    var y_save = y;
    x = x_save+1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x++;
            count++;
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    x = x_save
    y = y_save+1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            y++;
            count++;
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    y = y_save
    x = x_save-1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x-=1;
            count++;
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    x = x_save
    y = y_save-1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            y-=1;
            count++;
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    y = y_save
}
function queen(x,y){
    var x_save = x;
    var y_save = y;
    x = x_save+1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x++;
            count++;
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    x = x_save
    y = y_save+1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            y++;
            count++;
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    y = y_save
    x = x_save-1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x-=1;
            count++;
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    x = x_save
    y = y_save-1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            y-=1;
            count++;
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    y = y_save
     x = x_save+1;
    y = y_save+1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x++;
            y++;
            count++;
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    x = x_save+1;
    y = y_save-1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x++
            y-=1
            count++
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    x = x_save-1;
    y = y_save-1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x-=1
            y-=1
            count++
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    } 
    x = x_save-1;
    y = y_save+1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x-=1
            y++
            count++
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    x = x_save+1;
    y = y_save+1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x++;
            y++;
            count++;
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    x = x_save+1;
    y = y_save-1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x++
            y-=1
            count++
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
    x = x_save-1;
    y = y_save-1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x-=1
            y-=1
            count++
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    } 
    x = x_save-1;
    y = y_save+1;
    while(x>=0 && x<8 && y>=0 && y<8){
        if(boardChess[x][y]==0){
            document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            x-=1
            y++
            count++
        }
        else{
            if(boardChess[x][y]*boardChess[x_save][y_save]<0){
                document.getElementById("div"+x+"_"+y).style.backgroundColor = "green"
            }
            break
        }
    }
}

function b_game(){
    var testWin = document.getElementById("win")
    testWin.innerHTML = "Black wins!"
    testWin.style.display = "block"
}
function w_game(){
    var testWin = document.getElementById("win")
    testWin.innerHTML = "White wins!"
    testWin.style.display = "block"
}
function test(id){
    var id_1 = id.slice(3,id.length);
    var s = id_1.split('_');
    var x = Number(s[0]);
    var y = Number(s[1]);
    if(check == 0){
       if(boardChess[x][y]==0){
            return;
       }
       if(turn*boardChess[x][y]>0){
        return
       }
       if(boardChess[x][y]==1){
          save_id = 'div'+x+"_"+y;
          save_src = document.getElementById('div'+x+y).src;
          bPawn(x,y);
       }
       if(boardChess[x][y]==-1){
          save_id = 'div'+x+"_"+y;
          save_src = document.getElementById('div'+x+y).src; 
          wPawn(x,y);
       }
       if(boardChess[x][y]==4 || boardChess[x][y]==-4){
            save_id = 'div'+x+"_"+y;
            save_src = document.getElementById('div'+x+y).src;
            bishop(x,y);
       }
       if(boardChess[x][y]==2 || boardChess[x][y]==-2){
           save_id = 'div'+x+"_"+y;
           save_src = document.getElementById('div'+x+y).src;
           rook(x,y);
       }
       if(boardChess[x][y]==5 || boardChess[x][y]==-5){
           save_id = 'div'+x+"_"+y;
           save_src = document.getElementById('div'+x+y).src;
           queen(x,y)
       }
       if(boardChess[x][y]==6 || boardChess[x][y]==-6){
           save_id = 'div'+x+"_"+y;
           save_src = document.getElementById('div'+x+y).src;
           king(x,y)
       }
       if(boardChess[x][y]==3 || boardChess[x][y]==-3){
           save_id = 'div'+x+"_"+y;
           save_src = document.getElementById('div'+x+y).src;
           knight(x,y)
       }
       if(count !=0){
           count = 0;
           check = 1;
       }
    }
    else if(check == 1){
        save_id = save_id.slice(3,save_id.length);
        var s_1 = save_id.split("_");
        var x_1 = Number(s_1[0]);
        var y_1 = Number(s_1[1]);
        var ss = document.getElementById(id);
        var img_next = document.getElementById('div'+x+y);
        var img_save = document.getElementById('div'+x_1+y_1);
        if(ss.style.backgroundColor == "green"){
            return_backgroundcolor();
            img_next.src = save_src
            img_save.src = "alt";
            var save_value = boardChess[x][y];
            if(save_value == 6){
                w_game();
                //alert(save_value);
            }
            if(save_value == -6){
                b_game();
                alert(save_value);
            }
            boardChess[x][y] = boardChess[x_1][y_1];
            boardChess[x_1][y_1] = 0;
            check = 0;
            turn = 0-turn
            if (boardChess[x][y]==1 && boardChess[x-1][y]==-1 && checkPawn==true) {
                save_value=boardChess[x-1][y]
                boardChess[x-1][y]==0
                document.getElementById('div'+(x-1)+y).src='alt'
            }
            else if (boardChess[x][y]==-1 && boardChess[x+1][y]==1 && checkPawn==true) {
                save_value=boardChess[x+1][y]
                boardChess[x+1][y]==0
                document.getElementById('div'+(x+1)+y).src='alt'
            }
            checkPawn=false
            if (checkPawnClick) {
                if (Math.abs(x-x_1)==2 && y==y_1) {
                    checkPawn=true
                    pawnX=x
                    pawnY=y
                }
            }
            PieceLost(save_value)
        }
        else{
            checkPawn=false
            return_backgroundcolor();
            check = 0;
            return;
        }
    }
}
function PieceLost(x) 
{
    if (x==0) {
        return;
    }
    if (x==1) {
        var a=document.getElementById('bPawnLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
    if (x==2) {
        var a=document.getElementById('bRookLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
    if (x==3) {
        var a=document.getElementById('bKnightLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
    if (x==4) {
        var a=document.getElementById('bBishopLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
    if (x==5) {
        var a=document.getElementById('bQueenLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
    if (x==6) {
        var a=document.getElementById('bKingLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
    if (x==-1) {
        var a=document.getElementById('wPawnLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
    if (x==-2) {
        var a=document.getElementById('wRookLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
    if (x==-3) {
        var a=document.getElementById('wKnightLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
    if (x==-4) {
        var a=document.getElementById('wBishopLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
    if (x==-5) {
        var a=document.getElementById('wQueenLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
    if (x==-6) {
        var a=document.getElementById('wKingLost')
        a.innerHTML=Number(a.innerHTML) + 1;
    }
}
