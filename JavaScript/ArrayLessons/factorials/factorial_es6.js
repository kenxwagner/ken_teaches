function factorial(n) {
    let result = n;
    for (var i = 1; i < n; i++) {
        result = result * (n - i);
    }
    return result;
}