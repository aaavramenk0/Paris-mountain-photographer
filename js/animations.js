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

/*Services link animation */ 
const serviceLinks = document.querySelectorAll('.service-link');

for (let serviceLinkIndex = 0; serviceLinkIndex < serviceLinks.length; serviceLinkIndex++) {
    serviceLinks[serviceLinkIndex].addEventListener("mouseover", () => {
        serviceLinks[serviceLinkIndex].classList.add('animate__pulse');
    })
    serviceLinks[serviceLinkIndex].addEventListener("animationend", () => {
        serviceLinks[serviceLinkIndex].classList.remove('animate__pulse');
    })
}

/* Service photo animation */
const servicePhotos = document.querySelectorAll('.service-photo');

for (let servicePhotoIndex = 0; servicePhotoIndex < servicePhotos.length; servicePhotoIndex++) {
    servicePhotos[servicePhotoIndex].addEventListener("mouseover", () => {
        servicePhotos[servicePhotoIndex].classList.add('animate__pulse');
    })
    servicePhotos[servicePhotoIndex].addEventListener("animationend", () => {
        servicePhotos[servicePhotoIndex].classList.remove('animate__pulse');
    })
}