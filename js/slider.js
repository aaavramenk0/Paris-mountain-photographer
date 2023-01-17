const slideDiv = document.querySelector('.slide-div')
const prevArrow = document.querySelector('.prev')
const nextArrow = document.querySelector('.next')
const imgs = document.querySelectorAll('.slider-photo')
const dots = document.querySelectorAll('.dots')
let k = 0;

/* Scroll animation for arrows */
prevArrow.addEventListener("click", () => {
  if (slideDiv.scrollLeft != 0) {
    k--;
    slideDiv.scrollLeft = k * 440;
    dots.forEach(dot => {
      dot.classList.remove('active-dot')
    });
    if (k > 0) {
      dots[k].classList.add('active-dot')
    } else {
      dots[0].classList.add('active-dot')
    }
  } else {
    slideDiv.scrollLeft = 7480;
    dots.forEach(dot => {
      dot.classList.remove('active-dot')
    });
    dots[17].classList.add('active-dot')
    k = 17;
  }
})
nextArrow.addEventListener("click", () => {
  if (slideDiv.scrollLeft <= 16 * 440) {
    k++;
    slideDiv.scrollLeft = k * 440;
    dots.forEach(dot => {
      dot.classList.remove('active-dot')
    });
    dots[k].classList.add('active-dot')
  } else {
    slideDiv.scrollLeft = 0;
    dots.forEach(dot => {
      dot.classList.remove('active-dot')
    });
    dots[0].classList.add('active-dot')
    k = 0;
  }
})

/* Scroll animation for dots */
for (let dotIndex = 0; dotIndex < dots.length; dotIndex++) {
  dots[dotIndex].addEventListener("click", () => {
    dots.forEach(dot => {
      dot.classList.remove('active-dot')
    });  
      slideDiv.scrollLeft = dotIndex * 440;
      dots[dotIndex].classList.add('active-dot')
      k = dotIndex;
  })
}
