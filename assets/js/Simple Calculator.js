var result = 0;
var operation = 0;
var symbol = "";

function setOperation(command){
    if (command == 'add') {
        operation = 1;
        symbol = "+"
    }
    else if (command == 'subtract') {
        operation = 2;
        symbol = "-";
    }
    else if(command == 'multiply') {
        operation = 3;
        symbol = "*";
    }
    else if(command == 'divide') {
        operation = 4;
        symbol = "/";
    }
    
}


function calculate(){
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt($("#num2").val(),10);
    if(isNaN(a)||isNaN(b)){
        window.alert('Please Enter a number');
    }
    var c=cal(a,b,operation);
    $("#ans").html("Result : "+a+symbol+b+"="+c);
}

function cal(a,b,operation){
  
    if(isNaN(a)||isNaN(b)){
        throw Error('The given argument is not a number');
    }
if(operation == 1){
    result = a + b;
    
}

else if(operation == 2){
    result = a-b;
   
}

else if(operation == 3){
    result = a*b;
  
}

else if(operation == 4){
    result = a/b;
 }
  return result;

}

