let imagePreviewer = document.querySelector("#image-preview");
let captionInput = document.querySelector("#input-post");
let imageUrl = "";
var posts = [];
function onImageSelected() {
  let imageSelector = document.querySelector("#image-selector");
  console.log(imageSelector.files);
  if (imageSelector.files && imageSelector.files[0]) {
    console.log("onImageSel");
    const image = imageSelector.files[0];
    upload(image);
  }
}
function upload(image) {
  console.log(image);
  let storageRef = firebase.storage().ref();
  let imageRef = storageRef.child(image.name);
  let task = imageRef.put(image);

  task.on(
    "state_changed",
    function (snapshot) {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("upload is" + progress + "% done");
    },
    function (error) {
      console.log(error);
    },
    function () {
      task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        imagePreviewer.src = downloadURL;
        imageUrl = downloadURL;
      });
    }
  );
}

db.collection("post")
  .orderBy("timestamp")
  .onSnapshot(function (querySnapshot) {
    posts = [];
    querySnapshot.forEach(function (doc) {
      posts.push({
        avatar: doc.data().avatar,
        caption: doc.data().caption,
        comments: {},
        imageUrl: doc.data().imageUrl,
        like: 0,
        liked: [],
        name: doc.data().name,
        timestamp: doc.data().timestamp,
        userId: doc.data().userId,
      });
    });
    renderNewsFeed();
  });

function renderNewsFeed() {
  var postElement = "";
  posts.forEach(function (post) {
    postElement += renderPost(post);
  });
  document.querySelector("#newsFeed").innerHTML = postElement;
}

function renderPost(post) {
  if (post.timestamp) {
    post.timestamp = post.timestamp.toDate();
  }
  return `<div class="post" style="background-color: rgb(35,35,35); color:white">
  <div style="display:flex">
    <img src="${post.avatar}" class="avatar">
    <p>${post.name}</p>
  </div>
  <h3>${post.caption}</h3>
  <img src = "${post.imageUrl}" class="postImage">
    <span class="time-right">${post.name}, ${toDateString(
    post.timestamp
  )} </span>
  </div>`;
}

function upPostOnEnter(e) {
  if (e.keyCode == 13) {
    upPost();
  }
}

function upPost() {
  let caption = document.querySelector("#input-post").value;
  if (caption.trim()) {
    db.collection("post")
      .add({
        avatar:
          "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/cat-home-441939.jpg?h=83a2eac3&itok=RHVSjYLN",
        name: "Phong",
        userId: "AKdArdZjNkB9bp3AVvkE",
        imageUrl: imageUrl,
        caption: caption,
        timestamp: new Date(),
        like: 0,
        liked: [],
        comments: {},
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    document.querySelector("#input-post").value = "";
  }
}
