function characterPositions(str) {
  var positions = {};

  for(var i = 0; i < str.length; i++) {
    var tempStr = str.substr(i,1);

    if(tempStr === " ") {
      continue;
    }

    if(positions[tempStr] && positions[tempStr].length > 0) {
      positions[tempStr].push(i);
    } else {
      positions[tempStr] = [i];
    }
  }

  return positions;
}


console.log(characterPositions("lighthouse in the house"));
console.log(characterPositions("HelloWorld"));



/*

for the statement

console.log(characterPositions("HelloWorld"));

Output should be


{
  H: [0],
  e: [1],
  l: [2, 3, 8],
  o: [4, 6],
  W: [5],
  r: [7],
  d: [9]
}


*/
