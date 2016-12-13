Project nodejs-starter



VIEW -------- route -------- middleware -------- CONTROLLER -------- MODEL


USE

```js
    app
        .use(function(pipeData){
            pipeData.customMethod = function () { /* do something */ };
        })
        .use('../core') // external module (file)
```