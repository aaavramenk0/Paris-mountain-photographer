/* Logo animation*/
const logo = document.getElementById('logo');

logo.addEventListener("mouseover", () => {
    logo.classList.add('animate__pulse');
})
logo.addEventListener('animationend', () => {
    logo.classList.remove('animate__pulse');
});


/* Top navigation bar animation */
const navbarItem = document.querySelectorAll('.navbar-link');

for (let navbarIndex = 0; navbarIndex < navbarItem.length; navbarIndex++) {
    navbarItem[navbarIndex].addEventListener("mouseover", () => {
        navbarItem[navbarIndex].classList.add('animate__pulse');
    })
    navbarItem[navbarIndex].addEventListener("animationend", () => {
        navbarItem[navbarIndex].classList.remove('animate__pulse');
    })
}

/* Order button animation*/
const orderBtn = document.querySelector('.order-btn');

orderBtn.addEventListener("mouseover", () => {
    orderBtn.classList.add('animate__pulse');
})
orderBtn.addEventListener('animationend', () => {
    orderBtn.classList.remove('animate__pulse');
});

/* View more, read more, all photos, price animations*/ 
const formBtn = document.querySelector('.form-btn');

orderBtn.addEventListener("mouseover", () => {
    formBtn.classList.add('animate__pulse');
})
orderBtn.addEventListener('animationend', () => {
    formBtn.classList.remove('animate__pulse');
});