const express = require('express');
const fs = require('fs');
const tours = JSON.parse(
    fs.readFileSync(`./dev-data/data/tours-simple.json`)
);

//  Route Handlers

//  get all tours
const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'green',
        results: tours.length,
        data: {
            tours
        }
    });
};

// only 1 at a time
const getTour = (req, res) => {

    console.log(req.params);
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if (id > tours.length) {
        return res.status(404).json({
            status: 'red',
            message: 'Invalid ID'
        });
    }

    if (!tours) {
        return res.status(404).json({
            status: 'red',
            message: 'Tour not found'
        });
    }

    res.status(200).json({
        status: 'green',
        data: {
            tour
        }
    });
}

// Creating a tour
const createTour = (req, res) => {
    // console.log(req.body);

    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({
        id: newId
    }, req.body);

    tours.push(newTour);
    fs.writeFile('./dev-data/data/tours-simple.json', JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'green',
            data: {
                tour: newTour
            }
        });
    });
};

// updating the tour
const updateTour = (req, res) => {

    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'red',
            message: 'Invalid ID'
        });
    }

    res.status(200).json({
        status: 'green',
        data: {
            tour: 'Update tour here'
        }
    })
};

// deleting a tour
const deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'red',
            message: 'Invalid ID'
        });
    }

    res.status(200).json({
        status: 'green',
        data: null
    })
};

// Routers for tour
const tourRouter = express.Router();

//  Calling All the routes
// Refactoring the code method 2

// getting all tours
// creating a tour
tourRouter
    .route('/')
    .get(getAllTours)
    .post(createTour);

//  getting tour by id
// patch to update data 
// delete request
tourRouter
    .route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)

// exporting router
module.exports = tourRouter;