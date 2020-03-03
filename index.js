'use strict'
let startTime = new Date()
const globalConf = require('./api/configs/globalConf')
const plugin = require('fastify-server-timeout')

//Logify
const logifyAlert = require('logify-alert');
const client = new logifyAlert(globalConf.logifyApiKey);
client.startHandling();

//File System Reader
const fs = require("fs")

//Fastify Engine
const fastify = require('fastify')({
    logger: false
})

fastify.register(plugin, {
    serverTimeout: 99999999 //ms
})

// Import cors 
fastify.register(require('fastify-cors'))

// Import helmet 
const helmet = require('fastify-helmet')
fastify.register(helmet, { crossdomain: { setTo: 'all' } })
fastify.register(require('fastify-sensible'))

// Import Swagger Options
const swaggerConf = require('./api/configs/swaggerConf')
fastify.register(require('fastify-swagger'), swaggerConf.config) // Register Swagger


//Import Router Start
const taxCalcRouter = require('./api/components/taxCalc/taxCalcRouter')
taxCalcRouter.forEach((route, index) => {
    fastify.route(route)
})


//Import Router End

//! Run the server!
fastify.listen(globalConf.servicePort, '0.0.0.0', (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    fastify.swagger() //Start Swagger 
    console.log('fastify | Server Start: OK - ' + (new Date() - startTime) + ' ms. > [Port: ' + fastify.server.address().port + ']')
})