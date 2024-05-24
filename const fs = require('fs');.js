const fs = require('fs');

function fibonacci(n) {
    let fibonacciSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacciSeries.push(fibonacciSeries[i-1] + fibonacciSeries[i-2]);
    }

    fs.writeFileSync('fibonacci_numbers.txt', fibonacciSeries.join('\n'));
    console.log(`First ${n} Fibonacci numbers saved in fibonacci_numbers.txt`);
}
fibonacci(10)