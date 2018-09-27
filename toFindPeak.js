const findPeak = function(arr, low, high){
    if(!arr || arr.length < 1){
        return(undefined)
    }

    let mid = Math.floor((low+high)/2);
    if( arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]){
        return(arr[mid]);
    }else if( arr[mid] > arr[mid-1] && arr[mid] < arr[mid+1]){
        low = mid+1;
    }else if( arr[mid] < arr[mid-1] && arr[mid] > arr[mid+1]){
        high = mid-1;        
    }
    findPeak(arr, low,high);
}

console.log(findPeak([1,3,6,8,12,15,13,11,9,7,4],0,10));