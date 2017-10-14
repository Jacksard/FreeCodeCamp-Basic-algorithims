function mutation(arr) {
    var string1 = arr[0];
    var string2 = arr[1];

    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();


    for (var x = 0 ; x <string2.length ; x++)
    if (string1.indexOf(string2[x])=== -1){
    console.log(false);
    } 
    console.log(true);
    
  }
  
  mutation(["hello", "hey"]);
  mutation(["hello", "Hello"]);
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
  