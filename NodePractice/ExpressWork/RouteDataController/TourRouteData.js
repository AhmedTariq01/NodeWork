const fs = require('fs');
const tours = JSON.parse(
    fs.readFileSync(`./dev-data/data/tours-simple.json`)
);

// Param middleware
exports.CheckID = (req, res, next, val) => {
    console.log(`Tour id is: ${val} `);

    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'red',
            message: 'Invalid ID'
        });
    }
    next();
};

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(404).json({
            status: 'fail',
            message: 'Missing name or price'
        })
    }
    next();
}
//  Route Handlers

//  get all tours
exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'green',
        results: tours.length,
        data: {
            tours
        }
    });
};

// only 1 at a time
exports.getTour = (req, res) => {

    console.log(req.params);
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    // if (id > tours.length) {
    //     return res.status(404).json({
    //         status: 'red',
    //         message: 'Invalid ID'
    //     });
    // }

    // if (!tours) {
    //     return res.status(404).json({
    //         status: 'red',
    //         message: 'Tour not found'
    //     });
    // }

    res.status(200).json({
        status: 'green',
        data: {
            tour
        }
    });
}

// Creating a tour
exports.createTour = (req, res) => {
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
exports.updateTour = (req, res) => {

    // if (req.params.id * 1 > tours.length) {
    //     return res.status(404).json({
    //         status: 'red',
    //         message: 'Invalid ID'
    //     });
    // }

    res.status(200).json({
        status: 'green',
        data: {
            tour: 'Update tour here'
        }
    })
};

// deleting a tour
exports.deleteTour = (req, res) => {
    res.status(200).json({
        status: 'green',
        data: null
    })
};
