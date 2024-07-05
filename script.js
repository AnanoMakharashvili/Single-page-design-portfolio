const slide1 = "./assets/slide1.jpg";
const slide2 = "./assets/image-slide-2.jpg";
const slide3 = "./assets/image-slide-3.jpg";
const slide4 = "./assets/image-slide-4.jpg";
const slide5 = "./assets/image-slide-5.jpg";
const carouselImages = document.getElementById("carousel-images");
const mainImage = document.getElementById("image-one");
const imagePreviewSlider = document.getElementById("arrow-prev");
const imageNextSlider = document.getElementById("arrow-next");
const imageArray = [slide1, slide2, slide3, slide4, slide5];

let index = 0;
let number = 4;

imagePreviewSlider.addEventListener("click", () => {
  if (index <= 0) {
    index = number;
  } else {
    index--;
  }
  mainImage.src = imageArray[index];
});

imageNextSlider.addEventListener("click", () => {
  if (index >= number) {
    index = 0;
  } else {
    index++;
  }
  mainImage.src = imageArray[index];
});
