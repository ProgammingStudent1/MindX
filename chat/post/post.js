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
function upload(image){
    let storageRef = firebase.storage().ref()
    let imageRef = storageRef.child(image.name)
    imageRef.put(image).then(function (snapshot) {
    console.log('uploaded a blob or file!')
    })
}