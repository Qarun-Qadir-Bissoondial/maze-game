canvas = document.getElementById("mazeCanvas");
var zoom = (screen.height / 800) - 0.28;
var scale = "scale(" + zoom + ")";
document.body.style.transform = scale;

window.alert("READ!! Game Controls:\nW: UP  S: DOWN\nA: LEFT  D: RIGHT  Esc: PAUSE");
var iflose = false;
maze =
[ 
[3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
[3 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,-2 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,3],
[3 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,3],
[3 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,3],
[3 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,3],
[3 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,-2 ,2 ,1 ,1 ,-4 ,1 ,1 ,2 ,-1 ,2 ,1 ,2 ,1 ,-2 ,1 ,2 ,1 ,2 ,1 ,1 ,1 ,3],
[3 ,1 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,1 ,3],
[3 ,1 ,-1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,3],
[3 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,-2 ,2 ,2 ,3],
[3 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,-2 ,1 ,1 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,3],
[3 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,-2 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,3],
[3 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,3],
[3 ,1 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,1 ,10 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,3],
[3 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,-2 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,3],
[3 ,2 ,2 ,1 ,2 ,1 ,2 ,-2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,-2 ,2 ,-2 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,1 ,3],
[3 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,1 ,1 ,-2 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,3],
[3 ,1 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,-2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,3],
[3 ,1 ,2 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,1 ,-2 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,3],
[3 ,1 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,3],
[3 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,3],
[3 ,1 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,2 ,3],
[3 ,1 ,1 ,-1 ,2 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,-2 ,2 ,1 ,-2 ,1 ,1 ,1 ,3],
[3 ,2 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,3],
[3 ,1 ,2 ,1 ,1 ,1 ,2 ,-5 ,2 ,1 ,2 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,3],
[3 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,3],
[3 ,1 ,2 ,-2 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,-1 ,2 ,4 ,2 ,1 ,3],
[3 ,1 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,1 ,3],
[3 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,-3 ,-2 ,1 ,1 ,-2 ,1 ,2 ,1 ,3],
[3 ,1 ,2 ,2 ,2 ,2 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,1 ,2 ,2 ,2 ,1 ,2 ,1 ,2 ,2 ,2 ,2 ,2 ,1 ,3],
[3 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,-2 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,3],
[3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3]
];

startpos = {
  row: 1,
  col: 1
}
spawnpoint = {
  row: 1,
  col: 1
}
temp_bomb = {
  row: 0,
  col: 0
}

enemy1 = 
[ {row:5, col:13}, {row:5, col:14}, {row:5, col:15}, {row:4, col:15}, {row:3, col: 15}, {row:3, col:14}, {row:3, col: 13},
  {row:3, col:12}, {row:3, col:13}, {row:3, col: 14}, {row:3, col:15}, {row:2, col:15}, {row:1, col:15}, {row:1, col:16}
]
enemy2 = 
[ {row:23, col:7},  {row:22, col:7},  {row:21, col:7},  {row:21, col:8},  {row:21, col: 9}, {row:21, col:10},  {row:21, col: 11},
  {row:22, col:11}, {row:23, col:11}, {row:22, col:11}, {row:21, col:11}, {row:21, col:12}, {row:21, col: 13}, {row:21, col:14}, 
  {row:21, col:15}, {row:20, col:15}, {row:19, col:15}, {row:19, col: 14}
]
enemy3 = 
[ {row:27, col: 22}, {row:27, col:21}, {row:27, col:20}, {row:27, col:19}, {row:27, col: 18}, {row:27, col:17}, {row:28, col: 17},
  {row:29, col: 17}, {row:29, col:18}, {row:29, col:19}
]

trap_door_pos = [];
for (i = 1; i <= 30; i++ ){
  for (j = 1; j <= 30; j++){
    if (maze[i][j] == -2){
      temp_pos = {row : i, col: j};
      trap_door_pos.push(temp_pos);
    }
  }
}

function Game_start () {
    init_game.layout();
    for (x = 0; x < localStorage.length; x++) {
      var name = localStorage.key(x);
      var something = localStorage.getItem(name);
      document.getElementById("display").innerHTML += name + " " + something + "<br>";
    }
    init_game.start();
}

var init_game = {
    context: canvas.getContext("2d"),
    start : function(){
              this.interval = setInterval(updatecanvas, 100);
              // this.timer = setInterval(ticToc,1000);
              window.addEventListener("keydown", function(e){
                  init_game.key = e.keyCode;
              }, true)
              window.addEventListener("keyup", function(e){
                  init_game.key = true;
              }, true)
    },
    clear: function () { this.context.clearRect(0,0, canvas.width, canvas.height); },
    layout : function() { drawMaze(); } 
}

function game_element (rowpos, colpos,color, width, height, value) {
    this.x = (rowpos*25) + 2;
    this.y = (colpos*25) + 2;
    this.width = width;
    this.height = height; 
    this.update = function (){
        ctx = init_game.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, width, height);
    }
}

