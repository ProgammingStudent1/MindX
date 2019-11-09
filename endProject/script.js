        var save_src = "";
        var save_id = "";
        var check = 0 ;
        var count = 0;
        var turn = 1;
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
        function bPawn(x,y){
            if(boardChess[x][y]>0){
                if(x==1){
                    document.getElementById("div"+(x+1)+"_"+y).style.backgroundColor = "green";
                    document.getElementById("div"+(x+2)+"_"+y).style.backgroundColor = "green";
                    count++
                }
                else if(x+1<8 && boardChess[x+1][y]==0){
                    document.getElementById("div"+(x+1)+"_"+y).style.backgroundColor = "green";
                    count += 1;
                }
                var num = boardChess[x][y];
                if(boardChess[x+1][y+1]*num<0){
                    document.getElementById("div"+(x+1)+"_"+(y+1)).style.backgroundColor = "green";
                }
                if(boardChess[x+1][y-1]*num<0){
                    document.getElementById("div"+(x+1)+"_"+(y-1)).style.backgroundColor = "green";
                }
            }
        }
        function wPawn(x,y){
            if(boardChess[x][y]<0){
                if(x==6){
                    document.getElementById("div"+(x-1)+"_"+y).style.backgroundColor = "green"
                    document.getElementById("div"+(x-2)+"_"+y).style.backgroundColor = "green"
                    count++
                }
                else if(x-1>0 && boardChess[x-1][y]==0){
                    document.getElementById("div"+(x-1)+"_"+y).style.backgroundColor = "green";
                    count+=1;
                }
                var num = boardChess[x][y];
                if(boardChess[x-1][y+1]*num<0){
                    document.getElementById("div"+(x-1)+"_"+(y+1)).style.backgroundColor = "green";
                }
                if(boardChess[x-1][y-1]*num<0){
                    document.getElementById("div"+(x-1)+"_"+(y-1)).style.backgroundColor = "green";
                }
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
        function test(id){
            var id_1 = id.slice(3,id.length);
            var s = id_1.split('_');
            var x = Number(s[0]);
            var y = Number(s[1]);
            if(check == 0){
               if(boardChess[x][y]==0) return;
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
                    boardChess[x][y] = boardChess[x_1][y_1];
                    boardChess[x_1][y_1] = 0;
                    check = 0;
                    turn = 0-turn
                }
                else{
                    return_backgroundcolor();
                    check = 0;
                    return;
                }
            }

        }