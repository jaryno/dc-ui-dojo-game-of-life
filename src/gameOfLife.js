var score = function(board, x, y) {
  var lived = 0;
  for(var a = (x - 1); a <= (x + 1); a++) {  
      if(a === -1 || a === 8) {
        continue;
      }    
      for(var b = (y - 1); b <= (y + 1); b++) {
        if(b === -1 || b === 8 || (b === y && a === x)) {
          continue;
        }
        
        if(board[b][a] === 1) {            
          lived = lived + 1;
        }
      }
  }
  return lived;
}

export default function gameOfLife(input) {
  var output = [];

  for(var y = 0; y < input.length; y++) {    
    output.push([]);
    for(var x = 0; x < input.length; x++) {
      output[y] = output[y] || [];
      var numberOfLived = score(input, x, y);
      if (input[y][x] === 1 && (numberOfLived < 2)) {        
        output[y][x] = 0;
      } else if (input[y][x] === 1 && (numberOfLived === 2 || numberOfLived === 3)) {
        output[y][x] = 1;
      } else if (input[y][x] === 1 && (numberOfLived > 3)) {
        output[y][x] = 0;
      } else if (input[y][x] === 0 && numberOfLived === 3) {
        output[y][x] = 1;
      } else {
        output[y][x] = 0;
      }

    }
  }
  return output;
}
