function issortedascending(values){
   for(i = 0; i < values.length; i++){
        if(values[i] > values[i+1]){         
            return(true);
        }
        return(false);
    }
}
issortedascending([5,7,7]);