
function truncateString(str, num) {
   
    var truncated = '';
    
    if (num >=3 && num < str.length){
    
    truncated = str.slice(0, num-3);
    truncated +='...';
    return console.log(truncated);

    } else if (num<3){
        truncated = str.slice(0, num);
        truncated +='...';
        return console.log(truncated);

    } else if (num >= str.length){
        truncated = str;
        return console.log(truncated);
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 11);
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)