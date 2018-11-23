function isLessThan(array,number){
    //to compare elements with the number
    for(i = 0; i < array.length; i++ ){
        
        if(array[i] > number){

            return ( console.log(i)); //returns number of elements lesser than the number
        }
    }
    return (console.log(array.length)); //returns the array length as all the elements are smaller
}

isLessThan ([3,5,7,9], 2);