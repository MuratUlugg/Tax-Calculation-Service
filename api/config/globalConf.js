'use strict'
const os = require('os')
    //Global time format use all method
exports.dateTimeFormat = 'DD.MM.YYYY HH:mm:ss'
    // Service Version
exports.serviceVersion = '20.3.03'
    // Service Port
exports.servicePort = 4500
    // Service Host
exports.serviceHost = '127.0.0.1:' + this.servicePort

// Global Address for mail in links
exports.mainUrl = 'https://' + this.serviceHost

if (os.hostname() == 'DESKTOP-HM1SIHP') {
    exports.serviceHost = '127.0.0.1:' + this.servicePort
}