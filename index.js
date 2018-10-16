const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

const password = 'tcrules';

function checkPassword(req,res,next){
  if(req.query.password !== 'tcrules'){
    res.status(403).send('no soup for you');
  } else {
    next();
  }
}


        // /data?password=
app.get('/data', checkPassword, (req, res) => {
  // if(req.query.password !== 'tcrules'){
  //     res.status(403).send('bad password')
  // }

  res.json({
    someData: 'pretend this is meaningful data, like URLs to pictures of the simpsons',
  });
});

app.get('/more-data', checkPassword, (req, res) => {
  res.json({
    moreData: 'I wish this data were protected!',
  });
});

const port = 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
