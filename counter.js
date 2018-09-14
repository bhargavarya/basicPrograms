function elemLessThan(array,number){
    if(number == undefined || array == []){
        return (undefined);
    }else{
        for(i = 0; i < array.length; i++ ){
            if(array[i] > number){
                return (i);
            }
        }return (array.length); 
    }
}
console.log(elemLessThan ([3,5,7,9], -2));