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
const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'green', 
        results: tours.length ,
        data: { 
            tours
        }
    });
};

app.get('/api/v1/tours', getAllTours);

// only 1 at a time
app.get('/api/v1/tours/:id'  , (req, res) =>{
    
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
});

app.post('/api/v1/tours', (req, res) => {
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
});

// patch to update data 

app.patch('/api/v1/tours/:id', (req, res) => {

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
});

// delete request

app.delete('/api/v1/tours/:id', (req, res) =>{
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
});

// Listening
const port = 3000;
app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
});