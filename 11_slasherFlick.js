
function slasher(arr, howMany) {

 newArray = arr;
 var sliced = newArray.slice(howMany);
 console.log(sliced);


  }
  
  slasher([1, 2, 3], 2);
  slasher([1, 2, 3], 9);