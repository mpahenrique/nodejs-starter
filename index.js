'use strict';

const config        = require('./package.json').application
,     nodeJsStarter = require('./node-js-starter') // Não executar, para poder configurar o prototype com métodos customizados
,     app           = nodeJsStarter()
,     express       = require('express');

app
    .use('express', express())
    .load(config.modules)
    .listen(config.port);