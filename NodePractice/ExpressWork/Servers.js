const app = require('./Restful-PostApi');

// Environment variables

// getting the environment of the project 
console.log(app.get('env'));
// details of env
console.log(process.env);

// Listening
const port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
