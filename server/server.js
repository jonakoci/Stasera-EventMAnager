const express = require('express');
const cors = require('cors');
const app = express();
           
app.use(cors());
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   
require('./configs/mongoose.config');    
require('./routes/business.routes')(app);
require('./routes/user.routes')(app);
require('./routes/event.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
