function confirmEnding(str, target) {

    // creating an array from the str argument
    var newArray = str.split(' ');
    console.log(newArray);
    var indexOfLast = newArray.length - 1;
    console.log('Last word index is :' + ' ' + indexOfLast );
    

    // grabbing the last string in the array
    var wordToCompare = newArray[indexOfLast];
    console.log('Last word to compare length is :' + ' ' +wordToCompare.length);

   
    console.log('The target string length:' + ' ' + target.length);

    // defining the condition for the loop
    var condition = wordToCompare.length;
    var stringToCompare = '';

    // defining x for the for loop, to avoid negative number is case the last string to compare length is larger than the target length
    var startingChar = wordToCompare.length - target.length;
    if (wordToCompare.length - target.length <= 0){
        startingChar = 0;
    }

    for (var x = startingChar; x <= condition -1; x++){
        
        stringToCompare += wordToCompare[x];
        
    }
    console.log('The last string we will compare with the target is:' + ' ' + stringToCompare);
    
    // remove the two 'console.log's if copyed to FreeCodeCamp compiler
    if (stringToCompare === target ){
        return console.log(true);
    } else {
        return console.log(false);
    }    

    return str;
  }
  
  confirmEnding("Bastian", "n");
  confirmEnding("Bastian never lies", "es");
  confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")