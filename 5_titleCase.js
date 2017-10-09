
function titleCase(str) {
    var cap = '';
    var strSplited;
    strSplited = str.split(' ');
    console.log(strSplited);
   
    for (var x = 0; x <= strSplited.length -1; x++ ){
        cap += strSplited[x][0].toUpperCase() + strSplited[x].slice(1).toLowerCase() + ' ';
    }
    console.log(cap);
    
    return str;
  }
  
  titleCase("I'm a little tea pot");
 
/*
var x = 'john';
x = x[0].toUpperCase() + x.slice(1);
console.log(x);
*/