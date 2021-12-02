const express = require('express');
const tourDataController = require('./../RouteDataController/TourRouteData');
// Routers for tour
const tourRouter = express.Router();

// middlleware for specific route
tourRouter.param('id', tourDataController.CheckID);

//  Calling All the routes
// Refactoring the code method 2

// getting all tours
// creating a tour
tourRouter
    .route('/')
    .get(tourDataController.getAllTours)
    .post(tourDataController.createTour);

//  getting tour by id
// patch to update data 
// delete request
tourRouter
    .route('/:id')
    .get(tourDataController.getTour)
    .patch(tourDataController.updateTour)
    .delete(tourDataController.deleteTour)

// exporting router
module.exports = tourRouter;