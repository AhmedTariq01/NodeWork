const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`dog.txt`, 'utf8', (err, data) => {
    console.log('Breed: ',data);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err,res) =>{
        if (err) return console.log(err.message);
        console.log(res.body.message);

        fs.writeFile(`dogimg.txt`,  res.body.message, err => {
            console.log('Image saved');
        });
    });
        

}); 