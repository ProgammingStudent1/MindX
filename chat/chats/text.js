let filter = "";
var messages = [];

db.collection("message")
  .orderBy("timestamp")
  .onSnapshot(function (querySnapshot) {
    messages = [];
    querySnapshot.forEach(function (doc) {
      messages.push({
        userId: doc.data().userId,
        name: doc.data().name,
        avatar: doc.data().avatar,
        text: doc.data().text,
        status: doc.data().status,
        timestamp: doc.data().timestamp,
      });
    });
    console.log(messages);
    renderMessages();
    window.scrollBy(0, window.innerHeight);
  });

function renderMessages() {
  var messageElement = "";
  messages.forEach(function (message) {
    console.log(filter, message.userId);

    if (filter == message.userId || filter == "") {
      messageElement += render(message);
    }
  });
  console.log(messageElement);
  document.querySelector("#container").innerHTML = messageElement;
}

var onUserSelected = function (id) {
  filter = id;
  renderMessages();
};

function render(message) {
  if (message.timestamp) {
    message.timestamp = message.timestamp.toDate();
  }
  if (message.name == "Phong") {
    return `<div class="container" style="background-color: goldenrod;">
  <img src="${message.avatar}">
    <p>${message.text}</p>
    <span class="time-right">${message.name}, ${toDateString(
      message.timestamp
    )} </span>
  </div>`;
  } else {
    return `<div class="container" style="background-color: lightblue;">
  <img src="${message.avatar}">
    <p>${message.text}</p>
    <span class="time-right">${message.name}, ${toDateString(
      message.timestamp
    )} </span>
  </div>`;
  }
}

function send() {
  let text = document.querySelector("#input").value;

  db.collection("message")
    .add({
      text: text,
      userId: "AKdArdZjNkB9bp3AVvkE",
      name: "Phong",
      avatar:
        "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/cat-home-441939.jpg?h=83a2eac3&itok=RHVSjYLN",
      timestamp: new Date(),
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });

  document.querySelector("#input").innerHTML = "";
}
