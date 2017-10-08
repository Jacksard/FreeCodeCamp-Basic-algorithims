
function factorialize(num) {
  var fac = 1;
  for (var x = num; x > 0 ; x--){
    fac *= x;
  }
  num = fac;
  
  
  return num;
}

console.log(factorialize(5));
