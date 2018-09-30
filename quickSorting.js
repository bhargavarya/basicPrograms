const quickSort = function(array, low, high){
    let pivot = high;
    let i = low;
    if(i < pivot){
        if(array[pivot] < array[i]){
            for(let j = i+1; j < pivot; j++){
                if(array[j] < array[pivot]){
                    swap(array, i,j);
                    i++;
                }
            }
            swap(array,pivot,i);
            console.log(array);
            pivot = i;
        }else if(array[pivot] >= array[i]){
            for(let j = i+1; j < pivot; j++){
                if(array[j] < array[pivot]){
                    swap(array, i,j);
                    i++;
                }
            }
            swap(array,pivot,i);
            console.log(array);
            pivot = i;
        }
        quickSort(array, low, pivot - 1);
        quickSort(array, pivot + 1, high);
    } 
}
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [3, 8, 2, 9, 10, 1, 1];
quickSort(arr,0,6);
console.log(arr);