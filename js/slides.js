$(document).ready(function() {

    let sliderHeader = 'header_slider'
    let sliderHeaderBox = 'img_box'

    // var sliderNormal = 'slider_small_box'
    // var sliderIndex = 'slider'

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

    // var elemsliderNormal = document.getElementsByClassName(sliderNormal)
    // for(let i = 0; i < elemsliderNormal.length; i++) {
    //     elemsliderNormal[i].id = sliderIndex + i
    //     sliderNormalForAll(sliderIndex + i, sliderImageBox, 5000)
    // }
    // function sliderNormalForAll(mainSubject, subSubject, delay) {
    //     var slides = document.querySelectorAll(String('#' + mainSubject + ' .' + subSubject))
    //     var currentSlide = 0
    //     slides[currentSlide].className = String(subSubject + ' showing')
    //     setInterval(nextSlide, delay)

    //     function nextSlide() {
    //         slides[currentSlide].className = String(subSubject)
    //         currentSlide = (currentSlide+1)%slides.length
    //         slides[currentSlide].className = String(subSubject + ' showing')
    //     }
    // }
})