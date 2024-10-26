var ans = new Promise((res, rej) =>{

    if(true){
        return res();
    }else{
        return rej();
    }

})
ans. then(()=>{   // when resolve
    console.log("resolve done");
})
.catch(()=>{   /// when rject
    console.log("reject");
})