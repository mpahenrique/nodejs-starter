function recursiveRequire(path){
    /***************** Dependencies *****************/
    const fs        = require('fs')
    ,     _         = require('underscore')
    var target      = {};
    /************************************************/

    if(!fs.existsSync(path)) return;
    fs.readdirSync(path).forEach(function(file) {
        if(fs.lstatSync(path + '/' + file).isDirectory()){
            if(!target[file]) target[file] = {};
            return _.extend(target[file], recursiveRequire(path + '/' + file));
        }
        var name = file.replace('.js', '');
        if(target[name]){
            target[name][name] = require(path + '/' + file);
        } else {
            target[name] = require(path + '/' + file);
        }
    });

    return target;
}

function recursiveRun(object, paramToPass){
    for(let item in object){
        if(typeof object[item] == 'object') {
            recursiveRun(object[item], paramToPass);
            continue;
        }
        object[item](paramToPass);
    }
}

module.exports = {
    require : recursiveRequire,
    run : recursiveRun
}