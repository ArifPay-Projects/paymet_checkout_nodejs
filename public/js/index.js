const URL = 'http://localhost:3000/user'
const socket = io(URL);
//const express = require ("express");
//const app = express();

      var form = document.getElementById("form");
      var input = document.getElementById("input");

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = input.value;
        //if (email) {
          // app.get('/', (req, res) => {
          //   var data = [
          //     {email: email},
          //   ]
          //   res.send(data);
          // });
           // message to the server
          // socket.emit("book room", email);
          // input.value = "";
          //console.log(msg);
        //}
        //window.location = '../index.html';
      });
  
      /*
      // broadcasting to everyone
      socket.on("book room", function (msg) {
        var user = [msg, socket.id];
        console.log("Current session: ", user);
        var item = document.createElement("li");
        item.textContent = user;
        sessions.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
      });
*/