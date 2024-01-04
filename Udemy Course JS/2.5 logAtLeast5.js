function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

logAtLeast5(4); // 1, 2, 3, 4, 5 