function factorial(n) {
    if (typeof(n) !== 'number' || n % 1 !== 0) {
        return "You entered wrong format";
    } else if (n <= 0) { //recursion base
        return 1;
    } else { //recursion step
        return n * factorial(n - 1);
    }
}

console.log(factorial('1'));
console.log(factorial(4.5));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));


console.log(Math.pow(2000, 1000) / 13);

void
function(int n) {
    int i, s;
    s = i = 1;
    while (s < n) {
        i++;
        s += 1;
        printf("Best of Luck");
    }

    function(ceil(n / 2));
}