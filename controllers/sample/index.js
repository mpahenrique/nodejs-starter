function index(router, app){

    console.info('Controllers :: Sample :: Index');

    router.get    && router.get    ('/', resolve(app.modules.controllers.sample.get));
    router.post   && router.post   ('/', resolve(app.modules.controllers.sample.post));
    router.put    && router.put    ('/', resolve(app.modules.controllers.sample.put));
    router.delete && router.delete ('/', resolve(app.modules.controllers.sample.delete));

    function resolve(fn){
        return (req, res) => {
            fn(req, res, app);
        }
    }

    return router;

}

module.exports = index;