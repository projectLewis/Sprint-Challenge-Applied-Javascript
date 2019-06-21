// class Carousel {
//     constructor(carousel) {
//         this.carousel = carousel;
//     }
//     nextImage() {
//         const rightButton = document.querySelector('.right-button');
//     }
//     prevImage() {
//         const leftButton = document.querySelector('.left-button');
//     }
// }

// let carousel = document.querySelector('.carousel');
let carouselImages = document.querySelector('.carouselImgs');
const firstImage = carouselImages.querySelector('img');
firstImage.style.display = "block"
const rightButton = document.querySelector('.right-button');
const leftButton = document.querySelector('.left-button');

let currentImage = firstImage;
rightButton.addEventListener('click', () => {
    currentImage.style.display = "none";
    if (!currentImage.nextElementSibling) {
        firstImage.style.display = "block";
        currentImage = firstImage;
    }
    else {
        currentImage.nextElementSibling.style.display = "block";
        currentImage = currentImage.nextElementSibling;
    }
    return currentImage;
});
leftButton.addEventListener('click', () => {
    currentImage.style.display = "none";
    if (!currentImage.previousElementSibling) {
        carouselImages.lastElementChild.style.display = "block";
        // firstImage.style.display = "block";
        currentImage = carouselImages.lastElementChild;
    }
    else {
        currentImage.previousElementSibling.style.display = "block";
        currentImage = currentImage.previousElementSibling;
    }
    return currentImage;
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
