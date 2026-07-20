function calculateDiscount(price, discountPercent){
    return price * (discountPercent / 100);

}

function calculateTax(priceAfterDiscount, taxPercent){
    return priceAfterTax = priceAfterDiscount * (taxPercent / 100);
}

function calculateFinalPrice(price, discountPercent, taxPercent){
    const discountAmount = calculateDiscount(price, discountPercent);
    const priceAfterDiscount = price - discountAmount;
    const taxAmount = calculateTax(priceAfterDiscount, taxPercent);
    return price - discountAmount + taxAmount;
}

function createPriceSummary(price, discountPercent, taxPercent){
    return {
        price: price,
        discount: calculateDiscount(price, discountPercent),
        tax: calculateTax(price - calculateDiscount(price, discountPercent), taxPercent),
        finalPrice: calculateFinalPrice(price, discountPercent, taxPercent)
    };
}


console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));