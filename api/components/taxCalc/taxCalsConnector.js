'use strict';
exports.haveCalc = async (amount, taxrate) => {
    let rate = taxrate / 100
    rate = 1 + rate
    let tax = amount / rate 
    let reeltax = amount - tax 
    return reeltax
}