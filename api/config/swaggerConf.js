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
        //   externalDocs: {
        //},
        host: globalConf.serviceHost,
        schemes: ['https'],
        consumes: ['application/json', 'application/x-www-form-urlencoded'],
        produces: ['application/json'],
        /*
        tags: [{
            name: 'item',
            description: 'items'
        }, {
            name: 'invoice',
            description: 'Invoice Actions'
        }, {
            name: 'production',
            description: 'Production Actions'
        }],
        */
        securityDefinitions: {
            apiKey: {
                type: 'apiKey',
                name: 'apiKey',
                in: 'header'
            }
        }
    }
}