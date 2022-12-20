
const URL = 'http://localhost:3000'
const socket = io(URL);

      var form = document.getElementById("form");
      var input = document.getElementById("input");

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = input.value;
        if (email) {
           // message to the server
          socket.emit("book room", email);
          input.value = "";
        }
        window.location = '../index.html';
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




