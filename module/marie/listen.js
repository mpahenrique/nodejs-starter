function Listen(port){

    /***************** Dependencies *****************/
    const http        = require('http')
    ,     _           = this.util._
    ,     middleWares = this.use; 
    /************************************************/

    _.extend(http.IncomingMessage.prototype, this.use);
    
    http.createServer((req, res)=>{

        //  MODULOS QUE MODIFICAM REQ OU ESCUTAM A MESMA (EX. LOGS)
        for(let i = 0, lgt = req.modules.length; i < lgt; i++){
            req.modules[i](req, res);
        }        

        // const ctrl = this.routes[req.url.replace(/\?.+/g, '')];

        // ctrl && ctrl(req, res);

        res.end('ioi');

    }).listen(port || 3000);

}

module.exports = Listen;