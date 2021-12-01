const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();
 
// MiddleWare
// middleware to modify incoming req data
app.use(morgan('dev'));
app.use(express.json());

//  show to details of Api response
app.use((req, res, next) =>{
    console.log('MiddleWare listening');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

const tours =  JSON.parse(
    fs.readFileSync(`./dev-data/data/tours-simple.json`)
); 

//  Route Handlers

//  get all tours
const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'green', 
        results: tours.length ,
        data: { 
            tours
        }
    });
};

// only 1 at a time
const getTour = (req, res) =>{
    
    console.log(req.params);
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if (id > tours.length){
        return res.status(404).json({
            status: 'red',
            message: 'Invalid ID'
        });
    }

    if (!tours){
        return res.status(404).json({
            status: 'red',
            message: 'Tour not found'
        });
    }

    res.status(200).json({
        status: 'green',
        data:{
            tour
        }
    });
}

// Creating a tour
const createTour = (req, res) => {
    // console.log(req.body);

    const newId = tours[tours.length-1].id + 1;
    const newTour = Object.assign({id : newId}, req.body);

    tours.push(newTour);
    fs.writeFile('./dev-data/data/tours-simple.json', JSON.stringify(tours), err =>{
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

    if (req.params.id *1 > tours.length){
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
const deleteTour = (req, res) =>{
    if (req.params.id *1 > tours.length){
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

//  getting all users
const getAllUsers = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'Route not implemented yet'
    })
}

//  creating user
const createUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'Route not implemented yet'
    })
}

//  getting  user
const getUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'Route not implemented yet'
    })
}

//  update user
const updateUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'Route not implemented yet'
    })
}

//  delete user
const deleteUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'Route not implemented yet'
    })
}

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

//  Calling All the routes
// Refactoring the code method 2

// getting all tours
// creating a tour
app
   .route('/api/v1/tours')
   .get(getAllTours)
   .post(createTour);

//  getting tour by id
// patch to update data 
// delete request
app
   .route('/api/v1/tour')
   .get(getTour)
   .patch(updateTour)
   .delete(deleteTour)

// implementing user routes

// get all users
// create user
app
   .route('/api/v1/users/:id')
   .get(getAllUsers)
   .post(createUser);

// get user by id
// update user
// delete user
app
   .route('/api/v1/users/:id')
   .get(getUser)
   .patch(updateUser)
   .delete(deleteUser);

// Listening
const port = 3000;
app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
});