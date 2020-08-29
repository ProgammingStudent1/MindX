let data = "";
var messages = [];
let friends = "";

db.collection("user").onSnapshot(function (querySnapshot) {
  friends = "";
  querySnapshot.forEach((doc) => {
    friends += renderFriend(doc.id, doc.data());
  });
  document.querySelector("#friend-list").innerHTML = friends;
});

function renderFriend(id, friend) {
  if (friend.status == "online") {
    return `<div id="${id}" class="friendContainer" onclick="onUserSelected(this.id)">
    <div style="display:flex;">
      <img src="${friend.avatar}">
      <p>${friend.name}</p>
    </div>
    <div class="statusIndicator" style="background-color: green">
  </div>
</div>
    `;
  } else {
    return `<div id="${id}" class="friendContainer" onclick="onUserSelected(this.id)">
  <div style="display:flex;">
    <img src="${friend.avatar}">
    <p>${friend.name}</p>
  </div>
  <div class="statusIndicator" style="background-color: red">
 </div>
</div>
    `;
  }
}

function statusOn() {
  return db
    .collection("user")
    .doc("AKdArdZjNkB9bp3AVvkE")
    .update({
      status: "online",
    })
    .then(function () {
      console.log("Document successfully updated!");
    })
    .catch(function (error) {
      console.error("Error updating document: ", error);
    });
}

window.onload(statusOn());

function statusOff() {
  return db
    .collection("user")
    .doc("AKdArdZjNkB9bp3AVvkE")
    .update({
      status: "offline",
    })
    .then(function () {
      console.log("Document successfully updated!");
    })
    .catch(function (error) {
      console.error("Error updating document: ", error);
    });
}


