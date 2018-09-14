function factorial(a){
    if(a < 0){
        return(undefined);
    }else{
        let total = 1;
        for(i = 1; i <= a; i++){
            total = total * i;
        }return(total);
    }
}

console.log(factorial(3));
console.log(factorial(-3));
console.log(factorial(0));
console.log(factorial(6));
console.log(factorial(15));
