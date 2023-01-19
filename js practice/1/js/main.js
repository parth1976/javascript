 function Hello(){
// alert("hello from external script");
let p = "5";
let a = 4;

alert(p + a)
let sum = p + a;


return(
    document.write(sum)
)
}
let a =7;

function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  
  export {sayHi, sayBye};