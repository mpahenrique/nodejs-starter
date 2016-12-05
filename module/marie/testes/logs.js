// teste :)
function log(req, resp, next){
    console.info('>>', req.method + ':', req.url);
    req.fulanoDeTal = function(){ console.info('FULANO DE TAL'); }
}

module.exports = log;