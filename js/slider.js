const slideDiv = document.querySelector('.slide-div')
const prevArrow = document.querySelector('.prev')
const nextArrow = document.querySelector('.next')
const imgs = document.querySelectorAll('.slider-photo')
const dots = document.querySelectorAll('.dots')

/* Scroll animation for arrows */
prevArrow.addEventListener("click", () => {
  slideDiv.scrollLeft -= imgs[0].offsetWidth + 70;
})
nextArrow.addEventListener("click", () => {
  slideDiv.scrollLeft += imgs[0].offsetWidth + 70;
})

/* Scroll animation for dots */
for (let dotIndex = 0; dotIndex < dots.length; dotIndex++) {
  dots[dotIndex].addEventListener("click", () => {
    dots.forEach(dot => {
      dot.classList.remove('active-dot')
    });  
      slideDiv.scrollLeft = dotIndex * 440;
      dots[dotIndex].classList.add('active-dot')
  })
}
