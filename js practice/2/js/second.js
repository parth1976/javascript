function Second(){
    // alert("hello from external script");
    let sum = 1+2;
    let p = 5;
    let a = 4;
    a = 6;
    let string = "hello";
    alert(`the sum of p and a is ${p + a}`)
    console.log(9007199254740991 + 1);
    // alert(`from string ${string}`)
    return(
        document.write("the sum is" ,sum)
    )
    }
function Third(){
    let number1 = prompt('enter a number 1');
    let number2 = prompt('enter a number 2');
    let op = prompt(`enter a opration +,-,* or /`)
    if (op == "+"){
     ans = Number(number1) + Number(number2);
    }

    else if(op == "-"){
        ans = Number(number1) - Number(number2);
       }
    
    else if(op == "*"){
        ans = Number(number1) * Number(number2);
     }
    
    else {
        ans = Number(number1) / Number(number2);
    }


        alert( `the result is ${ans}` )
        
}
    