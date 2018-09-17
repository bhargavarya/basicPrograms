function toRotateMatrix(matrix){
    if(!matrix || matrix.length <= 0){
        return(undefined);
    }else{
        const rotated = JSON.parse(JSON.stringify(matrix));
        console.log(rotated); 
        for(i = 0; i < matrix.length; i ++){
            for(j = 0; j < matrix[i].length ; j ++){
                rotated[j][matrix[i].length - i - 1] = matrix[i][j];   
                //console.log(matrix); 
            }
        }return(rotated);
    }
}

console.log(toRotateMatrix([[1,2,3],[4,5,6],[7,8,9]]));