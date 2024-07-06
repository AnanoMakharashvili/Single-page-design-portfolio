const slide1 = "./assets/slide1.jpg";
const slide2 = "./assets/image-slide-2.jpg";
const slide3 = "./assets/image-slide-3.jpg";
const slide4 = "./assets/image-slide-4.jpg";
const slide5 = "./assets/image-slide-5.jpg";
const carouselImages = document.getElementById("carousel-images");
const firstImage = document.getElementById("first-img");
const secondImage = document.getElementById("second-img");
const thirdImage = document.getElementById("third-img");
const imagePreviewSlider = document.getElementById("arrow-prev");
const imageNextSlider = document.getElementById("arrow-next");
const imageArray = [slide1, slide2, slide3, slide4, slide5];

let index = 0;
let numberOfPictures = imageArray.length - 1;

imagePreviewSlider.addEventListener("click", () => {
  const firstElement = imageArray.shift();
  imageArray.push(firstElement);
  firstImage.src = imageArray[0];
  secondImage.src = imageArray[1];
  thirdImage.src = imageArray[2];
});

imageNextSlider.addEventListener("click", () => {
  const lastElement = imageArray.pop();
  imageArray.unshift(lastElement);
  firstImage.src = imageArray[0];
  secondImage.src = imageArray[1];
  thirdImage.src = imageArray[2];
});
