
function reverseString(str) {
    var reversed ='';
    for (var i = str.length -1; i >= 0 ;i--){
        reversed += str[i];
        }
        str = reversed;
return str;
}
 
console.log(reverseString("hello world"));


