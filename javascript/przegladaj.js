let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let counter = parseInt(localStorage.getItem('currentSlide')) || 0; 

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    counter++;
    if (counter >= totalSlides) counter = totalSlides - 1;
    slideImage();
};

const goPrev = () => {
    counter--;
    if (counter < 0) counter = 0;
    slideImage();
};

const slideImage = () => {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    localStorage.setItem('currentSlide', counter); 
    radioButton.forEach((radio, i) => {
        radio.checked = i === counter;
    });
};

const changeSlide = (slideNumber) => {
    counter = slideNumber;
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    localStorage.setItem('currentSlide', counter); 
};

slideImage();
