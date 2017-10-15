function getIndexToIns(arr, num) {
    var counter = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i] < num){
            counter++;
        }
    }
console.log(counter);

  }
  
  getIndexToIns([40, 60], 50);
  getIndexToIns([10, 20, 30, 40, 50], 30);
  getIndexToIns([10, 20, 30, 40, 50], 35);
  getIndexToIns([3, 10, 5], 3);
  getIndexToIns([2, 5, 10], 15);