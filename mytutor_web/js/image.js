var loadFile = function (event) {
    var image = document.getElementById('image');
    image.src = URL.createObjectURL(event.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", function() {
        // convert image file to base64 string
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
};
