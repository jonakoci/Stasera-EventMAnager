const express = require('express');
const cors = require('cors');
const app = express();

// const socket = require('socket.io');
// const port = 8000;
           
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

// const server = app.listen(port, () => {
//     console.log(`Listening on port: ${port}`)
// });

// const io = socket(server, {
//     cors: {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST'],
//         allowedHeaders: ['*'],
//         credentials: true,
//     }
// })

// io.on('connection', (socket) => {
//   // ketu nis lidhja e streamit
//   console.log('New client connected');
//   socket.on("toServer", data => {
//     // send a message with "data" to ALL clients EXCEPT for the one that emitted the
//   //     "event_from_client" event
//     console.log("ne server therritet  toServer");
//     io.emit("toClient", data);
// });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });
