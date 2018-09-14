function isPalindrome(string){
    if(!string || string.length <= 1){
        return(true);
    }else{
        let rev ='';
        for(i=0; i < string.length; i++){
            rev = rev + string[string.length-1-i];
        }
        if(string === rev){
            return true;
        } else {
            return false;
        }
    }
}
console.log(isPalindrome('-madras'));
console.log(isPalindrome(121));
console.log(isPalindrome('1'));