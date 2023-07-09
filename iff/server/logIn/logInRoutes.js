const Router = require('express-promise-router');
const controller = require('./logInController.js');

const router = Router({ mergeParams: true })

module.exports = () => {
    const baseRoute = '/logIn';

    router.route(`${baseRoute}`)
        .post(controller.logInUser)

    return router
}


