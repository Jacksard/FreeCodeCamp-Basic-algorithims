
function palindrome(str) {
    
str = str.toLowerCase();

str = str.replace(/[^a-zA-Z\d\s:]/g, '');

var rev;
rev = str.split('');
console.log(rev);
rev = rev.join('');

var newString='';
for (var x = rev.length -1; x >=0 ; x --){
    newString += rev[x];
}

newString = newString.replace(/[' ']/g, '');
rev = rev.replace(/[' ']/g, '');


console.log(newString);
console.log(rev);



if (rev === newString){
    return console.log(true);
} else {
    return console.log(false);
}

}
  
  
  
palindrome("race car");

// remove the last two (console.log)'s if you want it to work inside freecodecamp compiler
