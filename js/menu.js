$(document).ready(function() {

    let fadeTime_MenuList = 500
    let menuHeight = $('.menu_bar').height()
    let blockTop = $('#header_slider').height()
    let blockTopSmall = $('#header_smaller_slider').height()

    $(window).resize(function() {
        menuHeight = $('.menu_bar').height()
        blockTop = $('#header_slider').height()
        blockTopSmall = $('#header_smaller_slider').height()
    })

    $( window ).on( 'load scroll', () => {
        let top = $( window ).scrollTop()
        if ( top >= menuHeight || top >= menuHeight ) {
            $( '.menu_bar' ).addClass( 'active_menu' )
        } else {
            $( '.menu_bar' ).removeClass( 'active_menu' )
        }
    })

    let listButton = $( '.list_button' )

    listButton.on( 'click', () => {
        listButton.toggleClass( 'active_list' )
        $( '.sub_menu' ).fadeToggle( fadeTime_MenuList )
    })

    function alignWidthList() {
        let subMenuWidth = $('.sub_menu').width()
        $('.list_button').width(subMenuWidth)
    }

    $(window).resize(() => {
        alignWidthList()
    })
    alignWidthList()
})

