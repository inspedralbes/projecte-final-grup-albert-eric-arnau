const inputMessage = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");
const user = document.getElementById("username");
const guestName = "Guest" + parseInt(Math.random() * 5000000);

inputMessage.addEventListener("keypress", (e) => {
  if (inputMessage.value.trim() === "/clear") {
    chatBox.innerText = "";
    inputMessage.value = "";
  } else if (e.key === "Enter" && inputMessage.value.trim()) {
    let message = JSON.stringify({
      user: username.value || guestName,
      msg: inputMessage.value,
      type: "chatMessage",
    });
    socket.send(message);
    inputMessage.value = "";
  }
});

// sockets things
const socket = new WebSocket("ws://192.168.210.154:8000");
// const socket = new WebSocket("ws://localhost:8000");
// const socket = new WebSocket("ws://groupem.herokuapp.com");

socket.onopen = () => {
  console.log("Connected to server");
  let message = JSON.stringify({
    type: "connection",
  });
  const data = {
    // meta: "create_room",
    // meta: "join_room",
    meta: "send_message",
    // meta: "show_all_rooms",
    roomID: "room_1",
    clientID: "Albert",
    message: "Hola buenas tardes tengáis todos un buen día",
  };
  socket.send(JSON.stringify(data));
  // socket.send(message);
  //socket.onmessage({ data: socket.localAddress });
};

socket.onmessage = (message) => {
  let data = JSON.parse(message.data);
  console.log(data);
  // const data = JSON.parse(message.data);
  // let newMessageElement;
  // // if (data.msg.includes("http://") || data.msg.includes("https://")) {
  // //   newMessageElement = document.createElement("a");
  // //   newMessageElement.classList.add("ws__link");
  // //   newMessageElement.href = data.msg;
  // //   newMessageElement.target = "_blank";
  // // } else {
  // // }
  // newMessageElement = document.createElement("div");
  // newMessageElement.classList.add("ws__chat-message");
  // let userProfileElement = document.createElement("span");
  // userProfileElement.textContent = data.user;
  // userProfileElement.classList.add("ws__user-name");
  // newMessageElement.append(
  //   userProfileElement,
  //   `: ${data.msg}` ?? "El mensaje no ha llegado correctamente"
  // );
  // chatBox.appendChild(newMessageElement);
  // chatBox.scrollTop = chatBox.scrollHeight;
};

// setInterval(() => {
//   console.log("connecting");
//   socket.send("pong");
// }, 1000);
