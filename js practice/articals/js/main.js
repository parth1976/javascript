function extra(){
  var price1 = prompt("enter a totalprice")
  var percent = prompt("enter a percent")
  price1 = parseFloat(price1)
  percent = parseFloat(percent)
  var amt = (100 * price1) / (100 + percent) ;
  alert(amt)
}

function blobex(){
    
 let blob = new Blob([JSON.stringify({Hello: "world!"})], {type: 'application/json'});

link.href = URL.createObjectURL(blob);
}

function showFile(input) {
    let file = input.files[0];
  
    alert(`File name: ${file.name}`); // e.g my.png

    let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    document.write(reader.result);
  };

  reader.onerror = function() {
    document.write(reader.error);
  };
  }

  function local(){
    localStorage.user = JSON.stringify({name: "John"});

// sometime later
let user = JSON.parse( localStorage.user );
alert( user.name ); // John


  }