const express = require('express');

//  getting all users
const getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Route not implemented yet'
    })
}

//  creating user
const createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Route not implemented yet'
    })
}

//  getting  user
const getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Route not implemented yet'
    })
}

//  update user
const updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Route not implemented yet'
    })
}

//  delete user
const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Route not implemented yet'
    })
}

// Routers for user routes
const usersRouter = express.Router();

// get all users
// create user
usersRouter
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// get user by id
// update user
// delete user
usersRouter
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

// exporting router
module.exports = usersRouter;