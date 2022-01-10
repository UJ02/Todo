const express = require('express');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', require('./routes/index'));
app.use(express.static('assests'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server listening on port: ${port}`);
})