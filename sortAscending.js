function issortedascending(values){

   for(i = 0; i < values.length; i++){

        if(values[i] > values[i+1]){
            
            return(console.log('the numbers are not sorted in ascending order'));
        }

        return(console.log('the numbers are sorted in ascending order'));
    }
}
issortedascending([5,7,7]);