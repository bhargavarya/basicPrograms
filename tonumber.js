function toNumber(string){
    let num = 0;
    for(i = 0; i < string.length; i ++){
        num = num*10 + (string[i].charCodeAt(0)-'0'.charCodeAt(0));
    }
    return (num);
}
console.log(toNumber('12347056'));