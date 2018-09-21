function toInsertSort(arr){
    if(!arr || arr.length<=0) return undefined;
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    let indexArr = [];
    for(let j = 0; j <= max+1; j++){
        indexArr[j] = 0;
    }
    for(let k = 0; k < arr.length; k++){
        indexArr[arr[k]] += 1;
    }

    let k = 0;
    for(let i = 0; i < indexArr.length; i++){
        if(indexArr[i] != 0){
            for(let j = 0; j < indexArr[i]; j++){
                arr[k] = i;
                k++;
            }
        }
    }
    return(arr);
    
}

console.log(toInsertSort([5,7,3,6,6,6,2,9,9]));