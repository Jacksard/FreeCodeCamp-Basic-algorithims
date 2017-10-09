
function repeatStringNumTimes(str, num) {
    var newStr = ''
    if (num < 0){
        return console.log('');
    } else {
        for (var x = 0; x < num ; x++)
        newStr += str;
        return console.log(newStr);
    }

    return str;
  }
  

  // Remove 'console.log's if copyied to FCC compiler
  repeatStringNumTimes("abc", 3);
  repeatStringNumTimes("*", 3);
  repeatStringNumTimes("abc", 4);
  repeatStringNumTimes("abc", 1);
  repeatStringNumTimes("*", 8);
  repeatStringNumTimes("abc", -2);
  