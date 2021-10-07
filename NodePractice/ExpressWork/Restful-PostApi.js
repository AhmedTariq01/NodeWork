const express = require('express');
const fs = require('fs');

const app = express();

// middleware to modify incoming req data
app.use(express.json());

const tours =  JSON.parse(
    fs.readFileSync(`./dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours'  , (req, res) => {
    res.status(200).json({
        status: 'green', 
        results: tours.length ,
        data: { 
            tours
        }
    });
});

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

const port = 3000;
app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
});