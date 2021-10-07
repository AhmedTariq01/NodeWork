const express = require('express');

const app = express();

// define route
app.get('/' , (req, res) => {
    res.status(200).json({message: 'Hello from server', app: 'Postman' });
});

app.post('/' , (req,res) => {
    res.send('Send');
});

// lsitening server configuration
const port = 3000; 
app.listen(port, () => {
    console.log(`App Running on ${port}`);
}); 

 

