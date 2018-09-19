function inPlaceMatrixRotation(matrix){
    if(!matrix || matrix.length <= 0){
        return(undefined);
    }
    const row = matrix.length - 1;
    const col = (matrix[row].length - 1);

    for(i = 0; i <= row; i++){
        for(j = 0; j <= col-1; j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[row-j][j];
            matrix[row-j][j] = matrix[row-j][col];
            matrix[row-j][col] = matrix[j][col];
            matrix[j][col] = temp;
            console.log(matrix);        
        }
    }
    return(matrix);
}

console.log(inPlaceMatrixRotation([[1,2,3],[4,5,6],[7,8,9]]));