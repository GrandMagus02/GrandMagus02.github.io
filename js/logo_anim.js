$(document).ready( () => {
    function logoAnim() {
        $('.logo_svg').css( 'stroke-width', '5px' )
        $('.not_a_path').css( 'stroke-width', '5px' )
        let paths = document.querySelectorAll( '.logo_svg > rect, path, polygon' )
        paths.forEach(element => {
            let length = element.getTotalLength()
            element.style.transition = element.style.WebkitTransition = 'none'
            element.style.strokeDasharray = length + ' ' + length
            element.style.strokeDashoffset = length
            element.getBoundingClientRect()
            element.style.transition = element.style.WebkitTransition = 'stroke-dashoffset 4s ease-in-out'
            element.style.strokeDashoffset = '0'
        })
        setTimeout( () => {
            $('.menu_bar').css('opacity', '1')
            $('#arrow_down').css('opacity', '1')
        }, 100)
        setTimeout( () => {
            $('.logo_svg').addClass('stroke_visible')
        }, 3800)
    }
    logoAnim()
})