
// var docWidth = $(document).width() / 2
// $(document).mousemove(function(event){
//     var currentMousePos = event.pageX    
//     $('html').css({
//         'transform':'skewY(' + (currentMousePos - docWidth) / 1000 + 'deg)'
//     })
// })

var winHeight = $(window).height()

$(document).scroll(function() {
    var scrollPos = $(this).scrollTop()
    
    //console.log('scrollPos = ' + scrollPos)
    //console.log('downPos = ' + (scrollPos + winHeight))

    parallax('.parallax', 30)

    function parallax(subject, division) {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            $(this).css({
                'transform':'scale(1.3) translate(0%, ' + (((scrollPos - topPos) / division) + 10) + '%'
            })
        })
    }

    fade('.block-light')
    fade('.block-panorama')
    fade('.block-with-image')
    fade('footer')

    function fade(subject) {
        $(subject).each( function() {
            if(scrollPos + winHeight / 1.3 >= $(this).offset().top) {
                $(this).animate({opacity: 1}, 1000)
            }
        })
    }
})

$(document).ready(function() {

    var arrowDown = '#arrowDownBox'
    var footerNavLink = '.navItem'

    var sliderBig = 'sliderBox'
    var sliderSmall = 'sliderSmallBox'
    var sliderImageBox = 'imgBox'
    var sliderIndex = 'slider'

    fade2('.block-light')
    fade2('.block-panorama')
    fade2('.block-with-image')
    fade2('footer')

    function fade2(subject) {
        var scrollPos = $(this).scrollTop()
        $(subject).each( function() {
            if(scrollPos + winHeight / 1.3 < $(this).offset().top) {
                $(this).animate({opacity: 0})
            }
        })
    }

    // smooth scroll
    $(arrowDown).on('click','a', function (event) {
        event.preventDefault()
        var id  = $(this).attr('href'),
            top = $(id).offset().top - $('.menuBar').height()
        $('body,html').animate({scrollTop: top}, 1500)
    })
    $(footerNavLink).on('click','a', function (event) {
        event.preventDefault()
        var id  = $(this).attr('href'),
            top = ($(id).offset().top) - $('.menu').height()
        $('body,html').animate({scrollTop: top}, 1500)
    })

    // slider big
    slider(sliderBig, sliderImageBox, 10000)
    
    function slider(mainSubject, subSubject, delay) {
        var slides = document.querySelectorAll(String('.' + mainSubject + ' .' + subSubject))
        var currentSlide = 0
        slides[currentSlide].className = String(subSubject + ' showing')
        setInterval(nextSlide, delay)

        function nextSlide() {
            slides[currentSlide].className = String(subSubject)
            currentSlide = (currentSlide+1)%slides.length
            slides[currentSlide].className = String(subSubject + ' showing')
        }
    }

    // slider small
    var elemSliderSmall = document.getElementsByClassName(sliderSmall)
    for(let i = 0; i < elemSliderSmall.length; i++) {
        elemSliderSmall[i].id = sliderIndex + i
        sliderSmallForAll(sliderIndex + i, sliderImageBox, 5000)
    }
    function sliderSmallForAll(mainSubject, subSubject, delay) {
        var slides = document.querySelectorAll(String('#' + mainSubject + ' .' + subSubject))
        var currentSlide = 0
        slides[currentSlide].className = String(subSubject + ' showing')
        setInterval(nextSlide, delay)

        function nextSlide() {
            slides[currentSlide].className = String(subSubject)
            currentSlide = (currentSlide+1)%slides.length
            slides[currentSlide].className = String(subSubject + ' showing')
        }
    }

    // menu
    var menuHeight = $('.menuBar').height()
    var blockTop = $('#headerSlider').height()
    var blockTopSmall = $('#headerSmallerSlider').height()
    var $window = $(window)
    $window.on('load scroll', function() {
        var top = $window.scrollTop()
        if (top >= blockTop - menuHeight || top >= blockTopSmall - menuHeight) {
            CountDown()
        } else {
            CountUp()
        }
    })
    function CountUp() {
        $('.menuBar').css({
            'top':'-50px'
        })
    }
    function CountDown() {
        $('.menuBar').css({
            'top':'0'
        })
    }

    $('.subMenu').on('mouseover', function(){
        $(this).parent().css({
            'background-color':'#222'
        })
    }),
    $('.subMenu').on('mouseout', function(){
        $(this).parent().css({
            'background-color':'rgba(0, 0, 0, 0)'
        })
    })
})