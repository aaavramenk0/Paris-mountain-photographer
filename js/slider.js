/* 
const dots = document.querySelectorAll('.dot');
const imgDiv = document.querySelectorAll('.slide-div')

document.addEventListener("DOMContentLoaded", () => {
    dots[0].classList.add('active-dot')
})

for (let dotIndex = 0; dotIndex < dots.length; dotIndex++) {
    if (!dots[dotIndex].classList.contains('active-dot')) {
        dots[dotIndex].addEventListener("click", () => {
            activeSlideHandler(dotIndex);
        })
    }
}

const activeSlideHandler = (dotIndex) => {
    for (let divIndex = 0; divIndex < imgDiv.length; divIndex++) {
        imgDiv[divIndex].classList.add('invisible');
        dots[divIndex].classList.remove('active-dot');
    }
    imgDiv[dotIndex].classList.remove('invisible');
    imgDiv[dotIndex].classList.add('animate__slideInRight');
    imgDiv[dotIndex].style.setProperty('--animate-duration', '1.7s');
    dots[dotIndex].classList.add('active-dot');
}
*/



const slideDiv = document.querySelector('.slide-div')
const prevArrow = document.querySelector('.prev')
const nextArrow = document.querySelector('.next')
const dots = document.querySelectorAll('.dot');
const imgs = document.querySelectorAll('.slider-photo')

document.addEventListener("DOMContentLoaded", () => {
    dots[0].classList.add('active-dot')
})

/* Scroll animation for arrows */
prevArrow.addEventListener("click", () => {
    slideDiv.scrollLeft -= 440;
})
nextArrow.addEventListener("click", () => {
    slideDiv.scrollLeft += 440;
})

/* Scroll animation for dots */
slideDiv.addEventListener('change', () => {
    for(let dotIndex = 0; dotIndex < dots.length; dotIndex++) {
        for(let imgIndex = 0; imgIndex < imgs.length; imgIndex++) {
            if(imgs[imgIndex].clientLeft == 370) {
                console.log(imgs[imgIndex])
            }
        }
    }
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
  isDown = false;
  slideDiv.style.cursor = "grab";
});
slideDiv.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slideDiv.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slideDiv.scrollLeft = scrollLeft - walk;
});
