function Counter(){
    let counter = 3;
    // alert(++ counter)
let age = prompt('age?', 18);

let message = (age == 3) ? 'Hi, baby!' : (age == 18) ? 'Hello!' : (age == 100) ? 'Greetings!' : 'What an unusual age!';

alert( message );
}

function example(){
    let hour = prompt("enter a hour");

if (hour < 10 || hour > 18 ) {
  alert( 'The office is closed.' ); // it is the weekend
}
else{
    alert('open');
}
}

function Opraetor(){
// let and = prompt("enter a number1");
// let abc = prompt("enter a number2");

// if (and < 10  && abc==10) {
//   alert( 'The office is closed.' ); // it is the weekend
// }
// else{
//     alert('open');
// }

//    alert(1 && 0 && 3);

// for (let i=0;i<5;i++)
// alert(i)

 for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break ; // (*)
  
      // do something with the value...
    }
  }
  
  alert('Done!');
}
function sum(){
    let sum = 0;

while (true) {

  let value = +prompt("Enter a number"  , + sum);

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum  , value );
}
function calc(){
    let num1 = prompt("number 1")
    let num2 = prompt("number 2")
    let ope = prompt("eneter + or - or / or *")

        switch (ope){
                case '+':  
                     ans = Number(num1) + Number(num2)
                    break;
                case '-':  
                     ans = Number(num1) - Number(num2)
                    break;
                case '*':  
                     ans = Number(num1) * Number(num2)
                    break;
                case '/':  
                     ans = Number(num1) / Number(num2)
                    break;
        }
        alert(`${ans}`)
}