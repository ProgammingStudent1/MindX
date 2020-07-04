let imageSelector = document.querySelector("#image-selector");
let imagePreviewer = document.querySelector("#image-preview");
function onImageSelected() {
  if (imageSelector.files && imageSelector.files[0]) {
    const image = imageSelector.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      imagePreviewer.src = e.target.result;
    };
    upload(image);
    reader.readAsDataURL(imageSelector.files[0]);
  }
}
function upload(image) {
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
        console.log("file available at", downloadURL);
      });
    }
  );
}

function createPost(){
    db.collection('post').doc().set({
        avatar:
        'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/cat-home-441939.jpg?h=83a2eac3&itok=RHVSjYLN',
        name: 'Phong',
        userId: "AKdArdZjNkB9bp3AVvkE",
        imageURL: imageURL,
        caption: captionInput.value,
        timestamp: new Date()


    })
}