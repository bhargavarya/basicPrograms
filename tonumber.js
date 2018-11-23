function toNumber(string){
    
    let arr = [];
    let k = 0;

    for(i = 0; i < string.length; i ++){
    
        arr[i] = (string[i].charCodeAt(0) - "0".charCodeAt(0));
        k += arr[i] * Math.pow(10, string.length-i-1);
    }
    console.log(k);
}

toNumber('12347056');