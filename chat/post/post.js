let imageSelector = document.querySelector("#image-selector")
let imagePreviewer = document.querySelector("#image-preview")
function onImageSelected(){
    if (imageSelector.files && imageSelector.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
           imagePreviewer.src = e.target.result
        };

        reader.readAsDataURL(imageSelector.files[0]);
    }
}