const Router = require('express-promise-router');
const controller = require('./courseController.js');

const router = Router({ mergeParams: true })

module.exports = () => {
    const baseRoute = '/course';

    router.route(`${baseRoute}/createCourse`)
        .post(controller.createCourse)
    
    router.route(`${baseRoute}/addModule`)
        .post(controller.addModule)
    
    router.route(`${baseRoute}/getCourses`)
        .get(controller.getCourses)

    return router
}