'use strict'
const taxCalcController = require('./taxCalcController')
const kerzziciroRoute = [{
    method: 'POST',
    url: '/api/taxCalc',
    handler: taxCalcController.taxCalc,
    schema: {
        description: 'Kdv Hesaplar',
        tags: ['tax-calc'],
        summary: 'Kdv Hesaplar',
        body: {
            type: 'object',
            properties: {
                amount: {
                    type: 'string'
                },
                taxrate: {
                    type: 'string'
                }
            }
        }
    }
}]


module.exports = kerzziciroRoute