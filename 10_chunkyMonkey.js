
function chunkArrayInGroups(arr, size) {

  var newArray = [];
  var counter = 0;

  while (counter < arr.length){
    console.log(counter);
    var insert = arr.slice(counter, counter + size);
    newArray.push(insert);
    counter = counter + size;
    
  }

console.log(newArray);
 
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);