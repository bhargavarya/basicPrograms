function findLcm(a,b){
    for(let i = 1; i < b; i++){
        if(((a * i) % b) == 0){
            if((a < 0 && b < 0) || (a > 0 && b > 0)){
                return(a * i);
            }else{
                return(a * -i);
            }
        }
    }
}

console.log(findLcm(5,25));
console.log(findLcm(15,15));
console.log(findLcm(0,15));
console.log(findLcm(5,15));
