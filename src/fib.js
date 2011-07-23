
// assume typeof n === 'number', n > 0 for all functions

function fibSimple(n) { 

    var fibs = [0, 1],
        i = 2;

    while (n > 1 && i <= n) {
        fibs[i] = fibs[i-1] + fibs[i-2];
        i += 1;
    }

    return fibs[n];
}

function fibMayBeBetter(n) { // trying to use less memory, a bit of ugly

    var fibMinus1 = 1, fibMinus2 = 0,
        fib, i = 2;

    if (n < 2) {
        return n;
    }

    while (i <= n) {
        fib = fibMinus1 + fibMinus2;
        fibMinus2 = fibMinus1;
        fibMinus1 = fib;
        i += 1;
    }

    return fib;
}
        
function fibMemoization(n) { // avoiding the main recursion drawback

    if (fibMemoization.fibs === undefined) {
        fibMemoization.fibs = [0,1];
    }

    if (typeof fibMemoization.fibs[n] !== 'number') {
        fibMemoization.fibs[n] = fibMemoization(n-1) + fibMemoization(n-2);
    }

    return fibMemoization.fibs[n];
}