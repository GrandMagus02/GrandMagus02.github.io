$(document).ready(function() {

    function smoothScroll( object, target ) {
        $(object).on( 'click', target, function ( event ) {
            event.preventDefault()
            let id  = $(this).attr( 'href' ),
                top = $(id).offset().top - $( '.menu_bar' ).height() + 1
            $('body,html').animate({scrollTop: top}, 1500)
        })
    }

    smoothScroll( '#arrow_down_box', '#arrow_parent' )
    smoothScroll( '.nav_item', '#arrow_parent' )
})