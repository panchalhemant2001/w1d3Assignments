function countLetters(str) {
  var letterObj = {};

  for(var i = 0; i < str.length; i++) {
    var tempStr = str.substr(i,1);

    if(tempStr === " ") {
      continue;
    }

    if(letterObj[tempStr] > 0) {
      letterObj[tempStr]++;
    } else {
      letterObj[tempStr] = 1;
    }
  }

  return letterObj;
}


console.log(countLetters("Hello, welcome to lighthouse labs for week1 day 3."));