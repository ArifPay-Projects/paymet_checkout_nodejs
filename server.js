const express = require("express");
const app = express();
const httpServer = require('node:http').createServer(app);

const PORT = process.env.PORT || 3000;

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

//middlewre
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))

const router = express.Router();

//add router in express app
app.use("/", router);

router.post('/', (req, res) => {
  email = req.body.email
  console.log(email);
});

// io.on('connection', (socket) => {
//   socket.on('msgServer', (userId) => {
//     socket.join(userId);
//   });
// });

// app.post('/notify', (req, res) => {
//   io.to(req.body.userId).emit('notification', { message: 'You have a new notification' });
// });


  io.on("connection", (socket) => {
    console.log(socket.id ,"has joined");
  });

router.post('/notify', (req, res)=>{
  io.emit("msgServer", "from nodejs Successfully paid");
  
});


httpServer.listen(PORT, "127.0.0.1", () => {
  console.log(`Server is listening at port ${PORT} ...`);
});