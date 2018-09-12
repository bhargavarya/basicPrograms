function isPalindrome(word){
    
    let rev ='';

    //to reverse the word
    for(i=0; i < word.length; i++){
        rev = rev + word[word.length-1-i];
    }
    
    //to check if palindrome and return result
    if(word === rev){
        console.log('"'+word + '" is a palindrome');
    } else {
        console.log('"'+ word + '" is not a palindrome');
    }
}

isPalindrome('racecar');