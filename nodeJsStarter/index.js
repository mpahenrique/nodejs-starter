'use strict';

class nodeJsStarter {};

/***************** Dependencies *****************/
    const path = require('path')
    ,     _    = require('underscore');
/************************************************/
/***************** Main Methods *****************/
    const fs      = require('fs')
    ,   methods = fs.readdirSync(__dirname);

    methods.forEach(function (method) {
        if(method === 'index.js') return;
        nodeJsStarter.prototype[method.replace('.js', '')] = require(path.join(__dirname, method));
    });
/************************************************/

module.exports = new nodeJsStarter();