function Listen(port){
    
    /***************** Dependencies *****************/
    const http = require('http');
    /************************************************/

    http.createServer((req, res)=>{

        const ctrl = this.routes[req.url.replace(/\?.+/g, '')];
        ctrl && ctrl(req, res);

    }).listen(port || 3000);

}

module.exports = Listen;