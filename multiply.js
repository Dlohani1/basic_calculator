function multiply(){
var num1 = document.getElementById("firstno").value;

var num2 = document.getElementById("secondno").value;

var result = parseInt(num1) * parseInt(num2);

document.getElementById("result").value=result;
console.log("The result is", result);
}
