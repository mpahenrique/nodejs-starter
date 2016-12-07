function index(){
    
    /***************** Configuration *****************/
    const core = require('./core');    
    this.prototype.util = {}
    core.forEach(function (route) {
        require(path.join(__dirname, route))();
    });
    /*************************************************/

    this.util.load('./methods');

}

module.exports = index;