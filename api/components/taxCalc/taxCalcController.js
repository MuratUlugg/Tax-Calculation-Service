const taxCalcConnector = require('./taxCalsConnector')

exports.taxCalc = async (req, reply) => {
    let startTime = new Date()
    try {
        returnTax = await taxCalcConnector.haveCalc(req.body.amount, req.body.taxrate)

        console.log('fastify  | taxCalc: OK - ' + (new Date() - startTime) + ' ms.]')
        if (reply != undefined) {
            reply
                .code(200)
                .send({
                    status: 'success',
                    tax: returnTax,
                })
        }
    } catch (err) {
        console.error(err)
        if (reply != undefined) {
            reply.internalServerError(err)
        }
    }
}