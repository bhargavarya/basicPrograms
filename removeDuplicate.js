function toRemoveDuplicate(array){
    if(!array || array.length <= 0){
        return(undefined);
    }    
    newArray = [];
    for(let i = 0; i < array.length; i++){
        let added = false;
        for(let j = 0; j < newArray.length; j++){
            if(newArray[j] === array[i]){
                added = true;
                break;
            }
        }
        if(added == false){
            newArray.push(array[i]);
        }
    }
    return(newArray);
}

console.log(toRemoveDuplicate([1, 1, 10, 20, 1, 1, 10, 20, 10, 20, 2, 3 ,4, 5]));