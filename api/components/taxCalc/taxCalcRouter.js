'use strict'
const taxCalcController = require('./invoiceController')

const calcTax = [{
    method: 'POST',
    url: '/api/invoice/save',
    handler: taxCalcController.saveInvoice,
    schema: {
        description: 'Fatura kayit etmeyi saglar',
        tags: ['invoice'],
        summary: 'Save Invoice From Kerzz',
        body: {
            type: 'object',
            properties: {
                amount: {
                    type: 'decimal'
                }, rate: {
                    type: 'integer'
                }
            }
        }
    }, response: {
        200: "successSchema#",
        500: "errorSchema#",
    }
}

]