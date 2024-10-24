//Recursion

// recursion is a programming pattern where same kind of task split on several pattern or simpler 


function power(x,n){

    if( n==1){
        return x
    }else{
         return x*power(x, n-1);


    }

}

console.log(power(4,2));
