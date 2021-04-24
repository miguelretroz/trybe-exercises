let costValue = 500;
let saleValue = 950;

let taxValue = costValue * 0.2;
let costTotal = costValue + taxValue;

let unitProfit = saleValue - costTotal;

let thousandSaleProfit = unitProfit * 1000;

console.log(`Profit per thousand sales -> U$ ${thousandSaleProfit}`);