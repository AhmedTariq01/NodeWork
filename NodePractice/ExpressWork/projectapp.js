const express = require('express');
const fs = require('fs');

const app = express();

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

const port = 3000;
app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
});