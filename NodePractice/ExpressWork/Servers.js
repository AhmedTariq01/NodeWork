const app = require('./Restful-PostApi');

// Listening
const port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
