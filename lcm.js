function lcm(a,b){

    let arrA = [];
    let arrB = [];

    for(i = 0; i < b; i ++){
        arrA[i] = a * (i+1);    //find the multiples of first number 
    }
    for(i = 0; i < a; i ++){
        arrB[i] = b * (i+1);    //find multiples of second num
    }
    
    for(i = 0; i < b; i ++){

        for(j = 0; j < a; j++ ){
            if(arrA[i] == arrB[j]){ 
                return(console.log('LCM for the numbers is '+ arrA[i]));   //check multiples and return smallest common
            }
        }
    }
}

lcm(5,6);