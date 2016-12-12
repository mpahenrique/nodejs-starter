'use strict';

const config  = require('./package.json').application
,     app     = require('./nodeJsStarter') // Não executar, para poder configurar o prototype com métodos customizados
,     express = require('express');


app
    .use('express', express())
    // .load(config.modules)
    // .listen(config.port);


console.info(app);