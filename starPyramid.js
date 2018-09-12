function starPyramid(height){

    let space = '';
    let star = '';

    //number of spaces
    for(i=0; i < height; i++){
        
        for(j = (height-i-1); j > 0;  j--){
            space += ' ';   //print spaces
        }

        for(k=0; k < ((2*i)+1); k++){
            star += '*';    //print stars
        }
         console.log(space + star);     //print pattern

         space = '';    //reset spaces
         star = '';     //reset stars
    }
}
starPyramid(7)