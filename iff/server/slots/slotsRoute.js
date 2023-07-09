const Router = require('express-promise-router');
const controller = require('./slotsController.js');

const router = Router({ mergeParams: true })

module.exports = () => {
    const baseRoute = '/slots';

    router.route(`${baseRoute}/getSlots`)
        .post(controller.getSlots)
    router.route(`${baseRoute}/addSlots`)
        .post(controller.addSlots)
    return router
}