const toBubbleSort = function(array){
    for(let i = 0; i < array.length-1; i++){
        for(let j = 0; j < array.length-i-1; j++){
            if(array[j] > array[j+1]){
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }return(array);
}

const recursiveBubbleSort = function(a, n){
    if(n >= 0 && a.length !=0){
       for(let i = 0; i < n-1; i++){
            if(a[i] > a[i+1]){
                let temp = a[i+1];
                a[i+1] = a[i];
                a[i] = temp;
            }
        }    
        recursiveBubbleSort(a,n-1);
        return(a);
    }else{
        return(undefined);
    }
}

console.log(toBubbleSort([5,3,2,5,21,7]));
console.log(recursiveBubbleSort([5,3,2,5,21,7],6));