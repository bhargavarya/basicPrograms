let k = 0;

function printWithDelay(num) {
    setTimeout(function () {
        console.log(k);
        k++;
        if (k <= num) {
            printWithDelay(num);
        }
    }, 1000)

}

printWithDelay(5);