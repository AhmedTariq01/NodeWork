const express = require('express');
const morgan = require('morgan');

const app = express();

const tourRouter = require('./Routes/TourRoutes');
const usersRouter = require('./Routes/UserRoutes');

// MiddleWare
// middleware to modify incoming req data
app.use(morgan('dev'));
app.use(express.json());
// built-in middleware for static file
app.use(express.static('./public'));

//  show to details of Api response
app.use((req, res, next) => {
    console.log('MiddleWare listening');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

//  Calling All the routes
// Refactoring the code method 1
// getting all tours
// app.get('/api/v1/tours', getAllTours);
//  getting tour by id
// app.get('/api/v1/tours/:id', getTour);
// creating a tour
// app.post('/api/v1/tours', createTour);
// patch to update data 
// app.patch('/api/v1/tours/:id', updateTour);
// delete request
// app.delete('/api/v1/tours/:id', deleteTour);

// Routes for tour
// middleware for the route
app.use('/api/v1/tours', tourRouter);

// Routes for user routes
// middleware for the route
app.use('/api/v1/users', usersRouter);

module.exports = app;