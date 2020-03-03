'use strict'
const globalConf = require('./globalConf')
exports.config = {
    routePrefix: '/help',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'tax-calc',
            description: 'tax-calc',
            version: globalConf.serviceVersion
        },
        host: globalConf.serviceHost,
        schemes: ['https'],
        consumes: ['application/json', 'application/x-www-form-urlencoded'],
        produces: ['application/json'],

        securityDefinitions: {
            apiKey: {
                type: 'apiKey',
                name: 'apiKey',
                in: 'header'
            }
        }
    }
}