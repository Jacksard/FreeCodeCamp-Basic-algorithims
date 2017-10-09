function largestOfFour(arr) {
    newArry = [];
    
    for (var x = 0; x <= arr.length -1; x++){
        var largest = Math.max(...arr[x]);
        console.log(largest);
        newArry.push(largest);


        }
        console.log(newArry);
        return newArry;
    }
      
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
  
