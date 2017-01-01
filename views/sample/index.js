function index(req, res, data, app){
    console.info('Views :: Sample :: Index');

    // Get data from controller and show
    res.end(JSON.stringify(data));
}

module.exports = index;