bomb_time_count = 0; explosion = false;
wall_time_count = 0; ifshift = true;
trap_time_count = 0; isopen = true;
score_count = 0;
fall = new Audio("sound/goat.mp3"); eat = new Audio("sound/nomnom.mp3");
winsound = new Audio("sound/win.mp3"); step = new Audio("sound/walk.mp3");

var pause = false; 
var death = 0; var score = (secs * 100) + 5000;
ep1 = 0; end1 = false;
ep2 = 0; end2 = false;
ep3 = 0; end3 = false;

function updatecanvas () {
  document.getElementById("showscore").innerHTML = "Current score: " + score;
  if (pause == false){
    score_count++;
    if (score_count == 10){
      score_count = 0;
      score -= 100;
    }
  }
  
  if (end1 == false){
    maze[enemy1[ep1].row][enemy1[ep1].col] = -4;
    if (ep1 >= 1) {maze[enemy1[ep1 - 1].row][enemy1[ep1 - 1].col] = 1; }
    if (maze[enemy1[ep1 + 1].row][enemy1[ep1 + 1].col] == 0) {
      score -= 150;
      respawn();
      eat.play();
    }
    ep1++;
    if (ep1 == (enemy1.length - 1))
      end1 = true;
  } else {
    maze[enemy1[ep1].row][enemy1[ep1].col] = -4
    if (ep1 < enemy1.length - 1) {maze[enemy1[ep1 + 1].row][enemy1[ep1 + 1].col] = 1; }
    if (maze[enemy1[ep1 - 1].row][enemy1[ep1 - 1].col] == 0) {
      respawn(); eat.play(); score -= 150;
    }
    ep1--;
    if (ep1 == 0)
      end1 = false;
  }

  if (end2 == false){
    maze[enemy2[ep2].row][enemy2[ep2].col] = -5;
    if (ep2 >= 1) {maze[enemy2[ep2 - 1].row][enemy2[ep2 - 1].col] = 1; }
    if (maze[enemy2[ep2 + 1].row][enemy2[ep2 + 1].col] == 0) { 
      score -= 150;
      respawn();
      eat.play();
    }
    ep2++;
    if (ep2 == (enemy2.length - 1))
      end2 = true;
  } else {
    maze[enemy2[ep2].row][enemy2[ep2].col] = -5
    if (ep2 < enemy2.length - 1) {maze[enemy2[ep2 + 1].row][enemy2[ep2 + 1].col] = 1; }
    if (maze[enemy2[ep2 - 1].row][enemy2[ep2 - 1].col] == 0) {
      score -= 150;
      respawn();
      eat.play();
    }
    ep2--;
    if (ep2 == 0)
      end2 = false;
  }

  if (end3 == false){
    maze[enemy3[ep3].row][enemy3[ep3].col] = -3;
    if (ep3 >= 1) {maze[enemy3[ep3 - 1].row][enemy3[ep3 - 1].col] = 1; }
    if (maze[enemy3[ep3 + 1].row][enemy3[ep3 + 1].col] == 0) {
      respawn();
      score -= 150;
      eat.play();
    }
    ep3++;
    if (ep3 == (enemy3.length - 1))
      end3 = true;
  } else {
    maze[enemy3[ep3].row][enemy3[ep3].col] = -3
    if (ep3 < enemy3.length - 1) {maze[enemy3[ep3 + 1].row][enemy3[ep3 + 1].col] = 1; }
    if (maze[enemy3[ep3 - 1].row][enemy3[ep3 - 1].col] == 0) {
      score -= 150;
      respawn();
      eat.play();
    }
    ep3--;
    if (ep3 == 0)
      end3 = false;
  }

  wall_time_count++;
  shift_wall(wall_time_count, ifshift);
  if (wall_time_count == 32){
    ifshift = !ifshift;
    wall_time_count = 0;
  }  
  trap_time_count++;
  alt_trap(trap_time_count, isopen);
  if (trap_time_count == 25){
    isopen = !isopen;
    trap_time_count = 0;
  }
  if (explosion){
    bomb_time_count++;
    place_bomb(temp_bomb.row, temp_bomb.col, bomb_time_count);
    if (bomb_time_count == 100){
      bomb_time_count = 0;
      explosion = false;
    }
  }

  if ( (startpos.row === 11 && startpos.col == 25) || (startpos.row == 7 && startpos.col == 19) ){
    maze[8][17] = 2; maze [8][18] = 1;
  }
  if (init_game.key && init_game.key == 27){
    pause = !pause;
  }
  if (init_game.key && init_game.key == 65 && pause == false) { 
    switch (maze[startpos.row][startpos.col - 1]) {
      case 3: case 2: break;
      case -1:
        maze[startpos.row][startpos.col] = 1; score -= 150;
        temp_bomb.row = startpos.row; temp_bomb.col = startpos.col - 1; 
        explosion = bomb_trigger(startpos.row, startpos.col - 1); break;
      case -2:
        maze[startpos.row][startpos.col] = 1; score -= 150;
        fall.play();
        respawn(); break;
      case 10:
        winsound.play();
        setTimeout(function () { alert("You won!!! :D");} , 500);
        setTimeout(won, 1000);  break; 
      default:
        startpos.col--; step.play();
        console.log("Current position: " + startpos.row + "," + startpos.col);
        maze[startpos.row][startpos.col] = 0;
        maze[startpos.row][startpos.col+1] = 1;
    }
  }
  if (init_game.key && init_game.key == 68 && pause == false) {
    switch (maze[startpos.row][startpos.col + 1]){
      case 3: case 2: break;
      case -1:
        maze[startpos.row][startpos.col] = 1; score -= 150;
        temp_bomb.row = startpos.row; temp_bomb.col = startpos.col + 1;
        explosion = bomb_trigger(startpos.row, startpos.col + 1); break;
      case -2:
        maze[startpos.row][startpos.col] = 1; score -= 150;
        fall.play();
        respawn(); break;
      case 10:
        winsound.play();
        setTimeout(function () { alert("You won!!! :D");} , 500); 
        setTimeout(won, 1000); break; 
      default:
        startpos.col++; step.play();
        console.log("Current position: " + startpos.row + "," + startpos.col);
        maze[startpos.row][startpos.col] = 0;
        maze[startpos.row][startpos.col-1] = 1;
    }
  }
  if (init_game.key && init_game.key == 87 && pause == false) {
    switch (maze[startpos.row - 1][startpos.col]) {
      case 3: case 2: break;
      case -1:
        maze[startpos.row][startpos.col] = 1; score -= 150;
        temp_bomb.row = startpos.row - 1; temp_bomb.col = startpos.col;
        explosion = bomb_trigger(startpos.row - 1, startpos.col);  break;
      case -2:
        maze[startpos.row][startpos.col] = 1; score -= 150;
        fall.play();
        respawn(); break;
      case 4: 
        maze[startpos.row - 1][startpos.col] = 1;
        maze[7][2] = 1; maze[21][3] = 1; maze[5][17] = 1; maze[25][25] = 1;
        score += 500; break;
      case 10: 
        winsound.play();
        setTimeout(function () { alert("You won!!! :D");} , 500); 
        setTimeout(won, 1000); break;
      default:
        startpos.row--; step.play();
        console.log("Current position: " + startpos.row + "," + startpos.col);
        maze[startpos.row][startpos.col] = 0;
        maze[startpos.row+1][startpos.col] = 1;
    }
  }
  if (init_game.key && init_game.key == 83 & pause == false) {
    switch (maze[startpos.row + 1][startpos.col]) {
      case 3: case 2: break;
      case -1:
        maze[startpos.row][startpos.col] = 1; score -= 150;
        temp_bomb.row = startpos.row + 1; temp_bomb.col = startpos.col;
        explosion = bomb_trigger(startpos.row + 1, startpos.col);  break;
      case -2: 
        maze[startpos.row][startpos.col] = 1; score -= 150;
        fall.play();
        respawn(); break;
      case 10: 
        winsound.play();
        setTimeout(function () { alert("You won!!! :D");} , 500);
        setTimeout(won, 1000); break; 
      default:
        startpos.row++; step.play();
        console.log("Current position is: " + startpos.row + "," + startpos.col);
        maze[startpos.row][startpos.col] = 0;
        maze[startpos.row-1][startpos.col] = 1;
    }
  }
  if (pause == false){ init_game.clear(); init_game.layout(); }
}

