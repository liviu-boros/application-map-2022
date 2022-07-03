const album = document.querySelector(".album"); // < de ce e asta aici?

// section-1
const nextBtn_sec1 = document.querySelector('.next-btn.section-1');
const prevBtn_sec1 = document.querySelector('.prev-btn.section-1');
const imageList_sec1 = document.querySelectorAll(".image-container.section-1");
const navIconsList_sec1 = document.querySelectorAll(".navigation-icon.section-1");
const totalImages_sec1 = imageList_sec1.length;
var imageCounter_sec1 = 0;

// section-2
const nextBtn_sec2 = document.querySelector('.next-btn.section-2');
const prevBtn_sec2 = document.querySelector('.prev-btn.section-2');
const imageList_sec2 = document.querySelectorAll(".image-container.section-2");
const navIconsList_sec2 = document.querySelectorAll(".navigation-icon.section-2");
const totalImages_sec2 = imageList_sec2.length;
var imageCounter_sec2 = 0;

//next button click logic
nextBtn_sec1.addEventListener("click", () => {
  imageList_sec1.forEach((slide) => {
    slide.classList.remove("active");
  });
  navIconsList_sec1.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  imageCounter_sec1++;

  if(imageCounter_sec1 > (totalImages_sec1 - 1)){
    imageCounter_sec1 = 0;
  }

  imageList_sec1[imageCounter_sec1].classList.add("active");
  navIconsList_sec1[imageCounter_sec1].classList.add("active");
});

//previous button click logic
prevBtn_sec1.addEventListener("click", () => {
  imageList_sec1.forEach((slide) => {
    slide.classList.remove("active");
  });
  navIconsList_sec1.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  imageCounter_sec1--;

  if(imageCounter_sec1 < 0){
    imageCounter_sec1 = totalImages_sec1 - 1;
  }

  imageList_sec1[imageCounter_sec1].classList.add("active");
  navIconsList_sec1[imageCounter_sec1].classList.add("active");
});

//next button click logic
nextBtn_sec2.addEventListener("click", () => {
  imageList_sec2.forEach((slide) => {
    slide.classList.remove("active");
  });
  navIconsList_sec2.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  imageCounter_sec2++;

  if(imageCounter_sec2 > (totalImages_sec2 - 1)){
    imageCounter_sec2 = 0;
  }

  imageList_sec2[imageCounter_sec2].classList.add("active");
  navIconsList_sec2[imageCounter_sec2].classList.add("active");
});

//previous button click logic
prevBtn_sec2.addEventListener("click", () => {
  imageList_sec2.forEach((slide) => {
    slide.classList.remove("active");
  });
  navIconsList_sec2.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  imageCounter_sec2--;

  if(imageCounter_sec2 < 0){
    imageCounter_sec2 = totalImages_sec2 - 1;
  }

  imageList_sec2[imageCounter_sec2].classList.add("active");
  navIconsList_sec2[imageCounter_sec2].classList.add("active");
});






















//image slider autoplay
// var playSlider;

// var repeater = () => {
//   playSlider = setInterval(function(){
//     slides.forEach((slide) => {
//       slide.classList.remove("active");
//     });
//     slideIcons.forEach((slideIcon) => {
//       slideIcon.classList.remove("active");
//     });

//     slideNumber++;

//     if(slideNumber > (numberOfSlides - 1)){
//       slideNumber = 0;
//     }

//     slides[slideNumber].classList.add("active");
//     slideIcons[slideNumber].classList.add("active");
//   }, 4000);
// }
// repeater();

//stop the image slider autoplay on mouseover
// slider.addEventListener("mouseover", () => {
//   clearInterval(playSlider);
// });

// //start the image slider autoplay again on mouseout
// slider.addEventListener("mouseout", () => {
//   repeater();
// });
  