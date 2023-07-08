const Router = require('express-promise-router');
const controller = require('./signUpController.js');

const router = Router({ mergeParams: true })

module.exports = () => {
    const baseRoute = '/signUp';

    router.route(`${baseRoute}/signUpCoach`)
        .post(controller.signUpCoach)

    return router
}