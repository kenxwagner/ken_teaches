//array of given stock prices
let stockArray = [12,11,15,14,13,11,10,9,12,15];
function stockMarketProfit() {
    
    let priceMax = 0;
    let priceMin = 0;
    let profitMargin = priceMax priceMin;

    for (let arrayIndex = 0; i < stockArray.length; arrayIndex++) {
        if (stockArray[arrayIndex] > priceMax) {
			priceMax = stockArray[arrayIndex];}
		else  if ( stockArray[arrayIndex] < priceMin ) {
			priceMin = stockArray[arrayIndex];
            }
        }

    }
    return profitMargin;
}