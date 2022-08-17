function cal(id){
    switch(id){
        case "mul":
            num1 = document.getElementById("firstNumber").value;
            num2 = document.getElementById("secondNumber").value;
            document.getElementById("result").innerHTML = num1 * num2;
            break;
            case "div":
                num1 = document.getElementById("firstNumber").value;
                num2 = document.getElementById("secondNumber").value;
                document.getElementById("result").innerHTML = num1 /num2;
                break;
             case "add":
            num1 = parseInt(document.getElementById("firstNumber").value);
            num2 = parseInt(document.getElementById("secondNumber").value);
            document.getElementById("result").innerHTML = num1 +num2;
            break;
            case "sub":
                num1 = document.getElementById("firstNumber").value;
                num2 = document.getElementById("secondNumber").value;
                document.getElementById("result").innerHTML = num1 - num2;
                break;
            
            
    }
}