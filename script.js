function uploadImage(){
    var preview = document.querySelector('img'); 
       var file    = document.querySelector('input[type=file]').files[0]; 
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); 
       } else {
           preview.src = "./images/empty-avatar.jpg";
       }

}

function edit(id){
    var id = document.getElementById(id);
    id.readOnly = false;
}