function drawMaze() {
  context = canvas.getContext("2d");
  player = new Image(); player.src = "img/student.png"; wall = new Image(); wall.src = "img/wall.png";
  walk = new Image(); walk.src = "img/ground.png"; bomb = new Image(); bomb.src = "img/bomb.gif";
  win = new Image(); win.src = "img/scroll.png"; trapdoor = new Image(); trapdoor.src ="img/trapdoor.jpg";
  ghost = new Image(); ghost.src = "img/ghost.jpg"; bact = new Image(); bact.src = "img/bact.jpg";
  virus = new Image(); virus.src = "img/virus.jpg"; lever = new Image(); lever.src = "img/lever.png";
  spawn = new Image(); spawn.src = "img/spawn.jpg";
 
  for (var x = 0; x < maze.length; x++) {
    for (var y = 0; y < maze[x].length; y++) {
      context.drawImage(spawn, 0, 0, 25, 25, 25, 25, 25,25);
      if (maze[x][y] === -5) { context.drawImage(ghost, 0, 0, 25, 25, y*25, x*25, 25, 25)}
      else if (maze[x][y] === -4) { context.drawImage(bact, 0, 0, 25, 25, y*25, x*25, 25, 25)}
      else if (maze[x][y] === -3) { context.drawImage(virus, 0, 0, 25, 25, y*25, x*25, 25, 25); }
      else if (maze[x][y] === -2) { context.drawImage(trapdoor, 0, 0, 25, 25, y*25, x*25, 25, 25);}
      else if (maze[x][y] === -1) { context.drawImage(bomb, 0, 0, 25, 25, y*25, x*25, 25, 25); }
      else if (maze[x][y] === 0) { context.drawImage(player, 382,0, 25, 25, y*25, x*25, 25,25); } 
      else if (maze[x][y] === 1) { context.drawImage(walk, 0, 0, 25, 25, y*25, x*25, 25, 25); }
      else if (maze[x][y] === 2) { context.drawImage(wall, 0, 0, 25, 25, y*25, x*25, 25, 25); }  
      else if (maze[x][y] === 4) { context.drawImage(lever, 0, 0, 25, 25, y*25, x*25, 25, 25); }
      else if (maze[x][y] === 10) { context.drawImage(win, 0, 0, 25, 25, y*25, x*25, 25, 25); }
      else if (maze[x][y] === 3) { context.fillStyle = '#BDBDBD'; context.fillRect(y*25, x*25, 25, 25); }
      
    } 
  }
}

