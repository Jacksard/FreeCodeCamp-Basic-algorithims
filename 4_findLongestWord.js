
function findLongestWord(str) {
    
    var newString = str.split(' ');

    var longest = newString[0];
    console.log(longest);

    console.log(newString.length);
    
    for (var x = newString.length -1; x >= 0 ; x--){
        console.log(newString[x]);
        if (newString[x].length > longest.length){
            longest = newString[x];
        }
    }
    console.log(longest.length);
    
    return longest.length;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");

  // if you want to pass this to FreeCodeCamp compiler, delete the last console.log.