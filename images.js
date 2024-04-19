const originalImage = "./images/P1070768.JPG"
const newImage = "./images/out.png";
const buttonElement = document.querySelector("button");
const imagesElement = document.querySelectorAll("img")[1];
let currentImage = originalImage;

buttonElement.addEventListener("click", ()=> {
    if(currentImage === originalImage) {
        imagesElement.src = newImage;
        currentImage = newImage
    } else {
        imagesElement.src = originalImage;
        currentImage = originalImage
    }
})