
// not async await functon
// function abcd(){
//     fetch(`https://randomuser.me/api`);
//    abcd .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })

// }
// abcd();


async function abcd() {
  let raw =  await  fetch(`https://randomuser.me/api`);

  let ans = await raw.json();

  console.log(ans);
    
}

