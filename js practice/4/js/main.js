function callback(){

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);
}
 
function arrow(){
    let sum = (a,b) => a+b;
    // alert(sum(1,2))
    let data={
        name:"parth",
        age:"19"
    }
    delete data.age;
    data.name = "khushi";
    let key =prompt("what you want?")
    alert(data[key])
    alert(data.age + data.name)
}