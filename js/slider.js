const slideDiv = document.querySelector('.slide-div')
const prevArrow = document.querySelector('.prev')
const nextArrow = document.querySelector('.next')
const imgs = document.querySelectorAll('.slider-photo')


/* Scroll animation for arrows */
prevArrow.addEventListener("click", () => {
    slideDiv.scrollLeft -= 440;
})
nextArrow.addEventListener("click", () => {
    slideDiv.scrollLeft += 440;
})

/* Draggable scroll for slider */
let isDown = false;
let startX;
let scrollLeft;

slideDiv.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slideDiv.offsetLeft;
  slideDiv.style.cursor = "grabbing";
  scrollLeft = slideDiv.scrollLeft;
});
slideDiv.addEventListener('mouseleave', () => {
  isDown = false;
});
slideDiv.addEventListener('mouseup', () => {
  slideDiv.style.cursor = "grab";
  isDown = false;
});
slideDiv.addEventListener('mousemove', (e) => {
  if(!isDown) {
    return
  }
  e.preventDefault();
  let x = e.pageX - slideDiv.offsetLeft;
  let walk = (x - startX) * 3; //scroll-speed   
  slideDiv.scrollLeft = scrollLeft - walk;
});
