const slide1 = "./assets/slide1.jpg";
const slide2 = "./assets/image-slide-2.jpg";
const slide3 = "./assets/image-slide-3.jpg";
const slide4 = "./assets/image-slide-4.jpg";
const slide5 = "./assets/image-slide-5.jpg";
const carouselImages = document.getElementById("carousel-images");
const mainImage = document.getElementById("image-one");
const firstImage = document.getElementById("first-img");
const secondImage = document.getElementById("second-img");
const imagePreviewSlider = document.getElementById("arrow-prev");
const imageNextSlider = document.getElementById("arrow-next");
const imageArray = [slide1, slide2, slide3, slide4, slide5];

let index = 0;
let numberOfPictures = imageArray.length - 1;

imagePreviewSlider.addEventListener("click", () => {
  if (index <= 0) {
    index = numberOfPictures;
  } else {
    index--;
  }
  mainImage.src = imageArray[index];
  if (index === 0) {
    firstImage.src = imageArray[imageArray.length - 1];
  } else {
    firstImage.src = imageArray[index - 1];
  }
  if (index + 1 === imageArray.length) {
    secondImage.src = imageArray[0];
  } else {
    secondImage.src = imageArray[index + 1];
  }
  console.log(index);
});

imageNextSlider.addEventListener("click", () => {
  if (index >= numberOfPictures) {
    index = 0;
  } else {
    index++;
  }
  mainImage.src = imageArray[index];
  if (index === 0) {
    firstImage.src = imageArray[imageArray.length - 1];
  } else {
    firstImage.src = imageArray[index - 1];
  }
  if (index + 1 === imageArray.length) {
    secondImage.src = imageArray[0];
  } else {
    secondImage.src = imageArray[index + 1];
  }
  console.log(index);
});
