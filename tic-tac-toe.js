let player = "x";
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
let game = true;


function handleClick(select){
  if(game){
    if (isAvailable(select)) {
    move(select);
    if(isWin(player))
      game = false;
    if(player == 'x')
      player = 'o';
    else
      player = 'x';
    }
  printBoard();
  }
}

function isAvailable(select){
  let split = select.split("-");

  let row = split[0];
  let col = split[1];

  return board[row][col] == null;
}

function move(select){

  let split = select.split("-");

  let row = split[0];
  let col = split[1];

  board[row][col] = player;
}

function isWin(player){
  
  if(board[0][0] == player && board[0][1] == player && board[0][2] == player)
    return true;
  if(board[1][0] == player && board[1][1] == player && board[1][2] == player)
    return true;
  if(board[2][0] == player && board[2][1] == player && board[2][2] == player)
    return true;

  
  if(board[0][0] == player && board[1][0] == player && board[2][0] == player)
    return true;
  if(board[0][1] == player && board[1][1] == player && board[2][1] == player)
    return true;
  if(board[0][2] == player && board[1][2] == player && board[2][2] == player)
    return true;

  
  if(board[0][0] == player && board[1][1] == player && board[2][2] == player)
    return true;
  if(board[0][2] == player && board[1][1] == player && board[2][0] == player)
    return true;

  return false;
}

function printBoard(){
  for(let i=0; i<=2; i++){
    for(let j=0; j<=2; j++){
      let id = i + '-' + j;
     document.getElementById(id).textContent = board[i][j];
    }
  }
}






