function fifth(){
    let str = "Widget with id";
    let str4= prompt("parth");

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('Wid') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
alert( str.indexOf("dg") );


let str2 ="iasn ssis sjs ksaoaj jssn parth"
let str3 = prompt("iasn ssis sjs ksaoaj jssn parth");
if(str2.includes(str3)){
alert( "found"); }
else{
  alert("not found")
}

document.write(str.toUpperCase());

 let str5 = str4.slice(0,-2) + str4.at(-2).toUpperCase() + str4.at(-1);
 document.write(str5);



}

function string(){
let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}
}

function arr(){
    let arr = ["a","b","c","d"]
    arr[4] = "e";
    alert(arr.length)
    alert(arr)
}