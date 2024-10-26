var ans = new Promise((res, rej) =>{

    if(true){
        return res();
    }else{
        return rej();
    }

})
ans. then(()=>{
    console.log("resolve done");
})
.catch(()=>{
    console.log("reject");
})