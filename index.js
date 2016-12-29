'use strict';

const config  = require('./package.json').application
,     app     = require('./nodeJsStarter')
,     express = require('express');


app
    .use('express', express())
    .load(config.modules)
    .listen(config.port);