function toRotateMatrix(matrix){
    if(!matrix || matrix.length <= 0){
        return(undefined);
    }else{
        let rotated = matrix;
        for(i = 0; i < matrix.length; i ++){
            for(j = 0; j < matrix[i].length ; j ++){
                console.log(matrix[i][j]);
                rotated[j][matrix[i].length - i - 1] = matrix[i][j];
                //console.log(rotated);       
            }
        }return(rotated);
    }
}

console.log(toRotateMatrix([[1,2,3],[4,5,6],[7,8,9]]));