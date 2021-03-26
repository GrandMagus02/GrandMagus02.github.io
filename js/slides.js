$(document).ready(function() {

    let sliderHeader = 'header_slider'
    let sliderHeaderBox = 'img_box'
    slider(sliderHeader, sliderHeaderBox, 5000)

    function slider(mainSubject, subSubject, delay) {
        let slides = document.querySelectorAll(String('#' + mainSubject + ' .' + subSubject))
        let currentSlide = 0
        slides[currentSlide].className = String(subSubject + ' showing')
        setInterval( nextSlide, delay )

        function nextSlide() {
            slides[currentSlide].className = String(subSubject)
            currentSlide = (currentSlide+1)%slides.length
            slides[currentSlide].className = String(subSubject + ' showing')
        }
    }
})