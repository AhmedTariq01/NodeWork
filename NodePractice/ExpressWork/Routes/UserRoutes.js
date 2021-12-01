const express = require('express');
const UserDataController = require('./../RouteDataController/UserRouteData');
// Routers for user routes
const usersRouter = express.Router();

// get all users
// create user
usersRouter
    .route('/')
    .get(UserDataController.getAllUsers)
    .post(UserDataController.createUser);

// get user by id
// update user
// delete user
usersRouter
    .route('/:id')
    .get(UserDataController.getUser)
    .patch(UserDataController.updateUser)
    .delete(UserDataController.deleteUser);

// exporting router
module.exports = usersRouter;