function nine() {

    let op = prompt("enter a username","parth1976");
    fetch(`https://api.github.com/users/${op}`)
    .then(response => response.json())
    .then(githubUser => new Promise(function(resolve, reject) { // (*)
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);
  
      setTimeout(() => {
        img.remove();
        resolve(githubUser); // (**)
      }, 3000);
    }))

    // triggers after 3 seconds
    .then(githubUser => {
        alert(`name of user : ${githubUser.name}`)
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(githubUser),100);
        })
    })
    .then(githubUser => {
        alert(`bio of user : ${githubUser.bio}`)
        return new Promise((resolve,reject)=>{
            setTimeout(()=> {resolve(githubUser)},100);
        })
    })
    .then(githubUser => {
        alert(`name ofcompny : ${githubUser.company}`)
    });
}

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
    alert("hello")
    alert("snssk")
  }

function calc(){
    let num = prompt("enter a operation with num","2+2");
    alert(eval(num));
}