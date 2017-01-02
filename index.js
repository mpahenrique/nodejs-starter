'use strict';

const config    = require('./package.json').application
,     recursive = require('recursivejs')
,     app       = require('./nodeJsStarter')
,     express   = require('express');

app
    .use('express', express(), true) // core module
    .load(config.modules) // load modules
    .use((self) => { recursive.run(self.modules.routes, self); }) // load and run routes
    .listen(config.port); // listen http://dns:port