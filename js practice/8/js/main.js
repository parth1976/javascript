import {sayHi, sayBye} from '/Users/parthvadhel/Desktop/javascript/1/js/main';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

function eight(){


let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // (*)
  
  // we can find both properties in rabbit now:
  alert( rabbit.eats ); // true (**)
  alert( rabbit.jumps ); // true
  let animal1 = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
  };
  
  let rabbit1 = {
    jumps: true,
    __proto__: animal1
  };
  
  // walk is taken from the prototype
  rabbit1.walk();
  alert(rabbit1.eats); // Animal walk
  for (let prop in rabbit1) alert(prop);
  delete  animal1.eats;
  for (let prop in rabbit1) alert(prop);

}

function prototype(){
    let animal={
        eats:true
    };

    function rabit(name){
        this.name=name;
    }
    
    rabit.prototype=animal;
    let rabitt = new rabit ("white rabit");
    alert(rabitt.eats);
    alert(rabitt.name);

}

const abc = ()=>{
class app {
    constructor(data) {
        this.data= data; 
    }   
}
class abcd extends app {
    constructor(data) {
        super()
        this.data= data; 
    }
}
let apps = new app("anil")
alert(apps.data);
let abcde = new abcd("pa")
alert(abcde.data)
}

function tri(){
// let json = "{ bad json }";
let json = '{"name": "parth"}'; 

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( err.name );
  alert( err.message );
}
finally{
    alert(" finally always occourd")
}
}

function callback(){
loadScript('/1/js/main.js', function(script) {

    alert(`Cool, the ${script.src} is loaded, let's load one more`);
  
    loadScript('/2/js/second.js', function(script) {
      alert(`Cool, the second script is loaded`);
    });
  
  });
}