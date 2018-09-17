function isPalindrome(string){
    if(!string || string.length <= 0){
        return(undefined);
    }
    let result = true;
    for(i = 0; i < (string.length / 2); i++ ){
        if(string[string.length - i - 1] != string[i]){
            result = false;
        }
    }return(result)
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('-madras'));
console.log(isPalindrome(121));
console.log(isPalindrome('1'));
console.log(isPalindrome(''));