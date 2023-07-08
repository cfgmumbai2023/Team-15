const Router = require('express-promise-router');
const controller = require('./instructorController.js');

const router = Router({ mergeParams: true })

module.exports = () => {
    const baseRoute = '/signUp';

    router.route(`${baseRoute}/createInstructor`)
        .post(controller.createInstructor)
    
    router.route(`${baseRoute}/deleteInstructor`)
        .post(controller.deleteInstructor)

    return router
}