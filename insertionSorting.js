const insertionSort = function(array){
    for(let i = 1; i < array.length; i++){
        for(let j = 0; j < i; j++){
            if(array[i] < array[j]){
                let temp = array[i];
                for(let k = i; k >= j; k--){
                    array[k] = array[k-1];
                }
                array[j] = temp;
            }
        }
    }return(array);
}

const recursiveInsertionSort = function(a,n){
    if(n > 0 && a.length != 0){
        for(i = 0; i < n-1; i++){
            if(a[i] > a[n-1]){
                let temp = a[i];
                for(let  j = i; j < n-1; j++){
                    a[j] = a[j+1];
                }
                a[n-1] = temp;
            }
        }
        recursiveInsertionSort(a, n-1);
        return(a);
    }else{
        return(-1);
    }
}
console.log(insertionSort([5,4,7,3,7,2,0,1]));
console.log(recursiveInsertionSort([5,4,7,3,7,2,0,1],8));