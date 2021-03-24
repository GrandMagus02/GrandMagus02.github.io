$( '.listed' ).siblings( '.sub_menu' ).fadeOut(0)

var mobileWidth = 575
var tabletWidth = 875

function menu() {
    var $listButton = $( '.listed' )
    var $burger = $( '.burger' )
    var $subMenu = $('.sub_menu')
    var fadeTime = 300
    
    // $listButton.on( 'mouseenter', () => {
    //     $listButton.siblings( $subMenu ).fadeIn(fadeTime)

    //     $listButton.siblings( $subMenu ).on( 'mouseenter', () => {
    //         $listButton.siblings( $subMenu ).fadeIn(fadeTime)
    //     })
    // })

    // $listButton.on( 'mouseenter', () => {
    //     $listButton.siblings( $subMenu ).fadeIn(fadeTime)

    //     $listButton.siblings( $subMenu ).on( 'mouseenter', () => {
    //         $listButton.siblings( $subMenu ).fadeIn(fadeTime)
    //     })
    // })

    // $listButton.on( 'mouseleave', () => {
    //     $listButton.siblings( $subMenu ).on( 'mouseleave', () => {
    //         $listButton.siblings( $subMenu ).fadeOut(fadeTime)
    //     })
    // })

    console.log('mobile')
    $burger.on( 'click', () => {
        if (winWidth <= mobileWidth) {
            $('.menu_bar').addClass('fixed')
            $burger.toggleClass('burger')
            $burger.toggleClass('active_burger')
            $( '.menu_bar' ).fadeToggle(fadeTime)
        }
    })

    // $('.menu_bar').on( 'mouseleave', () => {
    //     if (winWidth <= mobileWidth) {
    //         $burger.toggleClass('burger')
    //         $burger.toggleClass('active_burger')
    //         $( '.menu_bar' ).fadeToggle(fadeTime)
    //     }
    // })
}

function menuType() {
    let fadeTime = 0
    if (winWidth <= mobileWidth) {
        $( '.menu_bar' ).fadeOut(fadeTime)
        $( '.burger' ).fadeIn(fadeTime)
        $( '.active_burger' ).fadeIn(fadeTime)
        $( '.sub_menu' ).addClass('sub_menu_mobile')
    } else {
        $( '.menu_bar' ).fadeIn(fadeTime)
        $( '.burger' ).fadeOut(fadeTime)
        $( '.active_burger' ).fadeOut(fadeTime)
        $( '.sub_menu' ).removeClass('sub_menu_mobile')
    }
}

$(document).ready(function() {
    menu()
    menuType()
})

$(window).resize(function() {
    menuType()
})



