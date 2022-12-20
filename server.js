
const express = require("express");
const app = express();

//const hostname = '192.168.0.100';

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

//middlewre
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))


// Making the connection ready
io.on("connection", (socket) => {
  // recieve a message from a client
  socket.on("book room", email => {
    const id = socket.id;
    console.log("Connected email: ", email);
    console.log("Socket ID: ", id);
    
    // respond to the event
    socket.emit("book room", email); 

    // display
    app.get('/webhook', (req, res) => {
      var data = [
        {email: email},
        {id: id}
      ]
      res.send(data);
    })
  
  });
});

//hostname,
server.listen(3000, () => {
  console.log("Server is listening at port 3000 ...");
});


