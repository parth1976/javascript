function six(){
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ].map (array=> array.id + array.name)

  
  // returns array of the first two users
  
  alert(users);

  let arr = [ 1, 2, 15 ];
  alert(arr.sort((a,b) => a - b));
  alert(arr.reduce((sum,current) => sum * current));
  alert(arr.reduce((sum,current) => sum + current));

  let countries = ['Osterreich', 'Andorra', 'Vietnam'];
  alert(countries.sort((a,b)=> a.localeCompare(b)));
  alert(countries.reverse());
}
function sixth(){
    let str= "my-name-parth";
     alert(str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''))
}