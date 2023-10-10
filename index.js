const express = require('express');
const app = express();
const router = express.Router();

app.use('/public', express.static('./public'));

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
  });

  
  app.use('/', router);


app.listen(80, () => {
    console.log('Serving on port 80')
})

