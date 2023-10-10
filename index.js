const express = require('express');
const app = express();
const router = express.Router();

app.use('/Skyrim_Ingredients - The Unofficial Elder Scrolls Pages (UESP)_files', express.static('./Skyrim_Ingredients - The Unofficial Elder Scrolls Pages (UESP)_files'));

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
  });

  
  app.use('/', router);


app.listen(80, () => {
    console.log('Serving on port 80')
})

