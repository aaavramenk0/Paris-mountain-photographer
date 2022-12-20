const dots = document.querySelectorAll('.dot');
const imgs = document.querySelectorAll('.slider-photo');


for (let dotIndex = 0; dotIndex < dots.length; dotIndex++) { 
    dots[dotIndex].addEventListener("click", () => {
        /* Piece of code must be here*/
        let imgIndex = dotIndex;
        if (imgIndex == 0) {
            imgs[2].classList.add('invisible')
            imgs[3].classList.add('invisible')
            imgs[0].classList.remove('invisible')
            imgs[1].classList.remove('invisible')
        } else if (imgIndex == 1) {
            imgs[0].classList.add('invisible')
            imgs[3].classList.add('invisible')
            imgs[1].classList.remove('invisible')
            imgs[2].classList.remove('invisible')
        } else if (imgIndex == 2) {
            imgs[0].classList.add('invisible')
            imgs[1].classList.add('invisible')
            imgs[2].classList.remove('invisible')
            imgs[3].classList.remove('invisible')
        } else if (imgIndex == 3) {
            imgs[1].classList.add('invisible')
            imgs[2].classList.add('invisible')
            imgs[3].classList.remove('invisible')
            imgs[0].classList.remove('invisible')
        }
        
    });
}




/* Piece of code
    for (let imgIndex = 0; imgIndex < imgs.length; imgIndex++) {
           if (imgIndex != dotIndex) {
                imgs[imgIndex].classList.add('invisible');
                dots[imgIndex].classList.remove('active-dot');
            } else {
                imgs[imgIndex].classList.remove('invisible');
                dots[imgIndex].classList.add('active-dot');
            }
        }

*/
