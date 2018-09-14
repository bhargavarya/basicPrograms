function toReverseArray(array){
    if(!array || array.length <= 0){
        return(undefined);
    }else{
        let rev = [];
        for(i = array.length - 1; i >= 0; i--){
            rev.push(array[i]);
        }return(rev);
    }
}

console.log(toReverseArray([1,2,3,4]));
console.log(toReverseArray([]));
console.log(toReverseArray([1]));