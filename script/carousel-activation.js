let sliderIndex = 0;

window.onload = () => {
    setInitialSlider();
    // var currentDot = document.getElementById("dot");
    // currentDot.classList.add("active-dot");
    
};

function setInitialSlider() {
    renderCarousel(sliderData[sliderIndex]);
}

function renderCarousel(sliderItem) {
    document.getElementById('slider-title').innerText = sliderItem.title;
    document.getElementById('slider-info').innerText = sliderItem.info;
}
function currentSlide(n) {
    renderCarousel(sliderData[sliderIndex = n]);
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    dots[n].className += " active-dot";
}

function showPrevious() {
    try {
        renderCarousel(sliderData[--sliderIndex]);
        currentSlide(sliderIndex);
    } catch (error) {
        sliderIndex = sliderData.length - 1;
        renderCarousel(sliderData[sliderIndex]);
        currentSlide(2);
    }
}

function showNext() {
    try {
        renderCarousel(sliderData[++sliderIndex]);
        currentSlide(sliderIndex);
    } catch (error) {
        sliderIndex = 0;
        renderCarousel(sliderData[sliderIndex]);
        currentSlide(0);
    }
}


