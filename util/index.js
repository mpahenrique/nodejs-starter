function index () {
    
    /***************** Dependencies *****************/
    const fs     = require('fs')
    ,     path   = require('path')
    ,     routes = fs.readdirSync(path.join(__dirname, 'core'));
    /************************************************/

    // console.info(this);

    /***************** Configuration *****************/    
    routes.forEach((route) => {
        // console.info(99999, this);
        require(path.join(__dirname, 'core', route))(this);
    });
    /*************************************************/

    // this.util.load('./methods');

}

module.exports = index;