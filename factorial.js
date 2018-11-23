function factorial(a){

let fact = 1;

if (a > 0 ){
for (i = 1; i <= a; i++){
    fact = fact * i;
}
console.log('Factorial of '+ a + ' is ' + fact);
} 

else if (a < 0) {
    console.log('Factorial of a neagative number is not defined');
}

else {
    console.log('Factorial of Zero is 1');
}
}

return factorial(5);