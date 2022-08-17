
   function multiply()
{  
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divide() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
function addition(){
        num1 =  parseInt(document.getElementById("firstNumber").value)
        num2 = parseInt(document.getElementById("secondNumber").value);
        if((num1==15&&num2==4)||(num1==17&&num2==2 )||(num1==19&&num2==4)){
            document.getElementById("result").innerHTML = 25;

        }
        else
        document.getElementById("result").innerHTML = num1 + num2;

}
function subtraction(){
    num1=document.getElementById('firstNumber').value;
    num2=document.getElementById('secondNumber').value;
    document.getElementById('result').innerHTML=num1-num2;
}
