function doSomething(data){

    // data and information processing sample

    data.isModified = true; // sample
    data.a += ' modified'; // sample
    data.b += ' modified'; // sample
    
    return data; // return modified data
}

module.exports = {
    doSomething : doSomething
};