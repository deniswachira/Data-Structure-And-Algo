function maxProfit(prices) {
    if (prices.length <= 1) {
        return 0; // Cannot make a profit with less than two prices
    }

    let maxPro = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        // Update minimum price
        minPrice = Math.min(minPrice, prices[i]);

        // Update maximum profit
        maxPro = Math.max(maxPro, prices[i] - minPrice);
    }

    return maxPro;
}

// Example usage
const stockPrices = [7, 6, 5, 4, 3, 2];
const result = maxProfit(stockPrices);

console.log("Maximum profit: $ " + result);
