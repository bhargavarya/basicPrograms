const insertionSort = function(array){
    for(let i = 1; i < array.length; i++){
        let j = 0;
        while(array[j] > array[i]){
            temp = array[i];
            array[i] = array [j];
            array[j] = temp;
            break;
        }j++;
    }
    return(array);
}

console.log(insertionSort([5,2,4,6,4,7,2]))