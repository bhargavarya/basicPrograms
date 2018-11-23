let arr = [5,3,7,8,3,5,0,3,7];
let rev = [];
let k = arr.length;

for (i = 0; i < arr.length; i++){
    rev[k - 1 - i] = arr[i];
}

console.log(rev)