function respawn(){
  startpos.row = spawnpoint.row;
  startpos.col = spawnpoint.col;
}

function bomb_trigger (bomb_row, bomb_col){
  maze[bomb_row][bomb_col] = 1; respawn();
  var sound = new Audio("sound/boom.wav");
  sound.play(); return true;
}

function place_bomb(bomb_row, bomb_col, time) {
  if (time == 100){
    maze[bomb_row][bomb_col] = -1;
    console.log("bomb replaced");
  }
}

function shift_wall(time, shift){
  if (time == 32){
    if (shift == true){
      maze[4][7]   = 1; overlap(6,7); maze[6][7]   = 2; maze[22][1]  = 1; overlap(20,1); maze[20][1]  = 2;
      maze[14][14] = 1; overlap(6,7); maze[14][15] = 2; maze[14][18] = 1; overlap(14,17); maze[14][17] = 2;
      maze[22][25] = 1; overlap(24,25); maze[24][25] = 2; maze[21][22] = 1; overlap(21,20); maze[21][20] = 2;
      maze[10][29] = 1; overlap(12,29); maze[12][29] = 2; maze[8][23] =  1; overlap(10,23); maze[10][23] = 2;
      maze[29][10] = 1; overlap(29,12); maze[29][12] = 2; maze[22][8] =  1; overlap(22,9); maze[22][9]  = 2;
    } else if (shift == false) {
      overlap(4,7); maze[4][7]   = 2; maze[6][7]   = 1;  overlap(22,1); maze[22][1]  = 2; maze[20][1]  = 1;
      overlap(14,14); maze[14][14] = 2; maze[14][15] = 1; overlap(14,18); maze[14][18] = 2; maze[14][17] = 1;
      overlap(22,25); maze[22][25] = 2; maze[24][25] = 1; overlap(21,22); maze[21][22] = 2; maze[21][20] = 1;
      overlap(10,29); maze[10][29] = 2; maze[12][29] = 1; overlap(8,23); maze[8][23] =  2; maze[10][23] = 1;
      overlap(29,10); maze[29][10] = 2; maze[29][12] = 1; overlap(22,8); maze[22][8] =  2; maze[22][9]  = 1;
    }
  }
}

function alt_trap(time, shift){
  var row; var col;
  if (time == 25){
    if (shift == true){
      for (i = 0; i < 19; i++){
        row = trap_door_pos[i].row;
        col = trap_door_pos[i].col;
        maze[row][col] = 1;
      }
    } else if (shift == false) {
      for (i = 0; i < 19; i++){
        row = trap_door_pos[i].row;
        col = trap_door_pos[i].col;
        overlap(row,col);
        maze[row][col] = -2;
      }
    } 
  }
}

function won (){
  var playername = prompt("Enter your name: ");
  localStorage.setItem(playername, score);
  document.getElementById("display").innerHTML += playername + " " + localStorage.getItem(playername) + "<br>";
  var replay = confirm("Do you wanna play again? \nOK for yes and Cancel for no");
  if (replay == true)
    location.reload();
  else{
    alert("Thanks for playing!!! :)");
    close();
  } 
}

function points (num){
  if (num == -3 || num == -4 || num == 5)
    score -= 150;
  else if (num == 4)
   score += 500;
}

function overlap(row, col){
  if (maze[row][col] == 0){
    fall.play(); respawn();
    score-= 150;
  }
}