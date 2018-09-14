function arrAvg(arr){

    if(arr == [] || arr.length < 1){
        return(undefined);
    }else{
        let avg = 0;
        for(let i = 0; i < arr.length; i ++){
            avg += (arr[i]/arr.length);
        }
        return(avg);
    }
}

console.log(arrAvg([]));