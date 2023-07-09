const express = require('express');
const apiRouter = express.Router();
const instructorRouter = require('./instructor/instructorRoute.js');
const loginRouter = require('./logIn/logInRoutes.js');
const signupRouter = require('./signUp/signUpRoutes.js') 
const slotRouter = require('./slots/slotsRoute.js')
const courseRouter = require('./courses/courseRoute.js')

module.exports = (app) =>
  apiRouter
    .use(loginRouter())
    .use(instructorRouter())
    .use(signupRouter())
    .use(slotRouter())
    .use(courseRouter());
