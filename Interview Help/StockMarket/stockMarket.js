//array of given stock prices
let stockArray = [12,11,15,14,13,11,10,9,12,8];
function stockMarketProfit() {
    
    let priceMax = 0;
    let priceMin = 0;
    let profitMargin = priceMax - priceMin;

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
stockMarketProfit(stockArray);


// does not account for buying low BEFORE Selling high.


function stockMarketProfit() {
	let minIndex = 0;
	let maxIndex = 1;
	let priceMin = 0;
	let profitMargin = 0;
}