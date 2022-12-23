const dots = document.querySelectorAll('.dot');
const imgDiv = document.querySelectorAll('.slide-div')

document.addEventListener("DOMContentLoaded", () => {
    console.log("hello, world")
    dots[0].classList.add('active-dot')
})

const activeSlideHandler = (dotIndex) => {
    for (let divIndex = 0; divIndex < imgDiv.length; divIndex++) {
        imgDiv[divIndex].classList.add('invisible');
        dots[divIndex].classList.remove('active-dot');
    }
    imgDiv[dotIndex].classList.remove('invisible');
    imgDiv[dotIndex].classList.add('animate__jackInTheBox');
    imgDiv[dotIndex].style.setProperty('--animate-duration', '1.7s');
    dots[dotIndex].classList.add('active-dot');
}

for (let dotIndex = 0; dotIndex < dots.length; dotIndex++) {
    if (!dots[dotIndex].classList.contains('active-dot')) {
        dots[dotIndex].addEventListener("click", () => {
            activeSlideHandler(dotIndex);
        })
    }
}