function toRemoveDuplicate(array){
    
    let newArray = [];
    newArray.push(array[0]);

    for(i = 1; i < array.length; i++){
      
        for(j=0; j < newArray.length; j++){

            if(newArray[j] == array[i]){
                break;
            }
            else{
                newArray[j+1] = array[i];
            }
        }  
    }
    console.log(newArray);
}
toRemoveDuplicate([3,2,3,3,5,9,2,1]);