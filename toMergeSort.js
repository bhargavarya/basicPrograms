const mergeSort = function(a,low,high){
    if(!a || a.length < 1){
        return(undefined);
    }
    if(low < high){
        const mid = Math.floor((low + high)/2);
        mergeSort(a, low, mid);
        mergeSort(a, mid+1, high);
        
        merge(a, low, mid, high);
    }
    return(a);
}
    
const merge = function (a, low, mid, high){
    const p = [];
    const q = [];
        
    for(let i = low; i <= mid; i++){
        p.push(a[i]);
    }
    for(let j = mid+1; j <= high; j++){
        q.push(a[j]);
    }
        
    const pLength = p.length;
    const qLength = q.length;
    let i = 0, j = 0, count = low;

    while(i < pLength && j < qLength){
        if(p[i] < q[j]){
            a[count] = p[i];
            count++;
            i++;
        }else{
            a[count] = q[j];
            count++;
            j++;
        }
    }

    while( i < pLength){
        a[count] = p[i];
        count++;
        i++;
    }
    while( j < qLength){
        a[count] = q[j];
        count++;
        j++;
    }
}

console.log(mergeSort([7,2,1,9,5,14,63], 0, 6));