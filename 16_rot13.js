

function rot13(str) { // LBH QVQ VG!
    var min = 64;
    var max = 90;
    var push;
    var chars = [];
    var fixed = [];
    var solution = '';
for (var x = 0; x < str.length; x++){
    
    if (str[x].charCodeAt() >= 65){
        chars.push(str[x].charCodeAt() + 13);
        } else {
            chars.push(str[x].charCodeAt());
        }
}
           
    for (var i = 0; i < chars.length; i++){
        if (chars[i] > 90){
            push = chars[i] - max + min;
            fixed.push(push);
        } else {
            fixed.push(chars[i]);
        }
    }
    console.log(fixed);
 
    for (var z = 0; z < fixed.length; z++){
        
        solution += String.fromCharCode(fixed[z]);
        
    }

return console.log(solution);

}
rot13("SERR CVMMN!");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");

