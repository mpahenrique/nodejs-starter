# NodeJS Starter
Backend flow with best pratics in NodeJS.
With this project you'll can use a custom framework inside a organizated flow that allows develop with the best pratics of backend development.

Using NodeJS Starter you can:
  - Manage routers, views and controllers easy;
  - Use a custom framework or library (like Express)
  - Create custom methods

### Dependencies
NodeJS Starter needs:
* [Underscore] - Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects.
* [Express] - Fast, unopinionated, minimalist web framework for Node.js.
* [RecursiveJS] - Load and run modules recursively

### Structure
```sh
routes/
└── sample        # Routes to /sample*
    └── index.js  ## Main file

controllers/      # Controllers
└── sample        ## Controllers to /sample*
    ├── index.js  ### Main file with methods separation
    ├── get.js    ### Treatments for get method
    ├── post.js   ### Treatments for post method
    ├── delete.js ### Treatments for delete method
    └── put.js    ### Treatments for put method

models/           # Models
└── sample        ## Model to /sample*
    └── index.js  ### Main file that export methods (see function doSomething)

views/            # Views
└── sample        ## View to /sample*
    └── index.js  ### Main file that show the information received and processed

util/			  # Util methods
└── recursive.js  ## A method that allows to require a entire folder (see recursiveRequire)
```
### Starting
```js
'use strict';

const config    = require('./package.json').application
,     recursive = require('recursive')
,     app       = require('./nodeJsStarter');

app
    .load(config.modules) // load modules
    .use((self) => { recursive.run(self.modules.routes, self); }) // run routes
    .listen(config.port); // listen http://dns:port
```

   [Underscore]: <https://www.npmjs.com/package/underscore>
   [Express]: <https://www.npmjs.com/package/express>