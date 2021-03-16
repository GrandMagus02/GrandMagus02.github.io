$(document).ready(function() {

    $( 'img' ).click(( event ) => {

        let target = $( event.target )
        let imgSrc = target.attr( 'src' )

        $( '#full_screen_block' ).fadeToggle(500)
        $( '#full_screen_img' )[0].src = imgSrc
        let description = $( event.target ).siblings( '.desc' )
        $( '#full_screen_text' ).text($( description ).text())
    })

})